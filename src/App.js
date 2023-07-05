import React, { Suspense, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { fetchCollection } from "./redux/collectionsRedux.js";
import { AuthContext } from "./context/AuthContext.js";
import Navbar from "./components/Navbar/Navbar.jsx";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner.jsx";
const Home = React.lazy(() => import("./components/Home/Home.jsx"));
const Movies = React.lazy(() => import("./components/Movies/Movies.jsx"));
const TVSeries = React.lazy(() => import("./components/TVSeries/TVSeries.jsx"));
const MovieCard = React.lazy(() => import("./components/MovieCard/MovieCard.jsx"));
const TvShowCard = React.lazy(() => import("./components/TvShowCard/TvShowCard.jsx"));
const HubCard = React.lazy(() => import("./components/HubCard/HubCard.jsx"));
const Collections = React.lazy(() => import("./components/Collections/Collections.jsx"));
const CollectionCard = React.lazy(() => import("./components/CollectionCard/CollectionCard.jsx"));
const WatchList = React.lazy(() => import("./components/WatchList/WatchList.jsx"));
const Search = React.lazy(() => import("./components/Search/Search.jsx"));
const Login = React.lazy(() => import("./components/Login/Login.jsx"));
const Signup = React.lazy(() => import("./components/Signup/Signup.jsx"));
const Footer = React.lazy(() => import("./components/Footer/Footer.jsx"));

function App() {
  const dispatch = useDispatch();

  //  FETCH COLLECTIONS
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

  //  GET LOGGED USER
  const { currentUser } = useContext(AuthContext);
  const RequrieAuth = ({children}) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return(
    <main className="main__container">
      <Navbar user={currentUser} />
      <Suspense fallback={ <div><LoadingSpinner /></div> }>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route path="/movies" element={ <Movies /> } />
          <Route path="/tvseries" element={ <TVSeries /> } />
          <Route path="/collections" element={ <Collections /> } />
          <Route path="/search" element={ <Search /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/signup" element={ <Signup /> } />
          <Route exact path="/movie/:id" element={ <MovieCard user={currentUser} /> } />
          <Route exact path="/tv/:id" element={ <TvShowCard user={currentUser} /> } />
          <Route exact path="/hubs/:hub" element={ <HubCard /> } />
          <Route exact path="/collection/:id" element={ <CollectionCard /> } />
          <Route path="/watchlist" element={ <RequrieAuth><WatchList user={currentUser} /></RequrieAuth> } />
        </Routes>
      </Suspense>
      <Footer />
    </main>
  );
}

export default App;
