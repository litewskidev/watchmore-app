import { useNavigate, useParams } from 'react-router-dom';
import { mediumImagePath, miniImagePath, profileImagePath, videoPath } from '../../utils/tmdbConfig';
import './TvShowCard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCreditsTvShow, fetchDetailsTvShow, fetchSimilarTvShow, fetchVideosTvShow, getFetchedCreditsTvShow, getFetchedDetailsTvShow, getFetchedSimilarWithPosterTvShow, getFetchedTrailerTvShow } from '../../redux/tvShowRedux';

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

  console.log(tvShowData);

  return(
    <div className='tvShow__wrapper'>
    <div className='tvShow__title'>
      <p>{tvShowData.name}</p>
    </div>
    <div className='tvShow__inner'>
      <div className='tvShow__poster__title'>
        <img src={mediumImagePath + tvShowData.poster_path} alt='tvShow poster'/>
      </div>
      <div className='tvShow__overview'>
        <p>{tvShowData.overview}</p>
      </div>
    </div>
    <div className='tvShow__date__score'>
      <div className='tvShow__release__date'>
        <p>STATUS: </p>
        <p>{tvShowData.status}</p>
      </div>
      <div className='tvShow__score'>
        <img src={process.env.PUBLIC_URL + '/assets/icons/star-solid.svg'} alt='star icon'/>
        <p>{tvShowData.vote_average}</p>
      </div>
    </div>
    <div className='tvShow__seasons__episodes'>
      <div className='tvShow__seasons'>
        <p>SEASONS</p>
        <div className='tvShow__seasons__number'>
          <p>{tvShowData.number_of_seasons}</p>
        </div>
      </div>
      <div className='tvShow__episodes'>
        <p>EPISODES</p>
        <div className='tvShow__seasons__number'>
          <p>{tvShowData.number_of_episodes}</p>
        </div>
      </div>
    </div>
    <p className='tvShow__section__name'>TOP CAST</p>
    <div className='tvShow__cast__crew'>
      <div className='tvShow__cast'>
        {tvShowCredits.cast?.slice(0, 5).map(person => (
          (person.profile_path !== null) ? (
          <div className='tvShow__cast__person' key={person.id}>
            <img src={profileImagePath + person.profile_path} alt='profile avatar'/>
          </div>) : (null)
        ))}
      </div>
    </div>
    <p className='tvShow__section__name'>SIMILAR</p>
    <div className='tvShow__similar'>
      {tvShowSimilar?.slice(0, 8).map(similar => (
        (similar.poster_path !== null) ? (
        <div className='tvShow__similar__item' key={similar.id} onClick={() => navigate(`/tv/${similar.id}`)}>
          <img src={miniImagePath + similar.poster_path} alt='tvShow poster'/>
        </div>) : (null)
      ))}
    </div>
    <p className='tvShow__section__name'>TRAILER</p>
    <div className='tvShow__video__container'>
        {tvShowTrailers?.slice(0, 1).map(video => (
          (video.type === 'Trailer') ? (
          <div className='tvShow__video' key={video.key}>
            <iframe title={video.key} width="100%" height="100%" src={videoPath + video.key} />
          </div>) : (null)
        ))}
      </div>
  </div>
  )
};

export default TvShowCard;
