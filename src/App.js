import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
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
import { fetchA24, fetchA24Two, fetchDisney, fetchDisneyTwo, fetchMarvel, fetchMarvelTwo, fetchNational, fetchPixar, fetchPixarTwo, fetchStarWars } from "./redux/hubsRedux.js";
import { fetchCollection } from "./redux/collectionsRedux.js";
import { fetchActionMovies, fetchAllMovies, fetchAnimeMovies, fetchComedyMovies, fetchDramaMovies, fetchHorrorMovies, fetchNowPlayingMovies, fetchPopularMovies, fetchScifiMovies, fetchThrillerMovies, fetchTopRatedMovies, fetchUpcomingMovies, fetchWarMovies } from "./redux/moviesRedux.js";
import { fetchActionTv, fetchAiringTodayTv, fetchAnimeTv, fetchComedyTv, fetchCrimeTv, fetchDramaTv, fetchMysteryTv, fetchOnTheAirTv, fetchPopularTv, fetchScifiTv, fetchTopRatedTv, fetchWesternTv } from "./redux/tvSeriesRedux.js";
import { fetchAllTrending, fetchMoviesTrending, fetchPeopleTrending, fetchTvTrending } from "./redux/trendingRedux.js";
import { fetchPopularPeople } from "./redux/peopleRedux.js";
import { fetchMovieGenres, fetchTvGenres } from "./redux/genresRedux.js";
import { getSearch } from "./redux/searchStringRedux.js";
import { fetchSearchMovie, fetchSearchMulti, fetchSearchPerson, fetchSearchTv } from "./redux/searchRedux.js";

function App() {
  const dispatch = useDispatch();

  //  MOVIES
  //useEffect(() => dispatch(fetchAllMovie)), [dispatch]);
  useEffect(() => dispatch(fetchNowPlayingMovies(1)), [dispatch]);
  useEffect(() => dispatch(fetchPopularMovies(1)), [dispatch]);
  useEffect(() => dispatch(fetchTopRatedMovies(1)), [dispatch]);
  useEffect(() => dispatch(fetchUpcomingMovies(1)), [dispatch]);
  useEffect(() => dispatch(fetchActionMovies(1)), [dispatch]);
  useEffect(() => dispatch(fetchComedyMovies(1)), [dispatch]);
  useEffect(() => dispatch(fetchScifiMovies(1)), [dispatch]);
  useEffect(() => dispatch(fetchThrillerMovies(1)), [dispatch]);
  useEffect(() => dispatch(fetchDramaMovies(1)), [dispatch]);
  useEffect(() => dispatch(fetchHorrorMovies(1)), [dispatch]);
  useEffect(() => dispatch(fetchWarMovies(1)), [dispatch]);
  useEffect(() => dispatch(fetchAnimeMovies(1)), [dispatch]);

  //  TV SERIES
  useEffect(() => dispatch(fetchAiringTodayTv(1)), [dispatch]);
  useEffect(() => dispatch(fetchOnTheAirTv(2)), [dispatch]);
  useEffect(() => dispatch(fetchPopularTv(3)), [dispatch]);
  useEffect(() => dispatch(fetchTopRatedTv(1)), [dispatch]);
  useEffect(() => dispatch(fetchActionTv(1)), [dispatch]);
  useEffect(() => dispatch(fetchComedyTv(1)), [dispatch]);
  useEffect(() => dispatch(fetchMysteryTv(1)), [dispatch]);
  useEffect(() => dispatch(fetchScifiTv(1)), [dispatch]);
  useEffect(() => dispatch(fetchWesternTv(1)), [dispatch]);
  useEffect(() => dispatch(fetchCrimeTv(1)), [dispatch]);
  useEffect(() => dispatch(fetchDramaTv(1)), [dispatch]);
  useEffect(() => dispatch(fetchAnimeTv(1)), [dispatch]);

  //  TRENDING
  useEffect(() => dispatch(fetchAllTrending(1)), [dispatch]);
  useEffect(() => dispatch(fetchMoviesTrending(1)), [dispatch]);
  useEffect(() => dispatch(fetchTvTrending(1)), [dispatch]);
  useEffect(() => dispatch(fetchPeopleTrending(1)), [dispatch]);

  // PEOPLE
  //useEffect(() => dispatch(fetchPopularPeopl)), [dispatch]);

  //  GENRES
  //useEffect(() => dispatch(fetchMovieGenres()), [dispatch]);
  //useEffect(() => dispatch(fetchTvGenres()), [dispatch]);

  //  SEARCH
  //useEffect(() => dispatch(fetchSearchMulti(searchString)), [dispatch, searchString]);
  //useEffect(() => dispatch(fetchSearchMovie(searchString)), [dispatch, searchString]);
  //useEffect(() => dispatch(fetchSearchTv(searchString)), [dispatch, searchString]);
  //useEffect(() => dispatch(fetchSearchPerson(searchString)), [dispatch, searchString]);

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
  //  CONJURING
  useEffect(() => dispatch(fetchCollection(313086)), [dispatch]);
  //  MEN IN BLACK
  useEffect(() => dispatch(fetchCollection(86055)), [dispatch]);
  //  HALLOWEEN
  useEffect(() => dispatch(fetchCollection(91361)), [dispatch]);
  //  MUMMY
  useEffect(() => dispatch(fetchCollection(1733)), [dispatch]);
  //  CHRONICLES OF NARNIA
  useEffect(() => dispatch(fetchCollection(420)), [dispatch]);
  //  RUSH HOUR
  useEffect(() => dispatch(fetchCollection(90863)), [dispatch]);
  // DIE HARD
  useEffect(() => dispatch(fetchCollection(1570)), [dispatch]);
  //  HOME ALONE
  useEffect(() => dispatch(fetchCollection(9888)), [dispatch]);
  //  LETHAL WEAPON
  useEffect(() => dispatch(fetchCollection(945)), [dispatch]);
  //  GHOSTBUSTERS
  useEffect(() => dispatch(fetchCollection(2980)), [dispatch]);

  return(
    <main className="main__container">
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
