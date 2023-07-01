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
  const marvelLogo = '/assets/hubs/marvel.png';
  const pixarLogo = '/assets/hubs/pixar.png'
  const a24Logo = '/assets/hubs/a24.png';
  const disneyLogo = '/assets/hubs/disney.png';
  const nationalLogo = '/assets/hubs/national.png';
  const starwarsLogo = '/assets/hubs/star-wars.png';


  let logoMain;
  if(hub === 'marvel') {logoMain = marvelLogo}
  if(hub === 'pixar') {logoMain = pixarLogo}
  if(hub === 'a24') {logoMain = a24Logo}
  if(hub === 'disney') {logoMain = disneyLogo}
  if(hub === 'national') {logoMain = nationalLogo}
  if(hub === 'starwars') {logoMain = starwarsLogo}

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
      <div className='hub__card__logo'>
        <img src={process.env.PUBLIC_URL + logoMain}/>
      </div>
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
