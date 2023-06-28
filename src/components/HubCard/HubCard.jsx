import { useNavigate, useParams } from 'react-router';
import './HubCard.scss';
import { useSelector } from 'react-redux';
import { getFetchedA24, getFetchedDisney, getFetchedMarvel, getFetchedNational, getFetchedPixar, getFetchedStarWars } from '../../redux/hubsRedux';
import { mediumImagePath } from '../../utils/tmdbConfig';

const HubCard = () => {
  const navigate = useNavigate();
  const params = useParams();
  const hub = params.hub;
  console.log(hub);

  const marvel = useSelector(getFetchedMarvel);
  const starwars = useSelector(getFetchedStarWars);
  const pixar = useSelector(getFetchedPixar);
  const national = useSelector(getFetchedNational);
  const a24 = useSelector(getFetchedA24);
  const disney = useSelector(getFetchedDisney);

  let movies;
  if(hub === 'marvel') {movies = marvel}
  if(hub === 'starwars') {movies = starwars}
  if(hub === 'pixar') {movies = pixar}
  if(hub === 'national') {movies = national}
  if(hub === 'a24') {movies = a24}
  if(hub === 'disney') {movies = disney}

  return(
    <div className='hub__card__wrapper'>
      <div className='hub__card__container'>
        {movies.results?.map(movie => (
          <div className='hub__card__item__container' key={movie.id}>
            <div className='hub__card__item'>
              <img src={mediumImagePath + movie.poster_path} onClick={() => navigate(`/movie/${movie.id}`)} alt='movie poster'/>
            </div>
          </div>
        ))}
        {movies.parts?.map(movie => (
          <div className='hub__card__item__container' key={movie.id}>
            <div className='hub__card__item'>
              <img src={mediumImagePath + movie.poster_path} onClick={() => navigate(`/movie/${movie.id}`)} alt='movie poster'/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default HubCard;
