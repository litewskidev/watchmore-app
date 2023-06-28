import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import initialState from "./initialState";
import moviesReducer from "./moviesRedux";
import tvSeriesReducer from "./tvSeriesRedux";
import trendingReducer from "./trendingRedux";
import peopleReducer from "./peopleRedux";
import genresReducer from "./genresRedux";
import searchReducer from "./searchRedux";
import searchStringReducer from "./searchStringRedux";
import pageReducer from "./pageRedux";
import movieReducer from "./movieRedux";
import tvShowReducer from "./tvShowRedux";
import hubsReducer from "./hubsRedux";
import collectionsReducer from "./collectionsRedux";
import specificReducer from "./specificRedux";

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
  searchString: searchStringReducer,
  page: pageReducer
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
