import './TVSeries.scss';
import { useSelector } from 'react-redux';
import { getFetchedAiringTodayTv, getFetchedOnTheAirTv, getFetchedPopularTv, getFetchedTopRatedTv } from '../../redux/tvSeriesRedux';
import ListTvSeries from '../ListTvSeries/ListTvSeries';

const TVSeries = () => {
  const airingToday = useSelector(getFetchedAiringTodayTv);
  const onTheAir = useSelector(getFetchedOnTheAirTv);
  const popular = useSelector(getFetchedPopularTv);
  const topRated = useSelector(getFetchedTopRatedTv);

  const settings4 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 3500,
    arrows: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false
  };

  return(
    <div className='tvSeries__container'>
      <h2>POPULAR</h2>
      <ListTvSeries list={popular} settings={settings4} />
      <h2>ON THE AIR</h2>
      <ListTvSeries list={onTheAir} settings={settings4} />
      <h2>AIRING TODAY</h2>
      <ListTvSeries list={airingToday} settings={settings4} />
      <h2>TOP RATED</h2>
      <ListTvSeries list={topRated} settings={settings4} />
    </div>
  )
};

export default TVSeries;
