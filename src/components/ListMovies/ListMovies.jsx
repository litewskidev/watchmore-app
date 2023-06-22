import { useNavigate } from 'react-router-dom';
import { mediumImagePath } from '../../utils/tmdbConfig';
import './ListMovies.scss';

const ListMovies = ({ list }) => {
  const navigate = useNavigate();
  
  return (
    <div className='movie__box'>
      {list.results?.map(movie => (
        <div className='movie__item' key={movie.id}>
          <img src={mediumImagePath+movie.poster_path} alt='poster' onClick={() => navigate(`/movie/${movie.id}`)} />
        </div>
      ))}
    </div>
  )
};

export default ListMovies;
