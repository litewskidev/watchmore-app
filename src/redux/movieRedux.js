import { options } from "../utils/tmdb.js";

//  SELECTORS
export const getFetchedDetailsMovie = ({ movie }) => movie.details;
export const getFetchedCreditsMovie = ({ movie }) => movie.credits;
export const getFetchedReleaseMovie = ({ movie }) => movie.release;
export const getFetchedReviewsMovie = ({ movie }) => movie.reviews;
export const getFetchedImagesMovie = ({ movie }) => movie.images;
export const getFetchedVideosMovie = ({ movie }) => movie.videos;
export const getFetchedSimilarMovie = ({ movie }) => movie.similar;

//  ACTIONS
const createActionName = actionName => `app/movie/${actionName}`;
const GET_DETAILS = createActionName('GET_DETAILS');
const GET_CREDITS = createActionName('GET_CREDITS');
const GET_RELEASE = createActionName('GET_RELEASE');
const GET_REVIEWS = createActionName('GET_REVIEWS');
const GET_IMAGES = createActionName('GET_IMAGES');
const GET_VIDEOS = createActionName('GET_VIDEOS');
const GET_SIMILAR = createActionName('GET_SIMILAR');

//  ACTION CREATORS
export const getDetailsMovie = payload => ({ type: GET_DETAILS, payload });
export const fetchDetailsMovie = (movieId) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
    .then(res => res.json())
    .then(details => { dispatch(getDetailsMovie(details)) })
    .catch(err => console.log(err));
  }
};

export const getCreditsMovie = payload => ({ type: GET_CREDITS, payload });
export const fetchCreditsMovie = (movieId) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, options)
    .then(res => res.json())
    .then(credits => { dispatch(getCreditsMovie(credits)) })
    .catch(err => console.log(err));
  }
};

export const getReleaseMovie = payload => ({ type: GET_RELEASE, payload });
export const fetchReleaseMovie = (movieId) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/release_dates`, options)
    .then(res => res.json())
    .then(release => { dispatch(getReleaseMovie(release)) })
    .catch(err => console.log(err));
  }
};

export const getReviewsMovie = payload => ({ type: GET_REVIEWS, payload });
export const fetchReviewsMovie = (movieId, page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=${page}`, options)
    .then(res => res.json())
    .then(reviews => { dispatch(getReviewsMovie(reviews)) })
    .catch(err => console.log(err));
  }
};

export const getImagesMovie = payload => ({ type: GET_IMAGES, payload });
export const fetchImagesMovie = (movieId) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/images`, options)
    .then(res => res.json())
    .then(images => { dispatch(getImagesMovie(images)) })
    .catch(err => console.log(err));
  }
};

export const getVideosMovie = payload => ({ type: GET_VIDEOS, payload });
export const fetchVideosMovie = (movieId) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(videos => { dispatch(getVideosMovie(videos)) })
    .catch(err => console.log(err));
  }
};

export const getSimilarMovie = payload => ({ type: GET_SIMILAR, payload });
export const fetchSimilarMovie = (movieId, page) => {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=${page}`, options)
    .then(res => res.json())
    .then(similar => { dispatch(getSimilarMovie(similar)) })
    .catch(err => console.log(err));
  }
};

const movieReducer = ( state = {}, action) => {
  switch(action.type) {
    case GET_DETAILS:
      return {...state, details: { ...action.payload }}
    case GET_CREDITS:
      return {...state, credits: { ...action.payload }}
    case GET_RELEASE:
      return {...state, release: { ...action.payload }}
    case GET_REVIEWS:
      return {...state, reviews: { ...action.payload }}
    case GET_IMAGES:
      return {...state, images: { ...action.payload }}
    case GET_VIDEOS:
      return {...state, videos: { ...action.payload }}
    case GET_SIMILAR:
      return {...state, similar: { ...action.payload }}
    default:
      return state
  }
};

export default movieReducer;
