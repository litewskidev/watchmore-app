import { options } from "../utils/tmdb.js";

//  SELECTORS
export const getFetchedCollections = state => state.collections;

//  ACTIONS
const createActionName = actionName => `app/collections/${actionName}`;
const GET_COLLECTION = createActionName('GET_COLLECTION');

//  ACTION CREATORS
//  COLLECTION
export const getCollection = payload => ({ type: GET_COLLECTION, payload });
export const fetchCollection = (id) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/collection/${id}?language=en-US`, options)
    .then(res => res.json())
    .then(collection => { dispatch(getCollection(collection)) })
    .catch(err => console.log(err))
  }
};

const collectionsReducer = ( state = [], action ) => {
  switch(action.type) {
    case GET_COLLECTION:
      return [...state, { ...action.payload }]
    default:
      return state
  }
};

export default collectionsReducer;
