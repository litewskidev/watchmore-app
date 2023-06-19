import { options } from "../utils/tmdb.js";

//  SELECTORS
export const getFetchedPopularPeople = ({ people }) => people.popular;

//  ACTIONS
const createActionName = actionName => `app/people/${actionName}`;
const GET_POPULAR = createActionName('GET_POPULAR');

//  ACTION CREATORS
export const getPopularPeople = payload => ({ type: GET_POPULAR, payload });
export const fetchPopularPeople = (page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/person/popular?language=en-US&page=${page}`, options)
    .then(res => res.json())
    .then(popular => { dispatch(getPopularPeople(popular)) })
    .catch(err => console.log(err));
  }
};

const peopleReducer = ( state = {}, action ) => {
  switch(action.type) {
    case GET_POPULAR:
      return {...state, popular: { ...action.payload }}
    default:
      return state
  }
};

export default peopleReducer;
