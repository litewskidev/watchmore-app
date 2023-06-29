import { useNavigate } from 'react-router-dom';
import { mediumImagePath } from '../../utils/tmdbConfig';
import './HomeTrending.scss';
import Slider from 'react-slick';

const HomeTrending = ({ trendingMovies, trendingTv, settings }) => {
  const navigate = useNavigate();

  return(
    <div  className='home__trending__wrapper'>
      <div className='home__trending__box'>
        <div className='home__section__title'>
          <p>TRENDING MOVIES</p>
        </div>
        <div className='trending__movies__container'>
          <Slider {...settings}>
            {trendingMovies.results?.map(movie => (
              <div className='trending__movies__wrapper' key={movie.id}>
                <div className='trending__movies__box'>
                  <img src={mediumImagePath + movie.poster_path} onClick={() => navigate(`/movie/${movie.id}`)} alt='movie poster'/>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className='home__trending__box'>
        <div className='home__section__title'>
          <p>TRENDING TV SERIES</p>
        </div>
        <div className='trending__movies__container'>
          <Slider {...settings}>
            {trendingTv.results?.map(tv => (
              <div className='trending__movies__wrapper' key={tv.id}>
                <div className='trending__movies__box'>
                  <img src={mediumImagePath + tv.poster_path} alt='tv series poster' onClick={() => navigate(`/tv/${tv.id}`)}/>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
};

export default HomeTrending;
