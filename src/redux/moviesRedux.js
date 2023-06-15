import { options } from "../utils/tmdb.js";

//  SELECTORS
export const getFetchedMovies = state => state.movies;

//  ACTIONS
const createActionName = actionName => `app/movies/${actionName}`;
const GET_MOVIES = createActionName('GET_MOVIES');

//  ACTION CREATORS
export const getMovies = payload => ({ type: GET_MOVIES, payload })
export const fetchMovies = () => {
  return(dispatch) => {
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    .then(res => res.json())
    .then(movies => {dispatch(getMovies(movies))})
    .catch(err => console.error(err));
  }
};

const moviesReducer = (statePart = {}, action) => {
  switch(action.type) {
    case GET_MOVIES:
      return { ...action.payload }
    default:
      return statePart
  }
};

export default moviesReducer;
