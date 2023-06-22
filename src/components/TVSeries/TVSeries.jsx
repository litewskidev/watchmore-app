import './TVSeries.scss';
import { useSelector } from 'react-redux';
import { getFetchedAiringTodayTv, getFetchedOnTheAirTv, getFetchedPopularTv, getFetchedTopRatedTv } from '../../redux/tvSeriesRedux';
import ListTvSeries from '../ListTvSeries/ListTvSeries';

const TVSeries = () => {
  const airingToday = useSelector(getFetchedAiringTodayTv);
  const onTheAir = useSelector(getFetchedOnTheAirTv);
  const popular = useSelector(getFetchedPopularTv);
  const topRated = useSelector(getFetchedTopRatedTv);

  return(
    <div className='tvSeries__container'>
      <h2>POPULAR</h2>
      <ListTvSeries list={popular}/>
      <h2>ON THE AIR</h2>
      <ListTvSeries list={onTheAir} />
      <h2>AIRING TODAY</h2>
      <ListTvSeries list={airingToday} />
      <h2>TOP RATED</h2>
      <ListTvSeries list={topRated} />
    </div>
  )
};

export default TVSeries;
