import { options } from "../utils/tmdb.js";

//  SELECTORS
export const getFetchedAiringTodayTv = ({ tvSeries }) => tvSeries.airingToday;
export const getFetchedOnTheAirTv = ({ tvSeries }) => tvSeries.onTheAir;
export const getFetchedPopularTv = ({ tvSeries }) => tvSeries.popular;
export const getFetchedTopRatedTv = ({ tvSeries }) => tvSeries.topRated;

//  ACTIONS
const createActionName = actionName => `app/tvSeries/${actionName}`;
const GET_AIRING_TODAY = createActionName('GET_AIRING_TODAY');
const GET_ON_THE_AIR = createActionName('GET_ON_THE_AIR');
const GET_POPULAR = createActionName('GET_POPULAR');
const GET_TOP_RATED = createActionName('GET_TOP_RATED');

//  ACTION CREATORS
//  AIRING TODAY
export const getAiringTodayTv = payload => ({ type: GET_AIRING_TODAY, payload });
export const fetchAiringTodayTv = (page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=${page}`, options)
    .then(res => res.json())
    .then(airingToday => { dispatch(getAiringTodayTv(airingToday)) })
    .catch(err => console.log(err));
  }
};

//  ON THE AIR
export const getOnTheAirTv = payload => ({ type: GET_ON_THE_AIR, payload });
export const fetchOnTheAirTv = (page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=${page}`, options)
    .then(res => res.json())
    .then(onTheAir => { dispatch(getOnTheAirTv(onTheAir)) })
    .catch(err => console.log(err));
  }
};

//  POPULAR
export const getPopularTv = payload => ({ type: GET_POPULAR, payload });
export const fetchPopularTv = (page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/tv/popular?language=en-US&page=${page}`, options)
    .then(res => res.json())
    .then(popularTv => { dispatch(getPopularTv(popularTv)) })
    .catch(err => console.log(err));
  }
};

//  TOP RATED
export const getTopRatedTv = payload => ({ type: GET_TOP_RATED, payload });
export const fetchTopRatedTv = (page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=${page}`, options)
    .then(res => res.json())
    .then(topRated => { dispatch(getTopRatedTv(topRated)) })
    .catch(err => console.log(err));
  }
};

const tvSeriesReducer = ( state = {}, action ) => {
  switch(action.type) {
    case GET_AIRING_TODAY:
      return {...state, airingToday: { ...action.payload }}
    case GET_ON_THE_AIR:
      return {...state, onTheAir: { ...action.payload }}
    case GET_POPULAR:
      return {...state, popular: { ...action.payload }}
    case GET_TOP_RATED:
      return {...state, topRated: { ...action.payload }}
    default:
      return state
  }
};

export default tvSeriesReducer;
