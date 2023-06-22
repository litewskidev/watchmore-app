import { useSelector } from 'react-redux';
import './Movies.scss';
import { getFetchedNowPlayingMovies, getFetchedPopularMovies, getFetchedTopRatedMovies, getFetchedUpcomingMovies } from '../../redux/moviesRedux';
import ListMovies from '../ListMovies/ListMovies';

const Movies = () => {
  const nowPlaying = useSelector(getFetchedNowPlayingMovies);
  const popular = useSelector(getFetchedPopularMovies);
  const topRated = useSelector(getFetchedTopRatedMovies);
  const upcoming = useSelector(getFetchedUpcomingMovies);

  return(
    <div className='movies__container'>
      <h2>POPULAR</h2>
      <ListMovies list={popular}/>
      <h2>NOW PLAYING</h2>
      <ListMovies list={nowPlaying} />
      <h2>TOP RATED</h2>
      <ListMovies list={topRated} />
      <h2>UPCOMING</h2>
      <ListMovies list={upcoming} />
    </div>
  )
};

export default Movies;
