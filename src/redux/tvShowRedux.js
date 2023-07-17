import { options } from "../utils/tmdb.js";

//  SELECTORS
export const getFetchedDetailsTvShow = ({ tvShow }) => tvShow.details;
export const getFetchedCreditsTvShow = ({ tvShow }) => tvShow.credits;
export const getFetchedReviewsTvShow = ({ tvShow }) => tvShow.reviews;
export const getFetchedImagesTvShow = ({ tvShow }) => tvShow.images;
export const getFetchedVideosTvShow = ({ tvShow }) => tvShow.videos;
export const getFetchedSimilarTvShow = ({ tvShow }) => tvShow.similar;
export const getFetchedTvShowSeason = ({ tvShow }) => tvShow.season;
export const getFetchedTvShowEpisode = ({ tvShow }) => tvShow.episode;

export const getFetchedTrailerTvShow = ({ tvShow }) => tvShow.videos.results?.filter(video => video.type === 'Trailer');
export const getFetchedSimilarWithPosterTvShow = ({ tvShow }) => tvShow.similar.results?.filter(similar => similar.poster_path !== null && similar.backdrop_path !== null && similar.vote_average > 6);

//  ACTIONS
const createActionName = actionName => `app/tvShow/${actionName}`;
const GET_DETAILS = createActionName('GET_DETAILS');
const GET_CREDITS = createActionName('GET_CREDITS');
const GET_REVIEWS = createActionName('GET_REVIEWS');
const GET_IMAGES = createActionName('GET_IMAGES');
const GET_VIDEOS = createActionName('GET_VIDEOS');
const GET_SIMILAR = createActionName('GET_SIMILAR');
const GET_SEASON = createActionName('GET_SEASON');
const GET_EPISODE = createActionName('GET_EPISODE');

//  ACTION CREATORS
//  DETAILS
export const getDetailsTvShow = payload => ({ type: GET_DETAILS, payload });
export const fetchDetailsTvShow = (tvShowId) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/tv/${tvShowId}?language=en-US`, options)
    .then(res => res.json())
    .then(details => { dispatch(getDetailsTvShow(details)) })
    .catch(err => console.log(err));
  }
};

//  CREDITS
export const getCreditsTvShow = payload => ({ type: GET_CREDITS, payload });
export const fetchCreditsTvShow = (tvShowId) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/tv/${tvShowId}/credits?language=en-US`, options)
    .then(res => res.json())
    .then(credits => { dispatch(getCreditsTvShow(credits)) })
    .catch(err => console.log(err));
  }
};

//  REVIEWS
export const getReviewsTvShow = payload => ({ type: GET_REVIEWS, payload });
export const fetchReviewsTvShow = (tvShowId, page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/tv/${tvShowId}/reviews?language=en-US&page=${page}`, options)
    .then(res => res.json())
    .then(reviews => { dispatch(getReviewsTvShow(reviews)) })
    .catch(err => console.log(err));
  }
};

//  IMAGES
export const getImagesTvShow = payload => ({ type: GET_IMAGES, payload });
export const fetchImagesTvShow = (tvShowId) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/tv/${tvShowId}/images`, options)
    .then(res => res.json())
    .then(images => { dispatch(getImagesTvShow(images)) })
    .catch(err => console.log(err));
  }
};

//  VIDEOS
export const getVideosTvShow = payload => ({ type: GET_VIDEOS, payload });
export const fetchVideosTvShow = (tvShowId) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/tv/${tvShowId}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(videos => { dispatch(getVideosTvShow(videos)) })
    .catch(err => console.log(err));
  }
};

//  SIMILAR
export const getSimilarTvShow = payload => ({ type: GET_SIMILAR, payload });
export const fetchSimilarTvShow = (tvShowId, page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/tv/${tvShowId}/similar?language=en-US&page=${page}`, options)
    .then(res => res.json())
    .then(similar => { dispatch(getSimilarTvShow(similar)) })
    .catch(err => console.log(err));
  }
};

//  SEASON
export const getSeason = payload => ({ type: GET_SEASON, payload });
export const fetchSeason = (tvShowId, season) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/tv/${tvShowId}/season/${season}?language=en-US`, options)
    .then(res => res.json())
    .then(season => { dispatch(getSeason(season)) })
    .catch(err => console.log(err));
  }
};

//  EPISODE
export const getEpisode = payload => ({ type: GET_EPISODE, payload });
export const fetchEpisode = (tvShowId, season, episode) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/tv/${tvShowId}/season/${season}/episode/${episode}?language=en-US`, options)
    .then(res => res.json())
    .then(episode => { dispatch(getEpisode(episode)) })
    .catch(err => console.log(err));
  }
};

const tvShowReducer = ( state = {}, action ) => {
  switch(action.type) {
    case GET_DETAILS:
      return {...state, details: { ...action.payload }}
    case GET_CREDITS:
      return {...state, credits: { ...action.payload }}
    case GET_REVIEWS:
      return {...state, reviews: { ...action.payload }}
    case GET_IMAGES:
      return {...state, images: { ...action.payload }}
    case GET_VIDEOS:
      return {...state, videos: { ...action.payload }}
    case GET_SIMILAR:
      return {...state, similar: { ...action.payload }}
    case GET_SEASON:
      return {...state, season: { ...action.payload }}
    case GET_EPISODE:
      return {...state, episode: { ...action.payload }}
    default:
      return state
  }
};

export default tvShowReducer;
