import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCreditsTvShow, fetchDetailsTvShow, fetchSeason, fetchSimilarTvShow, fetchVideosTvShow, getFetchedCreditsTvShow, getFetchedDetailsTvShow, getFetchedSimilarWithPosterTvShow, getFetchedTrailerTvShow, getFetchedTvShowSeason } from '../../redux/tvShowRedux.js';
import { image185Path, image300Path, image342Path, image700Path, miniImagePath, originalImagePath, profileImagePath, videoPath } from '../../utils/tmdbConfig.js';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase.js';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import Slider from 'react-slick';
import Footer from '../Footer/Footer.jsx';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import './TvShowCard.scss';

const TvShowCard = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const tvShowId = params.id;
  const page = 1;

  const [season, setSeason] = useState(1);
  //const [episode, setEpisode] = useState(1);

  useEffect(() => dispatch(fetchDetailsTvShow(tvShowId)), [dispatch, tvShowId]);
  useEffect(() => dispatch(fetchCreditsTvShow(tvShowId)), [dispatch, tvShowId]);
  useEffect(() => dispatch(fetchVideosTvShow(tvShowId)), [dispatch, tvShowId]);
  useEffect(() => dispatch(fetchSimilarTvShow(tvShowId, page)), [dispatch, tvShowId, page]);
  useEffect(() => dispatch(fetchSeason(tvShowId, season)), [dispatch, tvShowId, season]);

  const tvShowData = useSelector(getFetchedDetailsTvShow);
  const tvShowCredits = useSelector(getFetchedCreditsTvShow);
  const tvShowSimilar = useSelector(getFetchedSimilarWithPosterTvShow);
  const tvShowTrailers = useSelector(getFetchedTrailerTvShow);
  const tvShowSeason = useSelector(getFetchedTvShowSeason);

  const slidesToShowSimilarSix = (tvShowSimilar?.length < 7) ? tvShowSimilar.length : 6;
  const slidesToShowSimilarFour= (tvShowSimilar?.length < 5) ? tvShowSimilar.length : 4;
  const slidesToShowEpisodesSix = (tvShowSeason.episodes?.length < 7) ? tvShowSeason.episodes?.length : 6;
  const slidesToShowEpisodesThree = (tvShowSeason.episodes?.length < 4) ? tvShowSeason.episodes?.length : 3;

  let settings4;
  if (window.matchMedia('(max-width: 540px)').matches) {
    settings4 = {
      dots: false,
      infinite: true,
      speed: 700,
      slidesToShow: slidesToShowSimilarFour,
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
      slidesToShow: slidesToShowSimilarSix,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3500,
      arrows: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false
    };
  }

  let settings5;
  if (window.matchMedia('(max-width: 1024px)').matches) {
  settings5 = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: slidesToShowEpisodesThree,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 3500,
    arrows: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false
  };
  } else {
    settings5 = {
      dots: false,
      infinite: true,
      speed: 700,
      slidesToShow: slidesToShowEpisodesSix,
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
        watchlistTv: arrayUnion({
          id: tvShowId,
          title: tvShowData.name,
          poster: tvShowData.poster_path
        })
      }, { merge: true });
    }
    catch (err) {
      console.log(err);
    };

    const watchlistBtn = document.querySelector('#watchlist-btn-tv');
    watchlistBtn.classList.add('added');
    setTimeout(() => {
      watchlistBtn.classList.remove('added');
    }, 180);

    console.log("Show added to watchlist successfully!");
  };

  const mustBeLogged = (e) => {
    e.preventDefault();
    const modal = document.querySelector('#must-be-logged');
    modal.classList.add('show');
    setTimeout(() => {
    modal.classList.remove('show');
    }, 3000);
  };

  const handleSeasons = (e) => {
    e.preventDefault();
    setSeason(e.target.value);
  };

  const handleNavigate = (id) => {
    setSeason(1);
    navigate(`/tv/${id}`);
  };

  const toggleEpisodes = () => {
    const episodesBtn = document.querySelector('#episodes-list');
    episodesBtn.classList.toggle('show');
  };

  return(
    <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0,
      transition: { delay: 0.5, duration: 0.8, ease: [0, 0.9, 0.9, 1] }
    }}
    >
      <div className='tvShow__wrapper'>
        <div id='must-be-logged' className='must__be__logged__pop'>
          <p>You must be logged in to add show to watchlist!</p>
        </div>
        <div className='tvShow__backdrop'>
          {(window.matchMedia('(max-width: 1023.98px)').matches) ? (
            <LazyLoadImage src={image700Path + tvShowData.backdrop_path} width="100%" height="100%" effect='black-and-white' alt={tvShowData.title}/>
          ) :(
            <LazyLoadImage src={originalImagePath + tvShowData.backdrop_path} width="100%" height="100%" effect='black-and-white' alt={tvShowData.title}/>
          )}
        </div>
        <div className='tvShow__main__info'>
          <div className='tvShow__title'>
            <p>{tvShowData.name}</p>
          </div>
          <div className='tvShow__overview'>
            <p>{tvShowData.overview}</p>
          </div>
          <div className='movie__genres__container'>
            {tvShowData.genres?.slice(0, 3).map(genre => (
              <div className='movie__genres__item' key={genre.id}>
                <p>{genre.name}</p>
              </div>
            ))}
          </div>
          {(window.matchMedia('(max-width: 1023.98px)').matches) ? (
            <div className='tvShow__mobile__info__wrapper'>
              <div className='tvShow__date__score__container'>
                <div className='tvShow__date__score'>
                  {tvShowTrailers?.slice(0, 1).map(video => (
                    (video.type === 'Trailer') ? (
                    <div className='tvShow__bottoms__wrapper__trailer' key={video.key}>
                      <a className='tvShow__trailer__href' href={videoPath + video.key}><img src={process.env.PUBLIC_URL + '/assets/icons/play-icon-white.png'} alt='play button'/><p>TRAILER</p></a>
                    </div>) : (null)
                  ))}
                  {(user !== null) ? (
                    <div id='watchlist-btn-tv' className='tvShow__watchlist__icon'>
                      <img src={process.env.PUBLIC_URL + '/assets/icons/watchlist-icon.svg'} alt='watchlist icon' onClick={addToWatch}/>
                    </div>
                  ) : (
                    <div className='tvShow__watchlist__icon'>
                      <img src={process.env.PUBLIC_URL + '/assets/icons/watchlist-icon.svg'} alt='watchlist icon' onClick={mustBeLogged}/>
                    </div>
                  )}
                  <div className='tvShow__score'>
                    <img src={process.env.PUBLIC_URL + '/assets/icons/star-solid.svg'} alt='star icon'/>
                    <p>{tvShowData.vote_average?.toFixed(1)}</p>
                  </div>
                </div>
              </div>
              <div className='tvShow__date__score__container'>
                <div className='tvShow__date__score'>
                  <div className='tvShow__release__date'>
                    <select id='select-season' onChange={handleSeasons} className='tvShow__option'>
                      {tvShowData.seasons?.map(so => (
                        (so.season_number > 0) ? (
                          <option className='tvShow__option' value={so.season_number} key={so.season_number}>SEASON {so.season_number}</option>
                        ) : (null)
                      ))}
                    </select>
                  </div>
                  <div className='tvShow__score'>
                    <img className='tvShow__episodes__down__icon' src={process.env.PUBLIC_URL + '/assets/icons/down.png'} alt='down icon'/>
                    <p onClick={toggleEpisodes}>EPISODES</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className='tvShow__desktop__info__wrapper'>
              <div className='tvShow'>
                <div className='tvShow__watch__score'>
                  <div className='tvShow__score'>
                    <img src={process.env.PUBLIC_URL + '/assets/icons/star-solid.svg'} alt='star icon'/>
                    <p>{tvShowData.vote_average?.toFixed(1)}</p>
                  </div>
                  {tvShowTrailers?.slice(0, 1).map(video => (
                    (video.type === 'Trailer') ? (
                    <div className='tvShow__bottoms__wrapper__trailer' key={video.key}>
                      <a className='tvShow__trailer__href' href={videoPath + video.key}><img src={process.env.PUBLIC_URL + '/assets/icons/play-icon-white.png'} alt='play button'/><p>TRAILER</p></a>
                    </div>) : (null)
                  ))}
                  <p className='tvShow__status'>{tvShowData.status}</p>
                  <div className='tvShow__watch__container'>
                    {(user !== null) ? (
                      <div id='watchlist-btn-tv' className='tvShow__watchlist__icon'>
                        <img src={process.env.PUBLIC_URL + '/assets/icons/watchlist-icon.svg'} alt='watchlist icon' onClick={addToWatch}/>
                      </div>
                    ) : (
                      <div className='tvShow__watchlist__icon'>
                        <img src={process.env.PUBLIC_URL + '/assets/icons/watchlist-icon.svg'} alt='watchlist icon' onClick={mustBeLogged}/>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className='tvShow__date__score__container'>
                <div className='tvShow__date__score'>
                  <div className='tvShow__release__date'>
                    <select id='select-season' onChange={handleSeasons} className='tvShow__option'>
                      {tvShowData.seasons?.map(so => (
                        (so.season_number > 0) ? (
                          <option className='tvShow__option' value={so.season_number} key={so.season_number}>SEASON {so.season_number}</option>
                        ) : (null)
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div id='episodes-list' className='show'>
          <div className='tvShow__desktop__episodes__title'>
            <p>EPISODES</p>
          </div>
          <Slider {...settings5}>
            {tvShowSeason.episodes?.map(ep => (
              (ep.still_path !== null) ? (
                <div className='tvShow__episode__wrapper' key={ep.name}>
                  <div className='tvShow__episode__container'>
                    <div className='tvShow__episode__info'>
                      <div className='tvShow__episode__image'>
                        {(window.matchMedia('(max-width: 1023.98px)').matches) ? (
                          <LazyLoadImage src={image185Path + ep.still_path} effect='blur' alt={ep.name}/>
                        ) :(
                          <LazyLoadImage src={image300Path + ep.still_path} effect='blur' alt={ep.name}/>
                        )}
                      </div>
                      <div className='tvShow__episode__info__title'>
                        <p>{ep.episode_number}. {ep.name}</p>
                        <p>{ep.air_date} &#8226; {ep.runtime} min</p>
                      </div>
                    </div>
                    <div className='tvShow__play__button'>
                      <img src={process.env.PUBLIC_URL + '/assets/icons/play-icon-white.png'} alt='play icon'/>
                    </div>
                  </div>
                </div>
              ) : (
                <div className='tvShow__episode__wrapper' key={ep.name}>
                  <div className='tvShow__episode__container'>
                    <div className='tvShow__episode__info'>
                      <div className='tvShow__episode__image'>
                        <LazyLoadImage className='tvShow__nostill__img' src={process.env.PUBLIC_URL + '/assets/icons/series-icon.svg'} effect='blur' alt='series icon' />
                      </div>
                      <div className='tvShow__episode__info__title'>
                        <p>{ep.episode_number}. {ep.name}</p>
                        <p>{ep.air_date} &#8226; {ep.runtime} min</p>
                      </div>
                    </div>
                    <div className='tvShow__play__button'>
                      <img src={process.env.PUBLIC_URL + '/assets/icons/play-icon-white.png'} alt='play icon'/>
                    </div>
                  </div>
                </div>
              )
            ))}
          </Slider>
        </div>
        <div className='tvShow__bottom__section'>
          <div className='tvShow__bottoms__wrapper'>
            <p className='tvShow__section__name'>TOP CAST</p>
            <div className='tvShow__cast__crew'>
              <div className='tvShow__cast'>
                {tvShowCredits.cast?.slice(0, 6).map(person => (
                  (person.profile_path !== null) ? (
                  <div className='tvShow__cast__person' key={person.id}>
                    <LazyLoadImage src={profileImagePath + person.profile_path} effect='black-and-white' alt='profile avatar' onClick={() => navigate(`/person/${person.id}`)}/>
                  </div>) : (null)
                ))}
              </div>
            </div>
          </div>
          <div className='tvShow__bottoms__wrapper'>
            <p className='tvShow__section__name'>WATCH NEXT</p>
            <div className='tvShow__similar'>
              <Slider {...settings4}>
                {tvShowSimilar?.map(similar => (
                  <div className='tvShow__similar__container' key={similar.id}>
                    <div className='tvShow__similar__item' onClick={() => handleNavigate(similar.id)}>
                      {(window.matchMedia('(max-width: 1024px)').matches) ? (
                        <LazyLoadImage src={miniImagePath + similar.poster_path} effect='blur' alt='tv show poster'/>
                      ) : (
                        <LazyLoadImage src={image342Path + similar.poster_path} effect='blur' alt='tv show poster'/>
                      )}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  )
};

export default TvShowCard;
