import { useNavigate } from 'react-router-dom';
import { image342Path, mediumImagePath } from '../../utils/tmdbConfig.js';
import { LazyLoadImage } from "react-lazy-load-image-component";
import Slider from 'react-slick';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './ListMovies.scss';

const ListMovies = ({ list, settings }) => {
  const navigate = useNavigate();

  return(
    <div className='movie__box'>
      <Slider {...settings}>
        {list.results?.map(movie => (
          <div className='movie__item__wrapper' key={movie.id}>
            <div className='movie__item__box'>
              {(window.matchMedia('(max-width: 540px)').matches) ? (
                <LazyLoadImage src={mediumImagePath+movie.poster_path} effect='blur' alt='poster' onClick={() => navigate(`/movie/${movie.id}`)} />
              ) : (
                <LazyLoadImage src={image342Path + movie.poster_path} effect='blur' alt='poster' onClick={() => navigate(`/movie/${movie.id}`)} />
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
};

export default ListMovies;
