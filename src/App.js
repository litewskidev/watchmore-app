import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "./redux/moviesRedux";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchMovies()), [dispatch]);

  return(
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
