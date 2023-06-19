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

function App() {
  const dispatch = useDispatch();

  const searchString = useSelector(getSearch);
  const page = useSelector(getPage);

  //  MOVIES
  useEffect(() => dispatch(fetchAllMovies(page)), [dispatch, page]);
  useEffect(() => dispatch(fetchNowPlayingMovies(page)), [dispatch, page]);
  useEffect(() => dispatch(fetchPopularMovies(page)), [dispatch, page]);
  useEffect(() => dispatch(fetchTopRatedMovies(page)), [dispatch, page]);
  useEffect(() => dispatch(fetchUpcomingMovies(page)), [dispatch, page]);

  //  TV
  useEffect(() => dispatch(fetchAiringTodayTv(page)), [dispatch, page]);
  useEffect(() => dispatch(fetchOnTheAirTv(page)), [dispatch, page]);
  useEffect(() => dispatch(fetchPopularTv(page)), [dispatch, page]);
  useEffect(() => dispatch(fetchTopRatedTv(page)), [dispatch, page]);

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
