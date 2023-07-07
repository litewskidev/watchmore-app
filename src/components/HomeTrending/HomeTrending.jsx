import { useNavigate } from 'react-router-dom';
import { imagePath, mediumImagePath } from '../../utils/tmdbConfig.js';
import { LazyLoadImage } from "react-lazy-load-image-component";
import Slider from 'react-slick';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './HomeTrending.scss';

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
                  {(window.matchMedia('(max-width: 540px)').matches) ? (
                    <LazyLoadImage src={mediumImagePath + movie.poster_path} effect='blur' visibleByDefault onClick={() => navigate(`/movie/${movie.id}`)} alt='movie poster'/>
                  ) : (
                    <LazyLoadImage src={imagePath + movie.poster_path} effect='blur' onClick={() => navigate(`/movie/${movie.id}`)} alt='movie poster'/>
                  )}
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
                {(window.matchMedia('(max-width: 540px)').matches) ? (
                  <LazyLoadImage src={mediumImagePath + tv.poster_path} effect='blur' visibleByDefault alt='tv series poster' onClick={() => navigate(`/tv/${tv.id}`)}/>
                ) : (
                  <LazyLoadImage src={imagePath + tv.poster_path} effect='blur' alt='tv series poster' onClick={() => navigate(`/tv/${tv.id}`)}/>
                )
                }
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
