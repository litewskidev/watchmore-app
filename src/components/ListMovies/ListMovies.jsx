import { useNavigate } from 'react-router-dom';
import { mediumImagePath } from '../../utils/tmdbConfig';
import './ListMovies.scss';
import Slider from 'react-slick';

const ListMovies = ({ list, settings }) => {
  const navigate = useNavigate();

  return (
    <div className='movie__box'>
      <Slider {...settings}>
        {list.results?.map(movie => (
          <div className='movie__item__wrapper'>
            <div className='movie__item__box' key={movie.id}>
              <img src={mediumImagePath+movie.poster_path} alt='poster' onClick={() => navigate(`/movie/${movie.id}`)} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
};

export default ListMovies;
