import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCreditsMovie, fetchDetailsMovie, fetchSimilarMovie, fetchSimilarMovieTwo, fetchVideosMovie, getFetchedCreditsMovie, getFetchedDetailsMovie, getFetchedSimilarWithPosterMovie, getFetchedSimilarWithPosterMovieTwo, getFetchedTrailerMovie } from '../../redux/movieRedux.js';
import { image342Path, image700Path, miniImagePath, originalImagePath, profileImagePath, videoPath } from '../../utils/tmdbConfig.js';
import Slider from 'react-slick';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase.js';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import './MovieCard.scss';

const MovieCard = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const movieId = params.id;
  const page = 1;

  useEffect(() => dispatch(fetchDetailsMovie(movieId)), [dispatch, movieId]);
  useEffect(() => dispatch(fetchVideosMovie(movieId)), [dispatch, movieId]);
  useEffect(() => dispatch(fetchCreditsMovie(movieId)), [dispatch, movieId]);
  useEffect(() => dispatch(fetchSimilarMovie(movieId, 1)), [dispatch, movieId, page]);
  useEffect(() => dispatch(fetchSimilarMovieTwo(movieId, 2)), [dispatch, movieId, page]);

  const movieData = useSelector(getFetchedDetailsMovie);
  const movieCredits = useSelector(getFetchedCreditsMovie);
  const movieSimilar = useSelector(getFetchedSimilarWithPosterMovie);
  const movieSimilarTwo = useSelector(getFetchedSimilarWithPosterMovieTwo);
  const movieTrailers = useSelector(getFetchedTrailerMovie);

  let similarMovies = movieSimilarTwo?.concat(movieSimilar);
  console.log(similarMovies)

  let settings4;
  if (window.matchMedia('(max-width: 540px)').matches) {
    settings4 = {
      dots: false,
      infinite: true,
      speed: 700,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: false,
      autoplaySpeed: 3500,
      arrows: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false
    };
  } else {
    settings4 = {
      dots: false,
      infinite: true,
      speed: 700,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3500,
      arrows: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false
    };
  }

  const addToWatch = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, "users", user.uid), {
        watchlistMovie: arrayUnion({
          id: movieId,
          title: movieData.title,
          poster: movieData.poster_path
        })
      }, { merge: true });
    }
    catch (err) {
      console.log(err);
    };

    const watchlistBtn = document.querySelector('#watchlist-btn');
    watchlistBtn.classList.add('added');
    setTimeout(() => {
      watchlistBtn.classList.remove('added');
    }, 180);

    console.log("Movie added to watchlist successfully!");
  };

  const mustBeLogged = (e) => {
    e.preventDefault();
    const modal = document.querySelector('#must-be-logged');
    modal.classList.add('show');
    setTimeout(() => {
    modal.classList.remove('show');
    }, 3000);
  };

  return(
    <div className='movie__wrapper'>
      <div id='must-be-logged' className='must__be__logged__pop'>
        <p>You must be logged in to add movie to watchlist!</p>
      </div>
      <div className='movie__backdrop'>
        {(window.matchMedia('(max-width: 540px)').matches) ? (
          <LazyLoadImage src={image700Path + movieData.backdrop_path} width="100%" height="100%" effect='black-and-white' alt={movieData.title}/>
        ) :(
          <LazyLoadImage src={originalImagePath + movieData.backdrop_path} width="100%" height="100%" effect='black-and-white' alt={movieData.title}/>
        )}
      </div>
      <div className='movie__main__info'>
        <div className='movie__title'>
          <p>{movieData.title}</p>
        </div>
        <div className='movie__overview'>
          <p>{movieData.overview}</p>
        </div>
        <div className='movie__genres__container'>
          {movieData.genres?.slice(0, 3).map(genre => (
            <div className='movie__genres__item' key={genre.id}>
              <p>{genre.name}</p>
            </div>
          ))}
        </div>
        {(window.matchMedia('(max-width: 1024px)').matches) ? (
          <div className='movie__mobile__info__wrapper'>
            <div className='movie__date__score__container'>
              <div className='movie__date__score'>
                <div className='movie__release__date'>
                  <p>{movieData.release_date?.substring(0, 4)}</p>
                  <p>&#8226;</p>
                  <p>{movieData.runtime} min</p>
                </div>
                {(user !== null) ? (
                  <div id='watchlist-btn' className='movie__watchlist__icon'>
                    <img src={process.env.PUBLIC_URL + '/assets/icons/watchlist-icon.svg'} alt='watchlist icon' onClick={addToWatch}/>
                  </div>
                ) : (
                  <div className='movie__watchlist__icon'>
                    <img src={process.env.PUBLIC_URL + '/assets/icons/watchlist-icon.svg'} alt='watchlist icon' onClick={mustBeLogged}/>
                  </div>
                )}
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
        ) : (
          <div className='movie__desktop__info__wrapper'>
            <div className='movie__date__score__container'>
              <div className='movie__date__score'>
                <div className='movie__score'>
                  <img src={process.env.PUBLIC_URL + '/assets/icons/star-solid.svg'} alt='star icon'/>
                  <p>{movieData.vote_average?.toFixed(1)}</p>
                </div>
              </div>
              <p>&#8226;</p>
              <div className='movie__release__date'>
                <p>{movieData.release_date}</p>
              </div>
              <p>&#8226;</p>
              <div className='movie__run__time'>
                <p>{movieData.runtime} min</p>
              </div>
            </div>
            <div className='movie__watch__container'>
              <div className='movie__watch__button'>
                <img src={process.env.PUBLIC_URL + '/assets/icons/popcorn.svg'} alt='play icon'/>
                <p>WATCH NOW</p>
              </div>
              {(user !== null) ? (
                <div id='watchlist-btn' className='movie__watchlist__icon'>
                  <img src={process.env.PUBLIC_URL + '/assets/icons/watchlist-icon.svg'} alt='watchlist icon' onClick={addToWatch}/>
                </div>
              ) : (
                <div className='movie__watchlist__icon'>
                  <img src={process.env.PUBLIC_URL + '/assets/icons/watchlist-icon.svg'} alt='watchlist icon' onClick={mustBeLogged}/>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <div className='movie__bottom__section'>
        <div className='movie__bottoms__wrapper'>
          <p className='movie__section__name'>TOP CAST</p>
          <div className='movie__cast__crew'>
            <div className='movie__cast'>
              {movieCredits.cast?.slice(0, 6).map(person => (
                (person.profile_path !== null) ? (
                <div className='movie__cast__person' key={person.id}>
                  <LazyLoadImage src={profileImagePath + person.profile_path} effect='black-and-white' alt='profile avatar'/>
                </div>) : (null)
              ))}
            </div>
          </div>
        </div>
        <div className='movie__bottoms__wrapper'>
          <p className='movie__section__name'>WATCH NEXT</p>
          <div className='movie__similar'>
            <Slider {...settings4}>
              {similarMovies?.map(similar => (
                  <div className='movie__similar__container' key={similar.id}>
                    <div className='movie__similar__item' onClick={() => navigate(`/movie/${similar.id}`)}>
                      {(window.matchMedia('(max-width: 540px)').matches) ? (
                        <LazyLoadImage src={miniImagePath + similar.poster_path} effect='blur' alt='movie poster'/>
                      ) : (
                        <LazyLoadImage src={image342Path + similar.poster_path} effect='blur' alt='movie poster'/>
                      )}
                    </div>
                  </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      {movieTrailers?.slice(0, 1).map(video => (
          (video.type === 'Trailer') ? (
            <div className='movie__bottoms__wrapper__trailer' key={video.key}>
              <p className='movie__section__name'>TRAILER</p>
              <div className='movie__video__container'>
                <div className='movie__video'>
                  <iframe title={video.key} width="100%" height="100%" src={videoPath + video.key} loading='lazy' />
                </div>
              </div>
            </div>) : (null)
        ))}
    </div>
  )
};

export default MovieCard;
