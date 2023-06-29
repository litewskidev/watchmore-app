import { useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getFetchedA24, getFetchedA24Two, getFetchedDisney, getFetchedDisneyTwo, getFetchedMarvel, getFetchedMarvelTwo, getFetchedNational, getFetchedPixar, getFetchedPixarTwo, getFetchedStarWars } from '../../redux/hubsRedux.js';
import { mediumImagePath } from '../../utils/tmdbConfig.js';
import './HubCard.scss';

const HubCard = () => {
  const navigate = useNavigate();
  const params = useParams();
  const hub = params.hub;

  const marvelPageOne = useSelector(getFetchedMarvel);
  const pixarPageOne = useSelector(getFetchedPixar);
  const a24PageOne = useSelector(getFetchedA24);
  const disneyPageOne = useSelector(getFetchedDisney);
  const marvelPageTwo = useSelector(getFetchedMarvelTwo);
  const pixarPageTwo = useSelector(getFetchedPixarTwo);
  const a24PageTwo = useSelector(getFetchedA24Two);
  const disneyPageTwo = useSelector(getFetchedDisneyTwo);
  const national = useSelector(getFetchedNational);
  const starwars = useSelector(getFetchedStarWars);

  let moviesPageOne;
  if(hub === 'marvel') {moviesPageOne = marvelPageOne}
  if(hub === 'pixar') {moviesPageOne = pixarPageOne}
  if(hub === 'a24') {moviesPageOne = a24PageOne}
  if(hub === 'disney') {moviesPageOne = disneyPageOne}
  if(hub === 'national') {moviesPageOne = national}
  if(hub === 'starwars') {moviesPageOne = starwars}

  let moviesPageTwo;
  if(hub === 'marvel') {moviesPageTwo = marvelPageTwo}
  if(hub === 'pixar') {moviesPageTwo = pixarPageTwo}
  if(hub === 'a24') {moviesPageTwo = a24PageTwo}
  if(hub === 'disney') {moviesPageTwo = disneyPageTwo}
  if(hub === 'national') {moviesPageTwo = national}
  if(hub === 'starwars') {moviesPageTwo= starwars}

  return(
    <div className='hub__card__wrapper'>
      <div className='hub__card__container'>
        {moviesPageOne.results?.map(movie => (
          <div className='hub__card__item__container' key={movie.id}>
            <div className='hub__card__item'>
              <img src={mediumImagePath + movie.poster_path} onClick={() => navigate(`/movie/${movie.id}`)} alt={movie.title}/>
            </div>
          </div>
        ))}
        {moviesPageTwo.results?.map(movie => (
          <div className='hub__card__item__container' key={movie.id}>
            <div className='hub__card__item'>
              <img src={mediumImagePath + movie.poster_path} onClick={() => navigate(`/movie/${movie.id}`)} alt={movie.title}/>
            </div>
          </div>
        ))}
        {moviesPageOne.parts?.map(movie => (
          <div className='hub__card__item__container' key={movie.id}>
            <div className='hub__card__item'>
              <img src={mediumImagePath + movie.poster_path} onClick={() => navigate(`/movie/${movie.id}`)} alt={movie.title}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default HubCard;
