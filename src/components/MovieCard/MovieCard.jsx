import { useNavigate, useParams } from 'react-router-dom';
import './MovieCard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCreditsMovie, fetchDetailsMovie, fetchImagesMovie, fetchSimilarMovie, fetchVideosMovie, getFetchedCreditsMovie, getFetchedDetailsMovie, getFetchedImagesMovie, getFetchedSimilarWithPosterMovie, getFetchedTrailerMovie } from '../../redux/movieRedux';
import { useEffect } from 'react';
import { imagePath, miniImagePath, profileImagePath, videoPath } from '../../utils/tmdbConfig';
import Slider from 'react-slick';

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

  const settings4 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 3500,
    arrows: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false
  };

  return(
    <div className='movie__wrapper'>
      <div className='movie__backdrop'>
        <img src={imagePath + movieData.backdrop_path} alt={movieData.title}/>
      </div>
      <div className='movie__main__info'>
        <div className='movie__title'>
          <p>{movieData.title}</p>
        </div>
        <div className='movie__overview'>
          <p>{movieData.overview}</p>
        </div>
        <div className='movie__date__score__container'>
          <div className='movie__date__score'>
            <div className='movie__release__date'>
              <p>{movieData.release_date?.substring(0, 4)}</p>
            </div>
            <div className='movie__watchlist__icon'>
              <img src={process.env.PUBLIC_URL + '/assets/icons/watchlist-icon.svg'} alt='watchlist icon'/>
            </div>
            <div className='movie__score'>
              <img src={process.env.PUBLIC_URL + '/assets/icons/star-solid.svg'} alt='star icon'/>
              <p>{movieData.vote_average?.toFixed(1)}</p>
            </div>
          </div>
        </div>
        <div className='movie__watch__container'>
          <div className='movie__watch__button'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/popcorn.svg'} alt='play icon'/>
            <p>WATCH NOW</p>
          </div>
        </div>
      </div>
      <div className='movie__bottom__section'>
        <div className='movie__bottoms__wrapper'>
          <p className='movie__section__name'>TOP CAST</p>
          <div className='movie__cast__crew'>
            <div className='movie__cast'>
              {movieCredits.cast?.slice(0, 6).map(person => (
                (person.profile_path !== null) ? (
                <div className='movie__cast__person' key={person.id}>
                  <img src={profileImagePath + person.profile_path} alt='profile avatar'/>
                </div>) : (null)
              ))}
            </div>
          </div>
        </div>
        <div className='movie__bottoms__wrapper'>
          <p className='movie__section__name'>WATCH NEXT</p>
          <div className='movie__similar'>
            <Slider {...settings4}>
              {movieSimilar?.map(similar => (
                (similar.poster_path !== null && similar.backdrop_path !== null) ? (
                  <div className='movie__similar__container' key={similar.id}>
                    <div className='movie__similar__item' onClick={() => navigate(`/movie/${similar.id}`)}>
                      <img src={miniImagePath + similar.poster_path} alt='movie poster'/>
                    </div>
                  </div>) : (null)
              ))}
            </Slider>
          </div>
        </div>
        {movieTrailers?.slice(0, 1).map(video => (
          (video.type === 'Trailer') ? (
            <div className='movie__bottoms__wrapper__trailer' key={video.key}>
              <p className='movie__section__name'>TRAILER</p>
              <div className='movie__video__container'>
                <div className='movie__video'>
                  <iframe title={video.key} width="100%" height="100%" src={videoPath + video.key} />
                </div>
              </div>
            </div>) : (null)
        ))}
      </div>
    </div>
  )
};

export default MovieCard;
