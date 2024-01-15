import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "7fdf860cca8b6af55e28df43bc4ad075";

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=7fdf860cca8b6af55e28df43bc4ad075';

// https://api.themoviedb.org/3/trending/all/day?api_key=7fdf860cca8b6af55e28df43bc4ad075

const getTrendingVideos = axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);
const getMovieByGenreId = (id)=> axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default {
    getTrendingVideos,
    getMovieByGenreId
}