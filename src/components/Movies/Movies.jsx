import { useDispatch, useSelector } from 'react-redux';
import './Movies.scss';
import { getFetchedNowPlayingMovies, getFetchedTopRatedMovies, getFetchedUpcomingMovies } from '../../redux/moviesRedux';
import ListMovies from '../ListMovies/ListMovies';
import { updatePage } from '../../redux/pageRedux';
import { goToTop } from '../../utils/goToTop';

const Movies = ({ page }) => {
  const dispatch = useDispatch();

  const nowPlayingList = useSelector(getFetchedNowPlayingMovies);
  const topRated = useSelector(getFetchedTopRatedMovies);
  const upcoming = useSelector(getFetchedUpcomingMovies);

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
    <div className='movies__container'>
      <h2>NOW PLAYING</h2>
      <ListMovies list={nowPlayingList} />
      <h2>TOP RATED</h2>
      <ListMovies list={topRated} />
      <h2>UPCOMING</h2>
      <ListMovies list={upcoming} />
      <div className='page__input'>
        <div onClick={decrementPage}>-</div>
        <div>{page}</div>
        <div onClick={incrementPage}>+</div>
      </div>
    </div>
  )
};

export default Movies;
