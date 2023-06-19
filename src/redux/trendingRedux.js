import { options } from "../utils/tmdb.js";

//  SELECTORS
export const getFetchedAllTrending = ({ trending }) => trending.all;
export const getFetchedMoviesTrending = ({ trending }) => trending.movies;
export const getFetchedTvTrending = ({ trending }) => trending.tv;
export const getFetchedPeopleTrending = ({ trending }) => trending.people;

//  ACTIONS
const createActionName = actionName => `app/trending/${actionName}`;
const GET_ALL = createActionName('GET_ALL');
const GET_MOVIES = createActionName('GET_MOVIES');
const GET_TV = createActionName('GET_TV');
const GET_PEOPLE = createActionName('GET_PEOPLE');

//  ACTION CREATORS
//  ALL
export const getAllTrending = payload => ({ type: GET_ALL, payload });
export const fetchAllTrending = (page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${page}`, options)
    .then(res => res.json())
    .then(all => { dispatch(getAllTrending(all)) })
    .catch(err => console.log(err));
  }
};

//  MOVIES
export const getMoviesTrending = payload => ({ type: GET_MOVIES, payload });
export const fetchMoviesTrending = (page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${page}`, options)
    .then(res => res.json())
    .then(movies => { dispatch(getMoviesTrending(movies)) })
    .catch(err => console.log(err));
  }
};

//  TV
export const getTvTrending = payload => ({ type: GET_TV, payload });
export const fetchTvTrending = (page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/trending/tv/day?language=en-US&page=${page}`, options)
    .then(res => res.json())
    .then(tv => { dispatch(getTvTrending(tv)) }).catch(err => console.log(err));
  }
};

//  PEOPLE
export const getPeopleTrending = payload => ({ type: GET_PEOPLE, payload });
export const fetchPeopleTrending = (page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/trending/person/day?language=en-US&page=${page}`, options)
    .then(res => res.json())
    .then(people => { dispatch(getPeopleTrending(people)) })
    .catch(err => console.log(err));
  }
};

const trendingReducer = ( state = {}, action ) => {
  switch(action.type) {
    case GET_ALL:
      return {...state, all: { ...action.payload }}
    case GET_MOVIES:
      return {...state, movies: { ...action.payload }}
    case GET_TV:
      return {...state, tv: { ...action.payload }}
    case GET_PEOPLE:
      return {...state, people: { ...action.payload }}
    default:
      return state
  }
};

export default trendingReducer;
