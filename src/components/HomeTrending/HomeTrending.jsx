import { useNavigate } from 'react-router-dom';
import { imagePath } from '../../utils/tmdbConfig';
import './HomeTrending.scss';

const HomeTrending = ({ trendingMovies, trendingTv }) => {
  console.log(trendingMovies);
  console.log(trendingTv);
  const navigate = useNavigate();
  return(
    <div  className='home__trending__wrapper'>
      <div>
        <p>TRENDING MOVIES</p>
        <div className='trending__movies__container'>
          {trendingMovies.results?.map(movie => (
            <div className='trending__movies__box' key={movie.id}>
              <img src={imagePath + movie.poster_path} onClick={() => navigate(`/movie/${movie.id}`)}/>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p>TRENDING TV SERIES</p>
        <div className='trending__movies__container'>
          {trendingTv.results?.map(tv => (
            <div className='trending__movies__box' key={tv.id}>
              <img src={imagePath + tv.poster_path} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default HomeTrending;
