import { options } from "../utils/tmdb.js";

//  SELECTORS
export const getSearchedMulti = ({ search }) => search.multi;
export const getSearchedMovie = ({ search }) => search.movie;
export const getSearchedTv = ({ search }) => search.tv;
export const getSearchedPerson = ({ search }) => search.person;
export const getSearchedMultiFiltered = ({ search }) => search.multi.results?.filter(result => result.poster_path !== null && result.media_type !== 'person' && result.backdrop_path !== null);

//  ACTIONS
const createActionName = actionName => `app/search/${actionName}`;
const SEARCH_MULTI = createActionName('SEARCH_MULTI');
const SEARCH_MOVIE = createActionName('SEARCH_MOVIE');
const SEARCH_TV = createActionName('SEARCH_TV');
const SEARCH_PERSON = createActionName('SEARCH_PERSON');

//  ACTION CREATORS
//  MULTI
export const searchMulti = payload => ({ type: SEARCH_MULTI, payload });
export const fetchSearchMulti = (searchString, page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/search/multi?query=${searchString}&include_adult=false&language=en-US&page=${page}`, options)
    .then(res => res.json())
    .then(multi => { dispatch(searchMulti(multi)) })
    .catch(err => console.log(err));
  }
};

//  MOVIE
export const searchMovie = payload => ({ type: SEARCH_MOVIE, payload });
export const fetchSearchMovie = (searchString, page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${searchString}&include_adult=false&language=en-US&page=${page}`, options)
    .then(res => res.json())
    .then(movie => { dispatch(searchMovie(movie)) })
    .catch(err => console.log(err));
  }
};

//  TV
export const searchTv = payload => ({ type: SEARCH_TV, payload });
export const fetchSearchTv = (searchString, page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/search/tv?query=${searchString}&include_adult=false&language=en-US&page=${page}`, options)
    .then(res => res.json())
    .then(tv => { dispatch(searchTv(tv)) })
    .catch(err => console.log(err));
  }
};

//  PERSON
export const searchPerson = payload => ({ type: SEARCH_PERSON, payload });
export const fetchSearchPerson = (searchString, page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/search/person?query=${searchString}&include_adult=false&language=en-US&page=${page}`, options)
    .then(res => res.json())
    .then(person => { dispatch(searchPerson(person)) })
    .catch(err => console.log(err));
  }
};

const searchReducer = ( state = {}, action ) => {
  switch(action.type) {
    case SEARCH_MULTI:
      return {...state, multi: { ...action.payload }}
    case SEARCH_MOVIE:
      return {...state, movie: { ...action.payload }}
    case SEARCH_TV:
      return {...state, tv: { ...action.payload }}
    case SEARCH_PERSON:
      return {...state, person: { ...action.payload }}
    default:
      return state
  }
};

export default searchReducer;
