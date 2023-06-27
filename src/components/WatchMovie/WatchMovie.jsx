import { useDispatch, useSelector } from 'react-redux';
import { videoPath } from '../../utils/tmdbConfig';
import { fetchVideosMovie, getFetchedTrailerMovie } from '../../redux/movieRedux';
import './WatchMovie.scss';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const WatchMovie = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const watchId = params.title;
  
  useEffect(() => dispatch(fetchVideosMovie(watchId)), [dispatch, watchId])
  const video = useSelector(getFetchedTrailerMovie);

  return(
    <div className='watch__movie__wrapper'>
      <div className='watch__movie__container'>
        {video?.map(item => (
          (item.type === 'Trailer') ? (
          <div className='watch__movie__video' key={item.key}>
            <iframe autoPlay={true} title={item.key} width="100%" height="100%" src={videoPath + item.key} />
          </div>) : (null)
        ))}
      </div>
    </div>
  )
};

export default WatchMovie;
