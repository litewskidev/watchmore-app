import { options } from "../utils/tmdb.js";

//  SELECTORS
export const getFetchedCollection = ({ specific }) => specific.collection;

//  ACTIONS
const createActionName = actionName => `app/specific/${actionName}`;
const GET_COLLECTION = createActionName('GET_COLLECTION');

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

const specificReducer = ( state = {}, action ) => {
  switch(action.type) {
    case GET_COLLECTION:
      return {...state, collection: { ...action.payload }}
    default:
      return state
  }
}

export default specificReducer;
