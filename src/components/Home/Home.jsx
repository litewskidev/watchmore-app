import { useDispatch, useSelector } from 'react-redux';
import './Home.scss';
import { getFetchedPopularMovies } from '../../redux/moviesRedux';
import ListMovies from '../ListMovies/ListMovies';
import { updatePage } from '../../redux/pageRedux.js';
import { goToTop } from '../../utils/goToTop.js'
import { getFetchedPopularTv } from '../../redux/tvSeriesRedux';
import { getFetchedAllTrending } from '../../redux/trendingRedux';

const Home = ({ page }) => {
  const dispatch = useDispatch();

  const moviesPopularList = useSelector(getFetchedPopularMovies);
  const tvSeriesPopularList = useSelector(getFetchedPopularTv);
  const allTrendingList = useSelector(getFetchedAllTrending);

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
      <ListMovies list={moviesPopularList} />
      <h2>POPULAR TV SERIES</h2>
      <ListMovies list={tvSeriesPopularList}/>
      <h2>TRENDING</h2>
      <ListMovies list={allTrendingList}/>
      <div className='page__input'>
        <div onClick={decrementPage}>-</div>
        <div>{page}</div>
        <div onClick={incrementPage}>+</div>
      </div>
    </div>
  )
};

export default Home;
