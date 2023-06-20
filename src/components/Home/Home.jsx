import { useDispatch, useSelector } from 'react-redux';
import './Home.scss';
import { getFetchedNowPlayingMovies } from '../../redux/moviesRedux';
import ListMovies from '../ListMovies/ListMovies';
import { updatePage } from '../../redux/pageRedux.js';
import { goToTop } from '../../utils/goToTop.js'

const Home = ({ page }) => {
  const dispatch = useDispatch();

  const moviesList = useSelector(getFetchedNowPlayingMovies);
  const tvSeriesList

  const decrementPage = () => {
    if(page > 1) {
    dispatch(updatePage(page - 1));
    goToTop();
    }
  };

  const incrementPage = () => {
    dispatch(updatePage(page + 1));
    goToTop();
  };

  return(
    <div className='home__container'>
      <h2>POPULAR MOVIES</h2>
      <ListMovies list={moviesList} />
      <h2>POPULAR TV SERIES</h2>
      <ListMovies />
      <h2>TRENDING</h2>
      <ListMovies />
      <div className='page__input'>
        <div onClick={decrementPage}>-</div>
        <div>{page}</div>
        <div onClick={incrementPage}>+</div>
      </div>
    </div>
  )
};

export default Home;
