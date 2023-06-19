//  SELECTORS
export const getPage = ({ page }) => page;

//  ACTIONS
const createActionName = actionName => `app/page/${actionName}`;
const UPDATE_PAGE = createActionName('UPDATE_PAGE');

//  ACTIONS CREATORS
export const updatePage = payload => ({ type: UPDATE_PAGE, payload });

const pageReducer = ( state = {}, action ) => {
  switch(action.type) {
    case UPDATE_PAGE:
      return action.payload
    default:
      return state
  }
};

export default pageReducer;
