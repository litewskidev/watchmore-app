import { options } from "../utils/tmdb.js";

//  SELECTORS
export const getFetchedMovieGenres = ({ genres }) => genres.movie;
export const getFetchedTvGenres = ({ genres }) => genres.tv;

//  ACTIONS
const createActionName = actionName => `app/genres/${actionName}`;
const GET_MOVIE = createActionName('GET_MOVIE');
const GET_TV = createActionName('GET_TV');

//  ACTION CREATORS
export const getMovieGenres = payload => ({ type: GET_MOVIE, payload });
export const fetchMovieGenres = () => {
  return(dispatch) => {
    fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
    .then(res => res.json())
    .then(movie => { dispatch(getMovieGenres(movie)) })
    .catch(err => console.log(err));
  }
};

export const getTvGenres = payload => ({ type: GET_TV, payload });
export const fetchTvGenres = () => {
  return(dispatch) => {
    fetch('https://api.themoviedb.org/3/genre/tv/list?language=en', options)
    .then(res => res.json())
    .then(tv => { dispatch(getTvGenres(tv)) })
    .catch(err => console.log(err));
  }
};

const genresReducer = ( state = {}, action ) => {
  switch(action.type) {
    case GET_MOVIE:
      return {...state, movie: { ...action.payload }}
    case GET_TV:
      return {...state, tv: { ...action.payload }}
    default:
      return state
  }
};

export default genresReducer;
