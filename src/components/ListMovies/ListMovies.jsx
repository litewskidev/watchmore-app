import { imagePath } from '../../utils/tmdbConfig';
import './ListMovies.scss';

const ListMovies = ({ list }) => {
  return (
    <div className='movie__box'>
      {list.results?.map(movie => (
        <div className='movie__item' key={movie.id}>
          <img src={imagePath+movie.backdrop_path
} alt='poster' />
          <p className='movie__title'>{movie.title}</p>
          <p className='movie__title'>{movie.original_name}</p>
        </div>
      ))}
    </div>
  )
}

export default ListMovies;
