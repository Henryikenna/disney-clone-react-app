import React from 'react'


const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";


function MovieCard({movie}) {
  return (
    <>
        <img className='w-[110px] rounded-md cursor-pointer border-gray-200 transition-all duration-150 ease-in hover:border-[3px] hover:scale-110 md:w-[200px]' src={IMAGE_BASE_URL+movie.poster_path} alt="" />
    </>
  )
}

export default MovieCard