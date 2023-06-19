//  SELECTORS
export const getSearch = ({ searchString }) => searchString;

//  ACTIONS
const createActionName = actionName => `app/searchString/${actionName}`;
const UPDATE_SEARCH = createActionName('UPDATE_SEARCH');

//  ACTIONS CREATORS
export const updateSearchString = payload => ({ type: UPDATE_SEARCH, payload });

const searchStringReducer = ( state = '', action ) => {
  switch(action.type) {
    case UPDATE_SEARCH:
      return action.payload
    default:
      return state
  }
};

export default searchStringReducer;
