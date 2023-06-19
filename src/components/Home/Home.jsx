import { useDispatch, useSelector } from 'react-redux';
import './Home.scss';
import { getFetchedNowPlayingMovies } from '../../redux/moviesRedux';
import ListMovies from '../ListMovies/ListMovies';
import Footer from '../Footer/Footer';
import { updatePage } from '../../redux/pageRedux';

const Home = ({ page }) => {
  const dispatch = useDispatch();

  const moviesList = useSelector(getFetchedNowPlayingMovies);
  console.log(moviesList);

  const decrementPage = () => {
    if(page > 1) {
    dispatch(updatePage(page - 1));
    }
  };

  const incrementPage = () => {
    dispatch(updatePage(page + 1));
  };

  return(
    <div className='home__container'>
      <h1>watchm<span><img src={process.env.PUBLIC_URL + '/assets/logo/4.png'} alt='film reel'/></span>re</h1>
      <ListMovies list={moviesList} />
      <div className='page__input'>
        <div onClick={decrementPage}>-</div>
        <div>{page}</div>
        <div onClick={incrementPage}>+</div>
      </div>
      <Footer />
    </div>
  )
};

export default Home;
