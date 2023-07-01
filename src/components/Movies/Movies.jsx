import { useSelector } from 'react-redux';
import './Movies.scss';
import { getFetchedActionMovies, getFetchedAnimeMovies, getFetchedComedyMovies, getFetchedDramaMovies, getFetchedHorrorMovies, getFetchedNowPlayingMovies, getFetchedPopularMovies, getFetchedScifiMovies, getFetchedThrillerMovies, getFetchedTopRatedMovies, getFetchedUpcomingMovies, getFetchedWarMovies } from '../../redux/moviesRedux';
import ListMovies from '../ListMovies/ListMovies';

const Movies = () => {
  const nowPlaying = useSelector(getFetchedNowPlayingMovies);
  const popular = useSelector(getFetchedPopularMovies);
  const topRated = useSelector(getFetchedTopRatedMovies);
  const upcoming = useSelector(getFetchedUpcomingMovies);
  const action = useSelector(getFetchedActionMovies);
  const comedy = useSelector(getFetchedComedyMovies);
  const animation = useSelector(getFetchedAnimeMovies);
  const scifi = useSelector(getFetchedScifiMovies);
  const drama = useSelector(getFetchedDramaMovies);
  const thriller = useSelector(getFetchedThrillerMovies);
  const horror = useSelector(getFetchedHorrorMovies);
  const war = useSelector(getFetchedWarMovies);

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
        <h2>TOP RATED</h2>
      </div>
      <ListMovies list={topRated} settings={settings3} />
      <div className='movies__section__title'>
        <h2>POPULAR</h2>
      </div>
      <ListMovies list={popular} settings={settings3}/>
      <div className='movies__section__title'>
        <h2>NOW PLAYING</h2>
      </div>
      <ListMovies list={nowPlaying} settings={settings3} />
      <div className='movies__section__title'>
        <h2>UPCOMING</h2>
      </div>
      <ListMovies list={upcoming} settings={settings3} />
      <div className='movies__section__title'>
        <h2>ACTION</h2>
      </div>
      <ListMovies list={action} settings={settings3} />
      <div className='movies__section__title'>
        <h2>COMEDY</h2>
      </div>
      <ListMovies list={comedy} settings={settings3} />
      <div className='movies__section__title'>
        <h2>ANIMATION</h2>
      </div>
      <ListMovies list={animation} settings={settings3} />
      <div className='movies__section__title'>
        <h2>SCIENCE FICTION</h2>
      </div>
      <ListMovies list={scifi} settings={settings3} />
      <div className='movies__section__title'>
        <h2>DRAMA</h2>
      </div>
      <ListMovies list={drama} settings={settings3} />
      <div className='movies__section__title'>
        <h2>THRILLER</h2>
      </div>
      <ListMovies list={thriller} settings={settings3} />
      <div className='movies__section__title'>
        <h2>HORROR</h2>
      </div>
      <ListMovies list={horror} settings={settings3} />
      <div className='movies__section__title'>
        <h2>WAR</h2>
      </div>
      <ListMovies list={war} settings={settings3} />
    </div>
  )
};

export default Movies;
