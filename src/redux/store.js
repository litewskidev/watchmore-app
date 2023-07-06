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

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;
