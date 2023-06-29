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
import Collections from "./components/Collections/Collections.jsx";
import MovieCard from "./components/MovieCard/MovieCard.jsx";
import TvShowCard from "./components/TvShowCard/TvShowCard.jsx";
import CollectionCard from "./components/CollectionCard/CollectionCard.jsx";
import WatchMovie from "./components/WatchMovie/WatchMovie.jsx";
import WatchSeries from "./components/WatchSeries/WatchSeries.jsx";
import HubCard from "./components/HubCard/HubCard.jsx";
import { fetchA24, fetchA24Two, fetchDisney, fetchDisneyTwo, fetchMarvel, fetchMarvelTwo, fetchNational, fetchNationalTwo, fetchPixar, fetchPixarTwo, fetchStarWars, getPixarTwo } from "./redux/hubsRedux.js";
import { fetchAlien, fetchAmericanpie, fetchApes, fetchBatman, fetchBourne, fetchCollection, fetchCreed, fetchFf, fetchGodfather, fetchHangover, fetchHobbit, fetchHp, fetchJamesbond, fetchJohnwick, fetchJurrasic, fetchLotr, fetchMatrix, fetchMi, fetchRambo, fetchRocky, fetchTerminator } from "./redux/collectionsRedux.js";

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
  useEffect(() => dispatch(fetchMarvelTwo()), [dispatch]);
  useEffect(() => dispatch(fetchPixar()), [dispatch]);
  useEffect(() => dispatch(fetchPixarTwo()), [dispatch]);
  useEffect(() => dispatch(fetchA24()), [dispatch]);
  useEffect(() => dispatch(fetchA24Two()), [dispatch]);
  useEffect(() => dispatch(fetchDisney()), [dispatch]);
  useEffect(() => dispatch(fetchDisneyTwo()), [dispatch]);
  useEffect(() => dispatch(fetchNational()), [dispatch]);
  useEffect(() => dispatch(fetchStarWars()), [dispatch]);

  //  COLLECTIONS
  //  GODFATHER
  useEffect(() => dispatch(fetchCollection(230)), [dispatch]);
  //  ALIEN
  useEffect(() => dispatch(fetchCollection(8091)), [dispatch]);
  //  TERMINATOR
  useEffect(() => dispatch(fetchCollection(528)), [dispatch]);
  //  LORD OF THE RINGS
  useEffect(() => dispatch(fetchCollection(119)), [dispatch]);
  //  HOBBIT
  useEffect(() => dispatch(fetchCollection(121938)), [dispatch]);
  //  MATRIX
  useEffect(() => dispatch(fetchCollection(2344)), [dispatch]);
  //  HARRY POTTER
  useEffect(() => dispatch(fetchCollection(1241)), [dispatch]);
  //  DARK KNIGHT
  useEffect(() => dispatch(fetchCollection(263)), [dispatch]);
  //  PLANET OF THE APES
  useEffect(() => dispatch(fetchCollection(173710)), [dispatch]);
  //  JURRASIC PARK
  useEffect(() => dispatch(fetchCollection(328)), [dispatch]);
  //  JOHN WICK
  useEffect(() => dispatch(fetchCollection(404609)), [dispatch]);
  //  JAMES BOND
  useEffect(() => dispatch(fetchCollection(645)), [dispatch]);
  //  MISSION IMPOSSIBLE
  useEffect(() => dispatch(fetchCollection(87359)), [dispatch]);
  //  JASON BOURNE
  useEffect(() => dispatch(fetchCollection(31562)), [dispatch]);
  //  RAMBO
  useEffect(() => dispatch(fetchCollection(5039)), [dispatch]);
  //  ROCKY
  useEffect(() => dispatch(fetchCollection(1575)), [dispatch]);
  //  CREED
  useEffect(() => dispatch(fetchCollection(553717)), [dispatch]);
  //  FAST & FURIOUS
  useEffect(() => dispatch(fetchCollection(9485)), [dispatch]);
  //  AMERICAN PIE
  useEffect(() => dispatch(fetchCollection(2806)), [dispatch]);
  //  HANGOVER
  useEffect(() => dispatch(fetchCollection(86119)), [dispatch]);

  return(
    <main>
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/movies" element={ <Movies /> } />
        <Route path="/tvseries" element={ <TVSeries /> } />
        <Route path="/collections" element={ <Collections /> } />
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
