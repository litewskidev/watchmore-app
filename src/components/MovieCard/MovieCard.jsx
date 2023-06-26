import { useNavigate, useParams } from 'react-router-dom';
import './MovieCard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCreditsMovie, fetchDetailsMovie, fetchImagesMovie, fetchSimilarMovie, fetchVideosMovie, getFetchedCreditsMovie, getFetchedDetailsMovie, getFetchedImagesMovie, getFetchedSimilarWithPosterMovie, getFetchedTrailerMovie } from '../../redux/movieRedux';
import { useEffect } from 'react';
import { mediumImagePath, miniImagePath, profileImagePath, videoPath } from '../../utils/tmdbConfig';

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
  useEffect(() => dispatch(fetchImagesMovie(movieId)), [dispatch, movieId]);

  const movieData = useSelector(getFetchedDetailsMovie);
  const movieCredits = useSelector(getFetchedCreditsMovie);
  const movieSimilar = useSelector(getFetchedSimilarWithPosterMovie);
  const movieTrailers = useSelector(getFetchedTrailerMovie);
  const movieImages = useSelector(getFetchedImagesMovie);

  console.log(movieImages);
  return(
    <div className='movie__wrapper'>
      <div className='movie__title'>
        <p>{movieData.title}</p>
      </div>
      <div className='movie__inner'>
        <div className='movie__poster__title'>
          <img src={mediumImagePath + movieData.poster_path} alt='movie poster'/>
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
      <p className='movie__section__name'>TOP CAST</p>
      <div className='movie__cast__crew'>
        <div className='movie__cast'>
          {movieCredits.cast?.slice(0, 5).map(person => (
            (person.profile_path !== null) ? (
            <div className='movie__cast__person' key={person.id}>
              <img src={profileImagePath + person.profile_path} alt='profile avatar'/>
            </div>) : (null)
          ))}
        </div>
      </div>
      <p className='movie__section__name'>SIMILAR</p>
      <div className='movie__similar'>
        {movieSimilar?.slice(0, 8).map(similar => (
          (similar.poster_path !== null) ? (
          <div className='movie__similar__item' key={similar.id} onClick={() => navigate(`/movie/${similar.id}`)}>
            <img src={miniImagePath + similar.poster_path} alt='movie poster'/>
          </div>) : (null)
        ))}
      </div>
      <p className='movie__section__name'>TRAILER</p>
      <div className='movie__video__container'>
          {movieTrailers?.slice(0, 1).map(video => (
            (video.type === 'Trailer') ? (
            <div className='movie__video' key={video.key}>
              <iframe title={video.key} width="100%" height="100%" src={videoPath + video.key} />
            </div>) : (null)
          ))}
        </div>
    </div>
  )
};

export default MovieCard;
