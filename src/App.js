import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMovies, fetchNowPlayingMovies, fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies } from "./redux/moviesRedux.js";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { fetchAiringTodayTv, fetchOnTheAirTv, fetchPopularTv, fetchTopRatedTv } from "./redux/tvSeriesRedux.js";
import { fetchAllTrending, fetchMoviesTrending, fetchPeopleTrending, fetchTvTrending } from "./redux/trendingRedux.js";
import { fetchPopularPeople } from "./redux/peopleRedux.js";
import { fetchMovieGenres, fetchTvGenres } from "./redux/genresRedux.js";
import { getSearch } from "./redux/searchStringRedux.js";
import { fetchSearchMovie, fetchSearchMulti, fetchSearchPerson, fetchSearchTv } from "./redux/searchRedux.js";
import { getPage } from "./redux/pageRedux.js";
import { fetchCreditsMovie, fetchDetailsMovie, fetchImagesMovie, fetchReleaseMovie, fetchReviewsMovie, fetchSimilarMovie, fetchVideosMovie } from "./redux/movieRedux.js";
import { fetchCreditsTvShow, fetchDetailsTvShow, fetchImagesTvShow, fetchReviewsTvShow, fetchSimilarTvShow, fetchVideosTvShow } from "./redux/tvShowRedux.js";

function App() {
  const dispatch = useDispatch();

  const searchString = useSelector(getSearch);
  const page = useSelector(getPage);
  const movieId = '603692';  //  JOHN WICK 4
  const tvShowId = '1399';  //  GAME OF THRONES

  //  MOVIES
  useEffect(() => dispatch(fetchAllMovies(page)), [dispatch, page]);
  useEffect(() => dispatch(fetchNowPlayingMovies(page)), [dispatch, page]);
  useEffect(() => dispatch(fetchPopularMovies(page)), [dispatch, page]);
  useEffect(() => dispatch(fetchTopRatedMovies(page)), [dispatch, page]);
  useEffect(() => dispatch(fetchUpcomingMovies(page)), [dispatch, page]);

  // MOVIE
  useEffect(() => dispatch(fetchDetailsMovie(movieId)), [dispatch, movieId]);
  useEffect(() => dispatch(fetchCreditsMovie(movieId)), [dispatch, movieId]);
  useEffect(() => dispatch(fetchReleaseMovie(movieId)), [dispatch, movieId]);
  useEffect(() => dispatch(fetchReviewsMovie(movieId, page)), [dispatch, movieId, page]);
  useEffect(() => dispatch(fetchImagesMovie(movieId)), [dispatch, movieId]);
  useEffect(() => dispatch(fetchVideosMovie(movieId)), [dispatch, movieId]);
  useEffect(() => dispatch(fetchSimilarMovie(movieId, page)), [dispatch, movieId, page]);

  //  TV SERIES
  useEffect(() => dispatch(fetchAiringTodayTv(page)), [dispatch, page]);
  useEffect(() => dispatch(fetchOnTheAirTv(page)), [dispatch, page]);
  useEffect(() => dispatch(fetchPopularTv(page)), [dispatch, page]);
  useEffect(() => dispatch(fetchTopRatedTv(page)), [dispatch, page]);

  //  TV SHOW
  useEffect(() => dispatch(fetchDetailsTvShow(tvShowId)), [dispatch, tvShowId]);
  useEffect(() => dispatch(fetchCreditsTvShow(tvShowId)), [dispatch, tvShowId]);
  useEffect(() => dispatch(fetchReviewsTvShow(tvShowId, page)), [dispatch, tvShowId, page]);
  useEffect(() => dispatch(fetchImagesTvShow(tvShowId)), [dispatch, tvShowId]);
  useEffect(() => dispatch(fetchVideosTvShow(tvShowId)), [dispatch, tvShowId]);
  useEffect(() => dispatch(fetchSimilarTvShow(tvShowId, page)), [dispatch, tvShowId, page]);

  //  TRENDING
  useEffect(() => dispatch(fetchAllTrending(page)), [dispatch, page]);
  useEffect(() => dispatch(fetchMoviesTrending(page)), [dispatch, page]);
  useEffect(() => dispatch(fetchTvTrending(page)), [dispatch, page]);
  useEffect(() => dispatch(fetchPeopleTrending(page)), [dispatch, page]);

  // PEOPLE
  useEffect(() => dispatch(fetchPopularPeople(page)), [dispatch, page]);

  //  GENRES
  useEffect(() => dispatch(fetchMovieGenres()), [dispatch]);
  useEffect(() => dispatch(fetchTvGenres()), [dispatch]);

  //  SEARCH
  useEffect(() => dispatch(fetchSearchMulti(searchString, page)), [dispatch, searchString, page]);
  useEffect(() => dispatch(fetchSearchMovie(searchString, page)), [dispatch, searchString, page]);
  useEffect(() => dispatch(fetchSearchTv(searchString, page)), [dispatch, searchString, page]);
  useEffect(() => dispatch(fetchSearchPerson(searchString, page)), [dispatch, searchString, page]);

  return(
    <main>
      <Routes>
        <Route exact path="/" element={<Home page={page} />} />
      </Routes>
    </main>
  );
}

export default App;
