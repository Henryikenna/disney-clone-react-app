import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HrMovieCard from "./HrMovieCard";

const screenWidth = window.innerWidth;

function MovieList({ genreId, index_ }) {
  const elementRef = useRef();

  const [movieList, setMovieList] = useState([]);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      console.log("movie list", resp.data.results);
      setMovieList(resp.data.results);
    });
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
    setIsAtStart(false);
    if (element.scrollWidth - element.scrollLeft <= element.clientWidth) {
      setIsAtEnd(true);
    }
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
    setIsAtEnd(false);
    if (element.scrollLeft === 0) {
      setIsAtStart(true);
    }
  };

  // console.log("Element ref is", elementRef.current.scrollLeft);
  return (
    <div className="relative">
      {!isAtStart && (
        <IoChevronBackOutline
          className={`text-[50px] text-white p-2 z-10 cursor-pointer absolute ${index_ % 3== 0 ? 'mt-[75px]' : 'mt-[150px]'} hidden md:block`}
          onClick={() => sliderLeft(elementRef.current)}
        />
      )}

      {!isAtEnd && (
        <IoChevronForwardOutline
          className={`right-0 text-[50px] text-white p-2 z-10 cursor-pointer absolute ${index_ % 3== 0 ? 'mt-[75px]' : 'mt-[150px]'} hidden md:block`}
          onClick={() => sliderRight(elementRef.current)}
        />
      )}

      <div
        className="flex overflow-x-auto gap-8  scrollbar-none pt-5 pb-5 px-3 scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <>{index_ % 3 == 0 ? <HrMovieCard movie={item} /> : <MovieCard movie={item} />}</>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
