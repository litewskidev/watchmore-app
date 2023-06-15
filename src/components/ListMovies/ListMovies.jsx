import { imagePath } from '../../utils/tmdbConfig';
import './ListMovies.scss';

const ListMovies = ({ list }) => {
  return (
    <div className='movie__box'>
      {list.results?.map(movie => (
        <div className='movie__item' key={movie.id}>
          <img src={imagePath+movie.poster_path} alt='poster' />
          <p className='movie__title'>{movie.original_title}</p>
          <div className='movie__info'>
            <div className='movie__date'>
              <p>{movie.release_date}</p>
            </div>
            <div className='movie__votes'>
              <div className='movie__votes__score'>
                <img src={process.env.PUBLIC_URL + '/assets/icons/star-solid.svg'} alt='star icon'/>
                <p>{movie.vote_average}</p>
              </div>
              <div className='movie__votes__count'>
                <img src={process.env.PUBLIC_URL + '/assets/icons/thumbs-up-regular.svg'} alt='thumbs up icon'/>
                <p>{movie.vote_count}</p>
              </div>
            </div>
          </div>
          <p className='movie__overview'>{movie.overview}</p>
        </div>
      ))}
    </div>
  )
}

export default ListMovies;
