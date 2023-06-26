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
      <div className='movies__main__title'>
        <h1>MOVIES</h1>
        <h1>MOVIES</h1>
      </div>
      <div className='movies__section__title'>
        <h2>POPULAR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
        <h2>POPULAR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
      </div>
      <ListMovies list={popular} settings={settings3}/>
      <div className='movies__section__title'>
        <h2>NOW PLAYING&nbsp;</h2>
        <h2>NOW PLAYING&nbsp;</h2>
      </div>
      <ListMovies list={nowPlaying} settings={settings3} />
      <div className='movies__section__title'>
        <h2>TOP RATED&nbsp;&nbsp;&nbsp;&nbsp;</h2>
        <h2>TOP RATED&nbsp;&nbsp;&nbsp;&nbsp;</h2>
      </div>
      <ListMovies list={topRated} settings={settings3} />
      <div className='movies__section__title'>
        <h2>UPCOMING&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
        <h2>UPCOMING&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
      </div>
      <ListMovies list={upcoming} settings={settings3} />
    </div>
  )
};

export default Movies;
