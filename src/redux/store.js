import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import initialState from "./initialState.js";
import moviesReducer from "./moviesRedux.js";
import tvSeriesReducer from "./tvSeriesRedux.js";
import trendingReducer from "./trendingRedux.js";
import peopleReducer from "./peopleRedux.js";
import genresReducer from "./genresRedux.js";
import searchReducer from "./searchRedux.js";
import searchStringReducer from "./searchStringRedux.js";
import movieReducer from "./movieRedux.js";
import tvShowReducer from "./tvShowRedux.js";
import hubsReducer from "./hubsRedux.js";
import collectionsReducer from "./collectionsRedux.js";
import specificReducer from "./specificRedux.js";

const subreducers = {
  movie: movieReducer,
  movies: moviesReducer,
  tvShow: tvShowReducer,
  tvSeries: tvSeriesReducer,
  trending: trendingReducer,
  people: peopleReducer,
  genres: genresReducer,
  search: searchReducer,
  hubs: hubsReducer,
  collections: collectionsReducer,
  specific: specificReducer,
  searchString: searchStringReducer
};

const reducer = combineReducers(subreducers);

const actionSanitizer = (action) => (
  action.type === 'FILE_DOWNLOAD_SUCCESS' && action.data ?
  { ...action, data: '<<LONG_BLOB>>' } : action
);


const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_({
      actionSanitizer,
      stateSanitizer: (state) => state.data ? { ...state, data: '<<LONG_BLOB>>' } : state
    }) : compose
  )
);

export default store;
