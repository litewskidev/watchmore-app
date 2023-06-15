import { useSelector } from 'react-redux';
import './Home.scss';
import { getFetchedMovies } from '../../redux/moviesRedux';
import ListMovies from '../ListMovies/ListMovies';
import Footer from '../Footer/Footer';

const Home = () => {

  const moviesList = useSelector(getFetchedMovies);
  console.log(moviesList);

  return(
    <div className='home__container'>
      <h1>watchm<span><img src={process.env.PUBLIC_URL + '/assets/logo/4.png'} alt='film reel'/></span>re</h1>
      <ListMovies list={moviesList} />
      <Footer />
    </div>
  )
};

export default Home;
