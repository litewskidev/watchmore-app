import { options } from "../utils/tmdb.js";

//  SELECTORS
export const getFetchedMarvel = ({ hubs }) => hubs.marvel;
export const getFetchedMarvelTwo = ({ hubs }) => hubs.marvel_2;
export const getFetchedPixar = ({ hubs }) => hubs.pixar;
export const getFetchedPixarTwo = ({ hubs }) => hubs.pixar_2;
export const getFetchedA24 = ({ hubs }) => hubs.a24;
export const getFetchedA24Two = ({ hubs }) => hubs.a24_2;
export const getFetchedDisney = ({ hubs }) => hubs.disney;
export const getFetchedDisneyTwo = ({ hubs }) => hubs.disney_2;
export const getFetchedNational = ({ hubs }) => hubs.national;
export const getFetchedStarWars = ({ hubs }) => hubs.starwars;

//  ACTIONS
const createActionName = actionName => `app/hubs/${actionName}`;
const GET_MARVEL = createActionName('GET_MARVEL');
const GET_MARVEL_TWO = createActionName('GET_MARVEL_TWO');
const GET_PIXAR = createActionName('GET_PIXAR');
const GET_PIXAR_TWO = createActionName('GET_PIXAR_TWO');
const GET_A24 = createActionName('GET_A24');
const GET_A24_TWO = createActionName('GET_A24_TWO');
const GET_DISNEY = createActionName('GET_DISNEY');
const GET_DISNEY_TWO = createActionName('GET_DISNEY_TWO');
const GET_NATIONAL = createActionName('GET_NATIONAL');
const GET_STARWARS = createActionName('GET_STARWARS');

//  ACTION CREATORS
//  MARVEL
export const getMarvel = payload => ({ type: GET_MARVEL, payload });
export const fetchMarvel = () => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc&with_companies=420`, options)
    .then(res => res.json())
    .then(marvel => { dispatch(getMarvel(marvel)) })
    .catch(err => console.log(err))
  }
};

//  MARVEL PAGE TWO
export const getMarvelTwo = payload => ({ type: GET_MARVEL_TWO, payload });
export const fetchMarvelTwo = () => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=vote_count.desc&with_companies=420`, options)
    .then(res => res.json())
    .then(marvel => { dispatch(getMarvelTwo(marvel)) })
    .catch(err => console.log(err))
  }
};

//  PIXAR
export const getPixar = payload => ({ type: GET_PIXAR, payload });
export const fetchPixar = () => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc&with_companies=3`, options)
    .then(res => res.json())
    .then(pixar => { dispatch(getPixar(pixar)) })
    .catch(err => console.log(err));
  }
};

//  PIXAR PAGE TWO
export const getPixarTwo = payload => ({ type: GET_PIXAR_TWO, payload });
export const fetchPixarTwo = () => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=vote_count.desc&with_companies=3`, options)
    .then(res => res.json())
    .then(pixar => { dispatch(getPixarTwo(pixar)) })
    .catch(err => console.log(err));
  }
};

//  A24
export const getA24 = payload => ({ type: GET_A24, payload });
export const fetchA24 = () => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc&with_companies=41077`, options)
    .then(res => res.json())
    .then(a24 => { dispatch(getA24(a24)) })
    .catch(err => console.log(err));
  }
};

//  A24 PAGE TWO
export const getA24Two = payload => ({ type: GET_A24_TWO, payload });
export const fetchA24Two = () => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=vote_count.desc&with_companies=41077`, options)
    .then(res => res.json())
    .then(a24 => { dispatch(getA24Two(a24)) })
    .catch(err => console.log(err));
  }
};

//  DISNEY
export const getDisney = payload => ({ type: GET_DISNEY, payload });
export const fetchDisney = () => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc&with_companies=2`, options)
    .then(res => res.json())
    .then(disney => { dispatch(getDisney(disney)) })
    .catch(err => console.log(err));
  }
};

//  DISNEY PAGE TWO
export const getDisneyTwo = payload => ({ type: GET_DISNEY_TWO, payload });
export const fetchDisneyTwo = () => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=vote_count.desc&with_companies=2`, options)
    .then(res => res.json())
    .then(disney => { dispatch(getDisneyTwo(disney)) })
    .catch(err => console.log(err));
  }
};

//  NATIONAL GEOGRAPHIC
export const getNational = payload => ({ type: GET_NATIONAL, payload });
export const fetchNational = () => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc&with_companies=7521&with_genres=99`, options)
    .then(res => res.json())
    .then(national => { dispatch(getNational(national)) })
    .catch(err => console.log(err));
  }
};

//  STAR WARS
export const getStarWars = payload => ({ type: GET_STARWARS, payload });
export const fetchStarWars = () => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/collection/10?language=en-US`, options)
    .then(res => res.json())
    .then(starwars => { dispatch(getStarWars(starwars)) })
    .catch(err => console.log(err));
  }
};

const hubsReducer = ( state = {}, action ) => {
  switch(action.type) {
    case GET_MARVEL:
      return {...state, marvel: { ...action.payload }}
    case GET_MARVEL_TWO:
      return {...state, marvel_2: { ...action.payload }}
    case GET_PIXAR:
      return {...state, pixar: { ...action.payload }}
    case GET_PIXAR_TWO:
      return {...state, pixar_2: { ...action.payload }}
    case GET_A24:
      return {...state, a24: { ...action.payload }}
    case GET_A24_TWO:
      return {...state, a24_2: { ...action.payload }}
    case GET_DISNEY:
      return {...state, disney: { ...action.payload }}
    case GET_DISNEY_TWO:
      return {...state, disney_2: { ...action.payload }}
    case GET_NATIONAL:
      return {...state, national: { ...action.payload }}
    case GET_STARWARS:
      return {...state, starwars: { ...action.payload }}
    default:
      return state
  }
};

export default hubsReducer;
