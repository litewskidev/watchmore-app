import { useNavigate, useParams } from 'react-router-dom';
import './MovieCard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCreditsMovie, fetchDetailsMovie, fetchSimilarMovie, fetchVideosMovie, getFetchedCreditsMovie, getFetchedDetailsMovie, getFetchedSimilarMovie, getFetchedVideosMovie } from '../../redux/movieRedux';
import { useEffect } from 'react';
import { imagePath, videoPath } from '../../utils/tmdbConfig';

const MovieCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const movieId = params.id;
  const page = 1;

  useEffect(() => dispatch(fetchDetailsMovie(movieId)), [dispatch, movieId]);
  useEffect(() => dispatch(fetchVideosMovie(movieId)), [dispatch, movieId]);
  useEffect(() => dispatch(fetchCreditsMovie(movieId)), [dispatch, movieId]);
  useEffect(() => dispatch(fetchSimilarMovie(movieId, page)), [dispatch, movieId, page]);

  const movieData = useSelector(getFetchedDetailsMovie);
  const movieCredits = useSelector(getFetchedCreditsMovie);
  const movieSimilar = useSelector(getFetchedSimilarMovie);
  const movieVideos = useSelector(getFetchedVideosMovie);

  console.log(movieData);
  console.log(movieCredits);
  console.log(movieSimilar);
  console.log(movieVideos);

  return(
    <div className='movie__wrapper'>
      <div className='movie__title'>
        <p>{movieData.title}</p>
      </div>
      <div className='movie__inner'>
        <div className='movie__poster__title'>
          <img src={imagePath + movieData.poster_path} alt='movie poster'/>
        </div>
        <div className='movie__overview'>
          <p>{movieData.overview}</p>
        </div>
      </div>
      <div className='movie__date__score'>
        <div className='movie__release__date'>
          <p>{movieData.status}</p>
          <p>{movieData.release_date}</p>
        </div>
        <div className='movie__score'>
          <img src={process.env.PUBLIC_URL + '/assets/icons/star-solid.svg'} alt='star icon'/>
          <p>{movieData.vote_average}</p>
        </div>
      </div>
      <p className='movie__section__name'>CAST</p>
      <div className='movie__cast__crew'>
        <div className='movie__cast'>
          {movieCredits.cast?.slice(0, 5).map(person => (
            <div className='movie__cast__person' key={person.id}>
              <img src={imagePath + person.profile_path} alt='profile avatar'/>
            </div>
          ))}
        </div>
      </div>
      <p className='movie__section__name'>SIMILAR</p>
      <div className='movie__similar'>
        {movieSimilar.results?.slice(0, 8).map(similar => (
          <div className='movie__similar__item' key={similar.id} onClick={() => navigate(`/movie/${similar.id}`)}>
            <img src={imagePath + similar.poster_path} alt='movie poster'/>
          </div>
        ))}
      </div>
      <p className='movie__section__name'>VIDEOS</p>
      <div className='movie__video__container'>
          {movieVideos.results?.map(video => (
            <div className='movie__video' key={video.key}>
              <iframe title={video.key} width="100%" height="100%" src={videoPath + video.key} />
            </div>
          ))}
        </div>
    </div>
  )
};

export default MovieCard;
