import { options } from "../utils/tmdb.js";

//  SELECTORS
export const getAllCollections = state => state.collections;
export const getFetchedGodfather = ({ collections }) => collections.godfather;
export const getFetchedAlien = ({ collections }) => collections.alien;
export const getFetchedTerminator = ({ collections }) => collections.terminator;
export const getFetchedLotr = ({ collections }) => collections.lotr;
export const getFetchedHobbit = ({ collections }) => collections.hobbit;
export const getFetchedMatrix = ({ collections }) => collections.matrix
export const getfetchedHp = ({ collections }) => collections.hp;
export const getFetchedBatman = ({ collections }) => collections.batman;
export const getFetchedApes = ({ collections }) => collections.apes;
export const getFetchedJurrasic = ({ collections }) => collections.jurrasic;
export const getFetchedJohnwick = ({ collections }) => collections.johnwick;
export const getFetchedJamesbond = ({ collections }) => collections.jamesbond;
export const getfetchedMi = ({ collections }) => collections.mi;
export const getfetchedBourne = ({ collections }) => collections.bourne;
export const getFetchedRambo = ({ collections }) => collections.rambo;
export const getFetchedRocky = ({ collections }) => collections.rocky;
export const getFetchedCreed = ({ collections }) => collections.creed;
export const getFetchedFf = ({ collections }) => collections.ff;
export const getFetchedAmericanpie = ({ collections }) => collections.americanpie;
export const getFetchedHangover = ({ collections }) => collections.hangover;

//  ACTIONS
const createActionName = actionName => `app/collections/${actionName}`;
const GET_GODFATHER = createActionName('GET_GODFATHER');
const GET_ALIEN = createActionName('GET_ALIEN');
const GET_TERMINATOR = createActionName('GET_TERMINATOR');
const GET_LOTR = createActionName('GET_LOTR');
const GET_HOBBIT = createActionName('GET_HOBBIT');
const GET_MATRIX = createActionName('GET_MATRIX');
const GET_HP = createActionName('GET_HP');
const GET_BATMAN = createActionName('GET_BATMAN');
const GET_APES = createActionName('GET_APES');
const GET_JURRASIC = createActionName('GET_JURRASIC');
const GET_JOHNWICK = createActionName('GET_JOHNWICK');
const GET_JAMESBOND = createActionName('GET_JAMESBOND');
const GET_MI = createActionName('GET_MI');
const GET_BOURNE = createActionName('GET_BOURNE');
const GET_RAMBO = createActionName('GET_RAMBO');
const GET_ROCKY = createActionName('GET_ROCKY');
const GET_CREED = createActionName('GET_CREED');
const GET_FF = createActionName('GET_FF');
const GET_AMERICANPIE = createActionName('GET_AMERICANPIE');
const GET_HANGOVER = createActionName('GET_HANGOVER');

//  ACTION CREATORS
//  GODFATHER
export const getGodfather = payload => ({ type: GET_GODFATHER, payload });
export const fetchGodfather = () => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/collection/230?language=en-US`, options)
    .then(res => res.json())
    .then(godfather => { dispatch(getGodfather(godfather)) })
    .catch(err => console.log(err))
  }
};

//  ALIEN
export const getAlien = payload => ({ type: GET_ALIEN, payload });
export const fetchAlien = () => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/collection/8091?language=en-US`, options)
    .then(res => res.json())
    .then(alien => { dispatch(getAlien(alien)) })
    .catch(err => console.log(err))
  }
};

//  TERMINATOR
export const getTerminator = payload => ({ type: GET_TERMINATOR, payload });
export const fetchTerminator = () => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/collection/528?language=en-US`, options)
    .then(res => res.json())
    .then(terminator => { dispatch(getTerminator(terminator)) })
    .catch(err => console.log(err))
  }
};

//  LORD OF THE RINGS
export const getLotr = payload => ({ type: GET_LOTR, payload });
export const fetchLotr= () => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/collection/119?language=en-US`, options)
    .then(res => res.json())
    .then(lotr => { dispatch(getLotr(lotr)) })
    .catch(err => console.log(err))
  }
};

//  HOBBIT
export const getHobbit = payload => ({ type: GET_HOBBIT, payload });
export const fetchHobbit = () => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/collection/121938?language=en-US`, options)
    .then(res => res.json())
    .then(hobbit => { dispatch(getHobbit(hobbit)) })
    .catch(err => console.log(err))
  }
};

//  MATRIX
export const getMatrix= payload => ({ type: GET_MATRIX, payload });
export const fetchMatrix = () => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/collection/2344?language=en-US`, options)
    .then(res => res.json())
    .then(matrix => { dispatch(getMatrix(matrix)) })
    .catch(err => console.log(err))
  }
};

//  HARRY POTTER
export const getHp = payload => ({ type: GET_HP, payload });
export const fetchHp = () => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/collection/1241?language=en-US`, options)
    .then(res => res.json())
    .then(hp => { dispatch(getHp(hp)) })
    .catch(err => console.log(err))
  }
};

//  DARK KNIGHT
export const getBatman = payload => ({ type: GET_BATMAN, payload });
export const fetchBatman = () => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/collection/263?language=en-US`, options)
    .then(res => res.json())
    .then(batman => { dispatch(getBatman(batman)) })
    .catch(err => console.log(err))
  }
};

//  PLANET OF THE APES
export const getApes = payload => ({ type: GET_APES, payload });
export const fetchApes = () => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/collection/173710?language=en-US`, options)
    .then(res => res.json())
    .then(apes => { dispatch(getApes(apes)) })
    .catch(err => console.log(err))
  }
};

//  JURRASIC PARK
export const getJurrasic = payload => ({ type: GET_JURRASIC, payload });
export const fetchJurrasic = () => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/collection/328?language=en-US`, options)
    .then(res => res.json())
    .then(jurrasic => { dispatch(getJurrasic(jurrasic)) })
    .catch(err => console.log(err))
  }
};

//  JOHN WICK
export const getJohnwick = payload => ({ type: GET_JOHNWICK, payload });
export const fetchJohnwick = () => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/collection/404609?language=en-US`, options)
    .then(res => res.json())
    .then(johnwick => { dispatch(getJohnwick(johnwick)) })
    .catch(err => console.log(err))
  }
};

//  JAMES BOND
export const getJamesbond = payload => ({ type: GET_JAMESBOND, payload });
export const fetchJamesbond = () => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/collection/645?language=en-US`, options)
    .then(res => res.json())
    .then(jamesbond => { dispatch(getJamesbond(jamesbond)) })
    .catch(err => console.log(err))
  }
};

//  MISSION IMPOSSIBLE
export const getMi = payload => ({ type: GET_MI, payload });
export const fetchMi = () => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/collection/87359?language=en-US`, options)
    .then(res => res.json())
    .then(mi => { dispatch(getMi(mi)) })
    .catch(err => console.log(err))
  }
};

//  JASON BOURNE
export const getBourne = payload => ({ type: GET_BOURNE, payload });
export const fetchBourne = () => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/collection/31562?language=en-US`, options)
    .then(res => res.json())
    .then(bourne => { dispatch(getBourne(bourne)) })
    .catch(err => console.log(err))
  }
};

//  RAMBO
export const getRambo = payload => ({ type: GET_RAMBO, payload });
export const fetchRambo = () => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/collection/5039?language=en-US`, options)
    .then(res => res.json())
    .then(rambo=> { dispatch(getRambo(rambo)) })
    .catch(err => console.log(err))
  }
};

//  ROCKY
export const getRocky = payload => ({ type: GET_ROCKY, payload });
export const fetchRocky = () => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/collection/1575?language=en-US`, options)
    .then(res => res.json())
    .then(rocky => { dispatch(getRocky(rocky)) })
    .catch(err => console.log(err))
  }
};

//  CREED
export const getCreed = payload => ({ type: GET_CREED, payload });
export const fetchCreed = () => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/collection/553717?language=en-US`, options)
    .then(res => res.json())
    .then(creed => { dispatch(getCreed(creed)) })
    .catch(err => console.log(err))
  }
};

//  FAST & FURIOUS
export const getFf = payload => ({ type: GET_FF, payload });
export const fetchFf = () => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/collection/9485?language=en-US`, options)
    .then(res => res.json())
    .then(ff => { dispatch(getFf(ff)) })
    .catch(err => console.log(err))
  }
};

//  AMERICAN PIE
export const getAmericanpie = payload => ({ type: GET_AMERICANPIE, payload });
export const fetchAmericanpie = () => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/collection/2806?language=en-US`, options)
    .then(res => res.json())
    .then(americanpie => { dispatch(getAmericanpie(americanpie)) })
    .catch(err => console.log(err))
  }
};

//  HANGOVER
export const getHangover = payload => ({ type: GET_HANGOVER, payload });
export const fetchHangover = () => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/collection/86119?language=en-US`, options)
    .then(res => res.json())
    .then(hangover => { dispatch(getHangover(hangover)) })
    .catch(err => console.log(err))
  }
};

const collectionsReducer = ( state = [], action ) => {
  switch(action.type) {
    case GET_GODFATHER:
      return [...state, { ...action.payload }]
    case GET_ALIEN:
      return [...state, { ...action.payload }]
    case GET_TERMINATOR:
      return [...state, { ...action.payload }]
    case GET_LOTR:
      return [...state, { ...action.payload }]
    case GET_HOBBIT:
      return [...state, { ...action.payload }]
    case GET_MATRIX:
      return [...state, { ...action.payload }]
    case GET_HP:
      return [...state, { ...action.payload }]
    case GET_BATMAN:
      return [...state, { ...action.payload }]
    case GET_APES:
      return [...state, { ...action.payload }]
    case GET_JURRASIC:
      return [...state, { ...action.payload }]
    case GET_JOHNWICK:
      return [...state, { ...action.payload }]
    case GET_JAMESBOND:
      return [...state, { ...action.payload }]
    case GET_MI:
      return [...state, { ...action.payload }]
    case GET_BOURNE:
      return [...state, { ...action.payload }]
    case GET_RAMBO:
      return [...state, { ...action.payload }]
    case GET_ROCKY:
      return [...state, { ...action.payload }]
    case GET_CREED:
      return [...state, { ...action.payload }]
    case GET_FF:
      return [...state, { ...action.payload }]
    case GET_AMERICANPIE:
      return [...state, { ...action.payload }]
    case GET_HANGOVER:
      return [...state, { ...action.payload }]
    default:
      return state
  }
};

export default collectionsReducer;
