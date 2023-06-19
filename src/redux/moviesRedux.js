import { options } from "../utils/tmdb.js";

//  SELECTORS
export const getFetchedAllMovies = ({ movies }) => movies.all;
export const getFetchedNowPlayingMovies = ({ movies }) => movies.nowPlaying;
export const getFetchedPopularMovies = ({ movies }) => movies.popular;
export const getFetchedTopRatedMovies = ({ movies }) => movies.topRated;
export const getFetchedUpcomingMovies = ({ movies }) => movies.upcoming;

//  ACTIONS
const createActionName = actionName => `app/movies/${actionName}`;
const GET_ALL = createActionName('GET_ALL');
const GET_NOW_PLAYING = createActionName('GET_NOW_PLAYING');
const GET_POPULAR = createActionName('GET_POPULAR');
const GET_TOP_RATED = createActionName('GET_TOP_RATED');
const GET_UPCOMING = createActionName('GET_UPCOMING');

//  ACTION CREATORS
//  ALL
export const getAllMovies = payload => ({ type: GET_ALL, payload });
export const fetchAllMovies = (page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`, options)
    .then(res => res.json())
    .then(all => { dispatch(getAllMovies(all)) })
    .catch(err => console.error(err));
  }
};

//  NOW PLAYING
export const getNowPlayingMovies = payload => ({ type: GET_NOW_PLAYING, payload });
export const fetchNowPlayingMovies = (page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`, options)
    .then(res => res.json())
    .then(nowPlaying => { dispatch(getNowPlayingMovies(nowPlaying)) })
    .catch(err => console.log(err));
  }
};

//  POPULAR
export const getPopularMovies = payload => ({ type: GET_POPULAR, payload });
export const fetchPopularMovies = (page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, options)
    .then(res => res.json())
    .then(popular => { dispatch(getPopularMovies(popular)) })
    .catch(err => console.log(err));
  }
};

//  TOP RATED
export const getTopRatedMovies = payload => ({ type: GET_TOP_RATED, payload });
export const fetchTopRatedMovies = (page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`, options)
    .then(res => res.json())
    .then(topRated => { dispatch(getTopRatedMovies(topRated)) })
    .catch(err => console.log(err));
  }
};

//  UPCOMING
export const getUpcomingMovies = payload => ({ type: GET_UPCOMING, payload });
export const fetchUpcomingMovies = (page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`, options)
    .then(res => res.json())
    .then(upcoming => { dispatch(getUpcomingMovies(upcoming)) })
    .catch(err => console.log(err));
  }
};

const moviesReducer = ( state = {}, action ) => {
  switch(action.type) {
    case GET_ALL:
      return {...state, all: { ...action.payload }}
    case GET_NOW_PLAYING:
      return {...state, nowPlaying: { ...action.payload }}
    case GET_POPULAR:
      return {...state, popular: { ...action.payload }}
    case GET_TOP_RATED:
      return {...state, topRated: { ...action.payload }}
    case GET_UPCOMING:
      return {...state, upcoming: { ...action.payload }}
    default:
      return state
  }
};

export default moviesReducer;
