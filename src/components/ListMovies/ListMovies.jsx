import { imagePath } from '../../utils/tmdbConfig';
import './ListMovies.scss';

const ListMovies = ({ list }) => {
  return (
    <div className='movie__box'>
      {list.results?.map(movie => (
        <div className='movie__item' key={movie.id}>
          <img src={imagePath+movie.poster_path} alt='poster' />
        </div>
      ))}
    </div>
  )
}

export default ListMovies;
