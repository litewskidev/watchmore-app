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

const subreducers = {
  movies: moviesReducer,
  tvSeries: tvSeriesReducer,
  trending: trendingReducer,
  people: peopleReducer,
  genres: genresReducer,
  search: searchReducer,
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
