import { useSelector } from 'react-redux';
import './Movies.scss';
import { getFetchedNowPlayingMovies, getFetchedPopularMovies, getFetchedTopRatedMovies, getFetchedUpcomingMovies } from '../../redux/moviesRedux';
import ListMovies from '../ListMovies/ListMovies';

const Movies = () => {
  const nowPlaying = useSelector(getFetchedNowPlayingMovies);
  const popular = useSelector(getFetchedPopularMovies);
  const topRated = useSelector(getFetchedTopRatedMovies);
  const upcoming = useSelector(getFetchedUpcomingMovies);

  const settings3 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 3500,
    arrows: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false
  };

  return(
    <div className='movies__container'>
      <h2>POPULAR</h2>
      <ListMovies list={popular} settings={settings3}/>
      <h2>NOW PLAYING</h2>
      <ListMovies list={nowPlaying} settings={settings3} />
      <h2>TOP RATED</h2>
      <ListMovies list={topRated} settings={settings3} />
      <h2>UPCOMING</h2>
      <ListMovies list={upcoming} settings={settings3} />
    </div>
  )
};

export default Movies;
