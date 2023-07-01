import { options } from "../utils/tmdb.js";

//  SELECTORS
export const getFetchedAiringTodayTv = ({ tvSeries }) => tvSeries.airingToday;
export const getFetchedOnTheAirTv = ({ tvSeries }) => tvSeries.onTheAir;
export const getFetchedPopularTv = ({ tvSeries }) => tvSeries.popular;
export const getFetchedTopRatedTv = ({ tvSeries }) => tvSeries.topRated;
export const getFetchedActionTv = ({ tvSeries }) => tvSeries.action;
export const getFetchedComedyTv = ({ tvSeries }) => tvSeries.comedy;
export const getFetchedMysteryTv = ({ tvSeries }) => tvSeries.mystery;
export const getFetchedScifiTv = ({ tvSeries }) => tvSeries.scifi;
export const getFetchedWesternTv = ({ tvSeries }) => tvSeries.western;
export const getFetchedCrimeTv = ({ tvSeries }) => tvSeries.crime;
export const getFetchedDramaTv = ({ tvSeries }) => tvSeries.drama;
export const getFetchedAnimeTv = ({ tvSeries }) => tvSeries.anime;

//  ACTIONS
const createActionName = actionName => `app/tvSeries/${actionName}`;
const GET_AIRING_TODAY = createActionName('GET_AIRING_TODAY');
const GET_ON_THE_AIR = createActionName('GET_ON_THE_AIR');
const GET_POPULAR = createActionName('GET_POPULAR');
const GET_TOP_RATED = createActionName('GET_TOP_RATED');
const GET_ACTION = createActionName('GET_ACTION');
const GET_COMEDY = createActionName('GET_COMEDY');
const GET_MYSTERY = createActionName('GET_MYSTERY');
const GET_SCIFI = createActionName('GET_SCIFI');
const GET_WESTERN = createActionName('GET_WESTERN');
const GET_CRIME = createActionName('GET_CRIME');
const GET_DRAMA = createActionName('GET_DRAMA');
const GET_ANIME = createActionName('GET_ANIME');

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

//  ACTION
export const getActionTv = payload => ({ type: GET_ACTION, payload });
export const fetchActionTv = (page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=vote_count.desc&with_genres=10759&without_genres=16`, options)
    .then(res => res.json())
    .then(action => { dispatch(getActionTv(action)) })
    .catch(err => console.log(err));
  }
};

//  COMEDY
export const getComedyTv = payload => ({ type: GET_COMEDY, payload });
export const fetchComedyTv = (page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=vote_count.desc&with_genres=35&without_genres=16`, options)
    .then(res => res.json())
    .then(comedy => { dispatch(getComedyTv(comedy)) })
    .catch(err => console.log(err));
  }
};

//  MYSTERY
export const getMysteryTv = payload => ({ type: GET_MYSTERY, payload });
export const fetchMysteryTv = (page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=vote_count.desc&with_genres=9648&without_genres=16`, options)
    .then(res => res.json())
    .then(mystery => { dispatch(getMysteryTv(mystery)) })
    .catch(err => console.log(err));
  }
};

//  SCIFI
export const getScifiTv = payload => ({ type: GET_SCIFI, payload });
export const fetchScifiTv = (page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=vote_count.desc&with_genres=10765&without_genres=16`, options)
    .then(res => res.json())
    .then(scifi => { dispatch(getScifiTv(scifi)) })
    .catch(err => console.log(err));
  }
};

//  WESTERN
export const getWesternTv = payload => ({ type: GET_WESTERN, payload });
export const fetchWesternTv = (page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=vote_count.desc&with_genres=37&without_genres=16`, options)
    .then(res => res.json())
    .then(western => { dispatch(getWesternTv(western)) })
    .catch(err => console.log(err));
  }
};

//  CRIME
export const getCrimeTv = payload => ({ type: GET_CRIME, payload });
export const fetchCrimeTv = (page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=vote_count.desc&with_genres=80&without_genres=16%2C%2010765%2C%209648%2C%2035%2C%2010759`, options)
    .then(res => res.json())
    .then(crime => { dispatch(getCrimeTv(crime)) })
    .catch(err => console.log(err));
  }
};

//  DRAMA
export const getDramaTv = payload => ({ type: GET_DRAMA, payload });
export const fetchDramaTv = (page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=vote_count.desc&with_genres=18&without_genres=16%2C%2010765%2C%209648%2C%2010759%2C%2080`, options)
    .then(res => res.json())
    .then(drama => { dispatch(getDramaTv(drama)) })
    .catch(err => console.log(err));
  }
};

//  ANIME
export const getAnimeTv = payload => ({ type: GET_ANIME, payload });
export const fetchAnimeTv = (page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=vote_count.desc&with_genres=16`, options)
    .then(res => res.json())
    .then(anime => { dispatch(getAnimeTv(anime)) })
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
    case GET_ACTION:
      return {...state, action: { ...action.payload }}
    case GET_COMEDY:
      return {...state, comedy: { ...action.payload }}
    case GET_MYSTERY:
      return {...state, mystery: { ...action.payload }}
    case GET_SCIFI:
      return {...state, scifi: { ...action.payload }}
    case GET_WESTERN:
      return {...state, western: { ...action.payload }}
    case GET_CRIME:
      return {...state, crime: { ...action.payload }}
    case GET_DRAMA:
      return {...state, drama: { ...action.payload }}
    case GET_ANIME:
      return {...state, anime: { ...action.payload }}
    default:
      return state
  }
};

export default tvSeriesReducer;
