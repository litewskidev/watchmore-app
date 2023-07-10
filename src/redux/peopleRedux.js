import { options } from "../utils/tmdb.js";

//  SELECTORS
export const getFetchedPopularPeople = ({ people }) => people.popular;
export const getFetchedPerson = ({ people }) => people.person;
export const getFetchedPersonList = ({ people }) => people.list;

//  ACTIONS
const createActionName = actionName => `app/people/${actionName}`;
const GET_POPULAR = createActionName('GET_POPULAR');
const GET_PERSON = createActionName('GET_PERSON');
const GET_LIST = createActionName('GET_LIST');

//  ACTION CREATORS
//  POPULAR PEOPLE
export const getPopularPeople = payload => ({ type: GET_POPULAR, payload });
export const fetchPopularPeople = (page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/person/popular?language=en-US&page=${page}`, options)
    .then(res => res.json())
    .then(popular => { dispatch(getPopularPeople(popular)) })
    .catch(err => console.log(err));
  }
};

//  PERSON
export const getPerson = payload => ({ type: GET_PERSON, payload });
export const fetchPerson = (personId) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/person/${personId}?language=en-US`, options)
    .then(res => res.json())
    .then(person => { dispatch(getPerson(person)) })
    .catch(err => console.log(err));
  }
};

//  PERSON LIST
export const getPersonList = payload => ({ type: GET_LIST, payload });
export const fetchPersonList = (personId) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/person/${personId}/movie_credits?language=en-US`, options)
    .then(res => res.json())
    .then(list => { dispatch(getPersonList(list)) })
    .catch(err => console.log(err));
  }
};

const peopleReducer = ( state = {}, action ) => {
  switch(action.type) {
    case GET_POPULAR:
      return {...state, popular: { ...action.payload }}
    case GET_PERSON:
      return {...state, person: { ...action.payload }}
    case GET_LIST:
      return {...state, list: { ...action.payload }}
    default:
      return state
  }
};

export default peopleReducer;
