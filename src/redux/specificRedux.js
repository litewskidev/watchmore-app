import { options } from "../utils/tmdb.js";

//  SELECTORS
export const getFetchedCollection = ({ specific }) => specific.collection;
export const getFetchedMovie = ({ specific }) => specific.movie;
export const getFetchedTv = ({ specific }) => specific.tv;

//  ACTIONS
const createActionName = actionName => `app/specific/${actionName}`;
const GET_COLLECTION = createActionName('GET_COLLECTION');
const GET_MOVIE = createActionName('GET_MOVIE');
const GET_TV = createActionName('GET_TV');

//  ACTION CREATORS
//  SPECIFIC COLLECTION
export const getCollection = payload => ({ type: GET_COLLECTION, payload });
export const fetchCollection = (id) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/collection/${id}?language=en-US`, options)
    .then(res => res.json())
    .then(collection => { dispatch(getCollection(collection)) })
    .catch(err => console.log(err));
  }
};

//  SPECIFIC MOVIE
export const getMovie = payload => ({ type: GET_MOVIE, payload });
export const fetchMovie = (id) => {
  return(dispatch) => {
    fetch(``, options)
    .then(res => res.json())
    .then(movie => { dispatch(getMovie(movie)) })
    .catch(err => console.log(err));
  }
};

//  SPECIFIC TV SERIES
export const getTv = payload => ({ type: GET_TV, payload });
export const fetchTv = (id) => {
  return(dispatch) => {
    fetch(``, options)
    .then(res => res.json())
    .then(tv => { dispatch(getTv(tv)) })
    .catch(err => console.log(err));
  }
};

const specificReducer = ( state = {}, action ) => {
  switch(action.type) {
    case GET_COLLECTION:
      return {...state, collection: { ...action.payload }}
    case GET_MOVIE:
      return {...state, movie: { ...action.payload }}
    case GET_TV:
      return {...state, tv: { ...action.payload }}
    default:
      return state
  }
}

export default specificReducer;
