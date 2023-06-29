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
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Movies from "./components/Movies/Movies.jsx";
import TVSeries from "./components/TVSeries/TVSeries.jsx";
import Search from "./components/Search/Search.jsx";
import Categories from "./components/Categories/Categories.jsx";
import MovieCard from "./components/MovieCard/MovieCard.jsx";
import TvShowCard from "./components/TvShowCard/TvShowCard.jsx";
import CollectionCard from "./components/CollectionCard/CollectionCard.jsx";
import WatchMovie from "./components/WatchMovie/WatchMovie.jsx";
import WatchSeries from "./components/WatchSeries/WatchSeries.jsx";
import HubCard from "./components/HubCard/HubCard.jsx";
import { fetchA24, fetchDisney, fetchMarvel, fetchNational, fetchPixar, fetchStarWars } from "./redux/hubsRedux.js";
import { fetchAlien, fetchAmericanpie, fetchApes, fetchBatman, fetchBourne, fetchCreed, fetchFf, fetchGodfather, fetchHangover, fetchHobbit, fetchHp, fetchJamesbond, fetchJohnwick, fetchJurrasic, fetchLotr, fetchMatrix, fetchMi, fetchRambo, fetchRocky, fetchTerminator } from "./redux/collectionsRedux.js";

function App() {
  const dispatch = useDispatch();
  const page = 1;

  //  MOVIES
  //useEffect(() => dispatch(fetchAllMovies(page)), [dispatch, page]);
  useEffect(() => dispatch(fetchNowPlayingMovies(page)), [dispatch, page]);
  useEffect(() => dispatch(fetchPopularMovies(page)), [dispatch, page]);
  useEffect(() => dispatch(fetchTopRatedMovies(page)), [dispatch, page]);
  useEffect(() => dispatch(fetchUpcomingMovies(page)), [dispatch, page]);

  // MOVIE
  //useEffect(() => dispatch(fetchDetailsMovie(movieId)), [dispatch, movieId]);
  //useEffect(() => dispatch(fetchCreditsMovie(movieId)), [dispatch, movieId]);
  //useEffect(() => dispatch(fetchReleaseMovie(movieId)), [dispatch, movieId]);
  //useEffect(() => dispatch(fetchReviewsMovie(movieId, page)), [dispatch, movieId, page]);
  //useEffect(() => dispatch(fetchImagesMovie(movieId)), [dispatch, movieId]);
  //useEffect(() => dispatch(fetchVideosMovie(movieId)), [dispatch, movieId]);
  //useEffect(() => dispatch(fetchSimilarMovie(movieId, page)), [dispatch, movieId, page]);

  //  TV SERIES
  useEffect(() => dispatch(fetchAiringTodayTv(3)), [dispatch, page]);
  useEffect(() => dispatch(fetchOnTheAirTv(2)), [dispatch, page]);
  useEffect(() => dispatch(fetchPopularTv(1)), [dispatch, page]);
  useEffect(() => dispatch(fetchTopRatedTv(page)), [dispatch, page]);

  //  TV SHOW
  //useEffect(() => dispatch(fetchDetailsTvShow(tvShowId)), [dispatch, tvShowId]);
  //useEffect(() => dispatch(fetchCreditsTvShow(tvShowId)), [dispatch, tvShowId]);
  //useEffect(() => dispatch(fetchReviewsTvShow(tvShowId, page)), [dispatch, tvShowId, page]);
  //useEffect(() => dispatch(fetchImagesTvShow(tvShowId)), [dispatch, tvShowId]);
  //useEffect(() => dispatch(fetchVideosTvShow(tvShowId)), [dispatch, tvShowId]);
  //useEffect(() => dispatch(fetchSimilarTvShow(tvShowId, page)), [dispatch, tvShowId, page]);

  //  TRENDING
  useEffect(() => dispatch(fetchAllTrending(page)), [dispatch, page]);
  useEffect(() => dispatch(fetchMoviesTrending(page)), [dispatch, page]);
  useEffect(() => dispatch(fetchTvTrending(page)), [dispatch, page]);
  //useEffect(() => dispatch(fetchPeopleTrending(page)), [dispatch, page]);

  // PEOPLE
  //useEffect(() => dispatch(fetchPopularPeople(page)), [dispatch, page]);

  //  GENRES
  //useEffect(() => dispatch(fetchMovieGenres()), [dispatch]);
  //useEffect(() => dispatch(fetchTvGenres()), [dispatch]);

  //  SEARCH
  //useEffect(() => dispatch(fetchSearchMulti(searchString, page)), [dispatch, searchString, page]);
  //useEffect(() => dispatch(fetchSearchMovie(searchString, page)), [dispatch, searchString, page]);
  //useEffect(() => dispatch(fetchSearchTv(searchString, page)), [dispatch, searchString, page]);
  //useEffect(() => dispatch(fetchSearchPerson(searchString, page)), [dispatch, searchString, page]);

  //  HUBS
  useEffect(() => dispatch(fetchMarvel()), [dispatch]);
  useEffect(() => dispatch(fetchStarWars()), [dispatch]);
  useEffect(() => dispatch(fetchPixar()), [dispatch]);
  useEffect(() => dispatch(fetchNational()), [dispatch]);
  useEffect(() => dispatch(fetchA24()), [dispatch]);
  useEffect(() => dispatch(fetchDisney()), [dispatch]);

  //  COLLECTIONS
  useEffect(() => dispatch(fetchGodfather()), [dispatch]);
  useEffect(() => dispatch(fetchAlien()), [dispatch]);
  useEffect(() => dispatch(fetchTerminator()), [dispatch]);
  useEffect(() => dispatch(fetchLotr()), [dispatch]);
  useEffect(() => dispatch(fetchHobbit()), [dispatch]);
  useEffect(() => dispatch(fetchMatrix()), [dispatch]);
  useEffect(() => dispatch(fetchHp()), [dispatch]);
  useEffect(() => dispatch(fetchBatman()), [dispatch]);
  useEffect(() => dispatch(fetchApes()), [dispatch]);
  useEffect(() => dispatch(fetchJurrasic()), [dispatch]);
  useEffect(() => dispatch(fetchJohnwick()), [dispatch]);
  useEffect(() => dispatch(fetchJamesbond()), [dispatch]);
  useEffect(() => dispatch(fetchMi()), [dispatch]);
  useEffect(() => dispatch(fetchBourne()), [dispatch]);
  useEffect(() => dispatch(fetchRambo()), [dispatch]);
  useEffect(() => dispatch(fetchRocky()), [dispatch]);
  useEffect(() => dispatch(fetchCreed()), [dispatch]);
  useEffect(() => dispatch(fetchFf()), [dispatch]);
  useEffect(() => dispatch(fetchAmericanpie()), [dispatch]);
  useEffect(() => dispatch(fetchHangover()), [dispatch]);

  return(
    <main>
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/movies" element={ <Movies /> } />
        <Route path="/tvseries" element={ <TVSeries /> } />
        <Route path="/collections" element={ <Categories /> } />
        <Route path="/search" element={ <Search /> } />
        <Route exact path="/movie/:id" element={ <MovieCard /> } />
        <Route exact path="/tv/:id" element={ <TvShowCard /> } />
        <Route exact path="/hubs/:hub" element={ <HubCard /> } />
        <Route exact path="/collection/:id" element={ <CollectionCard /> } />
        <Route exact path="/watch/:title" element={ <WatchMovie /> } />
        <Route exact path="/watch/:name" element={ <WatchSeries /> } />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
