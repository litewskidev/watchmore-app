import { useNavigate, useParams } from 'react-router-dom';
import { imagePath, miniImagePath, profileImagePath, videoPath } from '../../utils/tmdbConfig';
import './TvShowCard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCreditsTvShow, fetchDetailsTvShow, fetchSimilarTvShow, fetchVideosTvShow, getFetchedCreditsTvShow, getFetchedDetailsTvShow, getFetchedSimilarWithPosterTvShow, getFetchedTrailerTvShow } from '../../redux/tvShowRedux';
import Slider from 'react-slick';

const TvShowCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const tvShowId = params.id;
  const page = 1;

  useEffect(() => dispatch(fetchDetailsTvShow(tvShowId)), [dispatch, tvShowId]);
  useEffect(() => dispatch(fetchCreditsTvShow(tvShowId)), [dispatch, tvShowId]);
  useEffect(() => dispatch(fetchVideosTvShow(tvShowId)), [dispatch, tvShowId]);
  useEffect(() => dispatch(fetchSimilarTvShow(tvShowId, page)), [dispatch, tvShowId, page]);

  const tvShowData = useSelector(getFetchedDetailsTvShow);
  const tvShowCredits = useSelector(getFetchedCreditsTvShow);
  const tvShowSimilar = useSelector(getFetchedSimilarWithPosterTvShow);
  const tvShowTrailers = useSelector(getFetchedTrailerTvShow);

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
        <div className='tvShow__date__score__container'>
          <div className='tvShow__date__score'>
            <div className='tvShow__release__date'>
              <p>SEASONS</p>
            </div>
            <div className='tvShow__score'>
              <p>EPISODES</p>
            </div>
          </div>
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
              <p>{tvShowData.vote_average}</p>
            </div>
          </div>
        </div>
        <div className='tvShow__watch__container' onClick={() => navigate(`/watch/${tvShowId}`)}>
          <div className='tvShow__watch__button'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/popcorn.svg'} alt='play icon'/>
            <p>WATCH NOW</p>
          </div>
        </div>
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
                    <div className='tvShow__similar__item' onClick={() => navigate(`/tv/${similar.id}`)}>
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
