import { useNavigate, useParams } from 'react-router-dom';
import { imagePath, mediumImagePath, miniImagePath, profileImagePath, videoPath } from '../../utils/tmdbConfig';
import './TvShowCard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchCreditsTvShow, fetchDetailsTvShow, fetchSeason, fetchSimilarTvShow, fetchVideosTvShow, getFetchedCreditsTvShow, getFetchedDetailsTvShow, getFetchedSimilarWithPosterTvShow, getFetchedTrailerTvShow, getFetchedTvShowSeason } from '../../redux/tvShowRedux';
import Slider from 'react-slick';

const TvShowCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const tvShowId = params.id;
  const page = 1;

  const [season, setSeason] = useState(1);
  const [episode, setEpisode] = useState(1);

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

  const settings5 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500
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
  }

  console.log(tvShowData);

  return(
    <div className='tvShow__wrapper'>
      <div className='tvShow__backdrop'>
        <img src={imagePath + tvShowData.backdrop_path} alt={tvShowData.title}/>
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
        <div className='tvShow__date__score__container'>
          <div className='tvShow__date__score'>
            <div className='tvShow__release__date'>
              <p>{tvShowData.first_air_date?.substring(0, 4)}</p>
            </div>
            <div className='tvShow__watchlist__icon'>
              <img src={process.env.PUBLIC_URL + '/assets/icons/watchlist-icon.svg'} alt='watchlist icon'/>
            </div>
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
      <div id='episodes-list'>
        <Slider {...settings5}>
          {tvShowSeason.episodes?.map(ep => (
            (ep.still_path !== null) ? (
                <div className='tvShow__episode__wrapper' key={ep.name}>
                  <div className='tvShow__episode__container'>
                    <div className='tvShow__episode__image'>
                      <img src={mediumImagePath + ep.still_path} alt={ep.name}/>
                    </div>
                    <div className='tvShow__episode__info'>
                      <div className='tvShow__episode__info__title'>
                        <p>{ep.episode_number}. {ep.name}</p>
                        <p>{ep.air_date} &#8226; {ep.runtime} min</p>
                      </div>
                      <div className='tvShow__play__button'>
                        <img src={process.env.PUBLIC_URL + '/assets/icons/play-icon-white.png'} alt='play icon'/>
                      </div>
                    </div>
                  </div>
                </div>
            ) : (
              <div className='tvShow__episode__wrapper' key={ep.name}>
                <div className='tvShow__episode__container'>
                  <div className='tvShow__episode__image'>
                    <img className='tvShow__nostill__img' src={process.env.PUBLIC_URL + '/assets/icons/series-icon.svg'} alt='series icon' />
                  </div>
                  <div className='tvShow__episode__info'>
                    <div className='tvShow__episode__info__title'>
                      <p>{ep.name}</p>
                      <p>{ep.air_date}</p>
                    </div>
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
                  <img src={profileImagePath + person.profile_path} alt='profile avatar'/>
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
                (similar.poster_path !== null && similar.backdrop_path !== null) ? (
                  <div className='tvShow__similar__container' key={similar.id}>
                    <div className='tvShow__similar__item' onClick={() => handleNavigate(similar.id)}>
                      <img src={miniImagePath + similar.poster_path} alt='movie poster'/>
                    </div>
                  </div>) : (null)
              ))}
            </Slider>
          </div>
        </div>
        {tvShowTrailers?.slice(0, 1).map(video => (
          (video.type === 'Trailer') ? (
            <div className='tvShow__bottoms__wrapper__trailer' key={video.key}>
              <p className='tvShow__section__name'>TRAILER</p>
              <div className='tvShow__video__container'>
                <div className='tvShow__video'>
                  <iframe title={video.key} width="100%" height="100%" src={videoPath + video.key} />
                </div>
              </div>
            </div>) : (null)
        ))}
      </div>
    </div>
  )
};

export default TvShowCard;
