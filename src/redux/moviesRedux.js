import { options } from "../utils/tmdb.js";

//  SELECTORS
export const getFetchedAllMovies = ({ movies }) => movies.all;
export const getFetchedNowPlayingMovies = ({ movies }) => movies.nowPlaying;
export const getFetchedPopularMovies = ({ movies }) => movies.popular;
export const getFetchedTopRatedMovies = ({ movies }) => movies.topRated;
export const getFetchedUpcomingMovies = ({ movies }) => movies.upcoming;
export const getFetchedActionMovies = ({ movies }) => movies.action;
export const getFetchedComedyMovies = ({ movies }) => movies.comedy;
export const getFetchedScifiMovies = ({ movies }) => movies.scifi;
export const getFetchedThrillerMovies = ({ movies }) => movies.thriller;
export const getFetchedDramaMovies = ({ movies }) => movies.drama;
export const getFetchedHorrorMovies = ({ movies }) => movies.horror;
export const getFetchedWarMovies = ({ movies }) => movies.war;

//  ACTIONS
const createActionName = actionName => `app/movies/${actionName}`;
const GET_ALL = createActionName('GET_ALL');
const GET_NOW_PLAYING = createActionName('GET_NOW_PLAYING');
const GET_POPULAR = createActionName('GET_POPULAR');
const GET_TOP_RATED = createActionName('GET_TOP_RATED');
const GET_UPCOMING = createActionName('GET_UPCOMING');
const GET_ACTION = createActionName('GET_ACTION');
const GET_COMEDY = createActionName('GET_COMEDY');
const GET_SCIFI = createActionName('GET_SCIFI');
const GET_DRAMA = createActionName('GET_DRAMA');
const GET_THRILLER = createActionName('GET_THRILLER');
const GET_HORROR = createActionName('GET_HORROR');
const GET_WAR = createActionName('GET_WAR');

//  ACTION CREATORS
//  ALL
export const getAllMovies = payload => ({ type: GET_ALL, payload });
export const fetchAllMovies = (page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`, options)
    .then(res => res.json())
    .then(all => { dispatch(getAllMovies(all)) })
    .catch(err => console.error(err));
  }
};

//  NOW PLAYING
export const getNowPlayingMovies = payload => ({ type: GET_NOW_PLAYING, payload });
export const fetchNowPlayingMovies = (page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`, options)
    .then(res => res.json())
    .then(nowPlaying => { dispatch(getNowPlayingMovies(nowPlaying)) })
    .catch(err => console.log(err));
  }
};

//  POPULAR
export const getPopularMovies = payload => ({ type: GET_POPULAR, payload });
export const fetchPopularMovies = (page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, options)
    .then(res => res.json())
    .then(popular => { dispatch(getPopularMovies(popular)) })
    .catch(err => console.log(err));
  }
};

//  TOP RATED
export const getTopRatedMovies = payload => ({ type: GET_TOP_RATED, payload });
export const fetchTopRatedMovies = (page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`, options)
    .then(res => res.json())
    .then(topRated => { dispatch(getTopRatedMovies(topRated)) })
    .catch(err => console.log(err));
  }
};

//  UPCOMING
export const getUpcomingMovies = payload => ({ type: GET_UPCOMING, payload });
export const fetchUpcomingMovies = (page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`, options)
    .then(res => res.json())
    .then(upcoming => { dispatch(getUpcomingMovies(upcoming)) })
    .catch(err => console.log(err));
  }
};

//  ACTION
export const getActionMovies = payload => ({ type: GET_ACTION, payload });
export const fetchActionMovies = (page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=vote_count.desc&with_genres=28`, options)
    .then(res => res.json())
    .then(action => { dispatch(getActionMovies(action)) })
    .catch(err => console.log(err));
  }
};

//  COMEDY
export const getComedyMovies = payload => ({ type: GET_COMEDY, payload });
export const fetchComedyMovies = (page) => {
  return(dispatch) => {
  fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=vote_count.desc&with_genres=35&without_genres=16%2C%2012%2C%2018%2C%2053`, options)
  .then(res => res.json())
  .then(comedy => { dispatch(getComedyMovies(comedy)) })
  .catch(err => console.log(err));
  }
};

//  SCIFI
export const getScifiMovies = payload => ({ type: GET_SCIFI, payload });
export const fetchScifiMovies = (page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=vote_count.desc&with_genres=878&without_genres=16%2C%2028`, options)
    .then(res => res.json())
    .then(scifi => { dispatch(getScifiMovies(scifi)) })
    .catch(err => console.log(err));
  }
};
//  DRAMA
export const getDramaMovies = payload => ({ type: GET_DRAMA, payload });
export const fetchDramaMovies = (page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=vote_count.desc&with_genres=18&without_genres=878%2C%2037%2C%2035%2C%2080%2C%2053%2C%2036`, options)
    .then(res => res.json())
    .then(drama => { dispatch(getDramaMovies(drama)) })
    .catch(err => console.log(err));
  }
};

//  THRILLER
export const getThrillerMovies = payload => ({ type: GET_THRILLER, payload });
export const fetchThrillerMovies = (page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=vote_count.desc&with_genres=53&without_genres=14%2C%2010752%2C%2018%2C%2027%2C%2028`, options)
    .then(res => res.json())
    .then(thriller => { dispatch(getThrillerMovies(thriller)) })
    .catch(err => console.log(err));
  }
};

//  HORROR
export const getHorrorMovies = payload => ({ type: GET_HORROR, payload });
export const fetchHorrorMovies = (page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=vote_count.desc&with_genres=27&without_genres=80%2C%2035`, options)
    .then(res => res.json())
    .then(horror => { dispatch(getHorrorMovies(horror)) })
    .catch(err => console.log(err));
  }
};

// WAR
export const getWarMovies = payload => ({ type: GET_WAR, payload });
export const fetchWarMovies = (page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=vote_count.desc&with_genres=10752&without_genres=14`, options).then(res => res.json()).then(war => { dispatch(getWarMovies(war)) }).catch(err => console.log(err));
  }
};

const moviesReducer = ( state = {}, action ) => {
  switch(action.type) {
    case GET_ALL:
      return {...state, all: { ...action.payload }}
    case GET_NOW_PLAYING:
      return {...state, nowPlaying: { ...action.payload }}
    case GET_POPULAR:
      return {...state, popular: { ...action.payload }}
    case GET_TOP_RATED:
      return {...state, topRated: { ...action.payload }}
    case GET_UPCOMING:
      return {...state, upcoming: { ...action.payload }}
    case GET_ACTION:
      return {...state, action: { ...action.payload }}
    case GET_COMEDY:
      return {...state, comedy: { ...action.payload }}
    case GET_SCIFI:
      return {...state, scifi: { ...action.payload }}
    case GET_DRAMA:
      return {...state, drama: { ...action.payload }}
    case GET_THRILLER:
      return {...state, thriller: { ...action.payload }}
    case GET_HORROR:
      return {...state, horror: { ...action.payload }}
    case GET_WAR:
      return {...state, war: { ...action.payload }}
    default:
      return state
  }
};

export default moviesReducer;
