import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { fetchA24, fetchA24Two, fetchDisney, fetchDisneyTwo, fetchMarvel, fetchMarvelTwo, fetchNational, fetchPixar, fetchPixarTwo, fetchStarWars } from "./redux/hubsRedux.js";
import { fetchCollection } from "./redux/collectionsRedux.js";
import { fetchActionMovies, fetchAnimeMovies, fetchComedyMovies, fetchDramaMovies, fetchHorrorMovies, fetchNowPlayingMovies, fetchPopularMovies, fetchScifiMovies, fetchThrillerMovies, fetchTopRatedMovies, fetchUpcomingMovies, fetchWarMovies } from "./redux/moviesRedux.js";
import { fetchActionTv, fetchAiringTodayTv, fetchAnimeTv, fetchComedyTv, fetchCrimeTv, fetchDramaTv, fetchMysteryTv, fetchOnTheAirTv, fetchPopularTv, fetchScifiTv, fetchTopRatedTv, fetchWesternTv } from "./redux/tvSeriesRedux.js";
import { fetchAllTrending, fetchMoviesTrending, fetchPeopleTrending, fetchTvTrending } from "./redux/trendingRedux.js";
import { AuthContext } from "./context/AuthContext.js";
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
import HubCard from "./components/HubCard/HubCard.jsx";
import Login from "./components/Login/Login.jsx";
import Signup from "./components/Signup/Signup.jsx";
import WatchList from "./components/WatchList/WatchList.jsx";

function App() {
  const dispatch = useDispatch();

  //  MOVIES
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
  useEffect(() => dispatch(fetchCollection(230)), [dispatch]);  //  GODFATHER
  useEffect(() => dispatch(fetchCollection(8091)), [dispatch]);  //  ALIEN
  useEffect(() => dispatch(fetchCollection(528)), [dispatch]);  //  TERMINATOR
  useEffect(() => dispatch(fetchCollection(119)), [dispatch]);  //  LORD OF THE RINGS
  useEffect(() => dispatch(fetchCollection(121938)), [dispatch]);  //  HOBBIT
  useEffect(() => dispatch(fetchCollection(2344)), [dispatch]);  //  MATRIX
  useEffect(() => dispatch(fetchCollection(1241)), [dispatch]);  //  HARRY POTTER
  useEffect(() => dispatch(fetchCollection(263)), [dispatch]);  //  DARK KNIGHT
  useEffect(() => dispatch(fetchCollection(173710)), [dispatch]);  //  PLANET OF THE APES
  useEffect(() => dispatch(fetchCollection(328)), [dispatch]);  //  JURRASIC PARK
  useEffect(() => dispatch(fetchCollection(404609)), [dispatch]);  //  JOHN WICK
  useEffect(() => dispatch(fetchCollection(645)), [dispatch]);  //  JAMES BOND
  useEffect(() => dispatch(fetchCollection(87359)), [dispatch]);  //  MISSION IMPOSSIBLE
  useEffect(() => dispatch(fetchCollection(31562)), [dispatch]);  //  JASON BOURNE
  useEffect(() => dispatch(fetchCollection(5039)), [dispatch]);  //  RAMBO
  useEffect(() => dispatch(fetchCollection(1575)), [dispatch]);  //  ROCKY
  useEffect(() => dispatch(fetchCollection(553717)), [dispatch]);  //  CREED
  useEffect(() => dispatch(fetchCollection(9485)), [dispatch]);  //  FAST & FURIOUS
  useEffect(() => dispatch(fetchCollection(2806)), [dispatch]);  //  AMERICAN PIE
  useEffect(() => dispatch(fetchCollection(86119)), [dispatch]);  //  HANGOVER
  useEffect(() => dispatch(fetchCollection(313086)), [dispatch]);  //  CONJURING
  useEffect(() => dispatch(fetchCollection(86055)), [dispatch]);  //  MEN IN BLACK
  useEffect(() => dispatch(fetchCollection(91361)), [dispatch]);  //  HALLOWEEN
  useEffect(() => dispatch(fetchCollection(1733)), [dispatch]);  //  MUMMY
  useEffect(() => dispatch(fetchCollection(420)), [dispatch]);  //  CHRONICLES OF NARNIA
  useEffect(() => dispatch(fetchCollection(90863)), [dispatch]);  //  RUSH HOUR
  useEffect(() => dispatch(fetchCollection(1570)), [dispatch]);  // DIE HARD
  useEffect(() => dispatch(fetchCollection(9888)), [dispatch]);  //  HOME ALONE
  useEffect(() => dispatch(fetchCollection(945)), [dispatch]);  //  LETHAL WEAPON
  useEffect(() => dispatch(fetchCollection(2980)), [dispatch]);  //  GHOSTBUSTERS

  //  LOGGED USER
  const { currentUser } = useContext(AuthContext);
  const RequrieAuth = ({children}) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  console.log(currentUser);

  return(
    <main className="main__container">
      <Navbar user={currentUser} />
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/movies" element={ <Movies /> } />
        <Route path="/tvseries" element={ <TVSeries /> } />
        <Route path="/collections" element={ <Collections /> } />
        <Route path="/search" element={ <Search /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route exact path="/movie/:id" element={ <MovieCard user={currentUser} /> } />
        <Route exact path="/tv/:id" element={ <TvShowCard /> } />
        <Route exact path="/hubs/:hub" element={ <HubCard /> } />
        <Route exact path="/collection/:id" element={ <CollectionCard /> } />
        <Route path="/watchlist" element={ <RequrieAuth><WatchList user={currentUser} /></RequrieAuth> } />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
