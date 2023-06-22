import { useNavigate } from 'react-router-dom';
import { miniImagePath } from '../../utils/tmdbConfig';
import './HomeTrending.scss';

const HomeTrending = ({ trendingMovies, trendingTv }) => {
  const navigate = useNavigate();

  return(
    <div  className='home__trending__wrapper'>
      <div>
        <p>TRENDING MOVIES</p>
        <div className='trending__movies__container'>
          {trendingMovies.results?.map(movie => (
            <div className='trending__movies__box' key={movie.id}>
              <img src={miniImagePath + movie.poster_path} onClick={() => navigate(`/movie/${movie.id}`)} alt='movie poster'/>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p>TRENDING TV SERIES</p>
        <div className='trending__movies__container'>
          {trendingTv.results?.map(tv => (
            <div className='trending__movies__box' key={tv.id}>
              <img src={miniImagePath + tv.poster_path} alt='tv series poster' onClick={() => navigate(`/tv/${tv.id}`)}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default HomeTrending;
