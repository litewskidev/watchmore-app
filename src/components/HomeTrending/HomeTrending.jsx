import { useNavigate } from 'react-router-dom';
import { mediumImagePath, miniImagePath } from '../../utils/tmdbConfig';
import './HomeTrending.scss';
import Slider from 'react-slick';

const HomeTrending = ({ trendingMovies, trendingTv, settings }) => {
  const navigate = useNavigate();

  return(
    <div  className='home__trending__wrapper'>
      <div>
        <p>TRENDING MOVIES</p>
        <div className='trending__movies__container'>
          <Slider {...settings}>
            {trendingMovies.results?.map(movie => (
              <div className='trending__movies__box' key={movie.id}>
                <img src={mediumImagePath + movie.poster_path} onClick={() => navigate(`/movie/${movie.id}`)} alt='movie poster'/>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div>
        <p>TRENDING TV SERIES</p>
        <div className='trending__movies__container'>
          <Slider {...settings}>
            {trendingTv.results?.map(tv => (
              <div className='trending__movies__box' key={tv.id}>
                <img src={mediumImagePath + tv.poster_path} alt='tv series poster' onClick={() => navigate(`/tv/${tv.id}`)}/>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
};

export default HomeTrending;
