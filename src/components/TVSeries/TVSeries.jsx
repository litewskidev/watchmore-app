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
      <div className='tvSeries__main__title'>
        <h1>TV SERIES</h1>
        <h1>TV SERIES</h1>
      </div>
      <div className='tvSeries__section__title'>
        <h2>POPULAR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
        <h2>POPULAR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
      </div>
      <ListTvSeries list={popular} settings={settings4} />
      <div className='tvSeries__section__title'>
        <h2>ON THE AIR&nbsp;&nbsp;&nbsp;</h2>
        <h2>ON THE AIR&nbsp;&nbsp;&nbsp;</h2>
      </div>
      <ListTvSeries list={onTheAir} settings={settings4} />
      <div className='tvSeries__section__title'>
        <h2>AIRING TODAY</h2>
        <h2>AIRING TODAY</h2>
      </div>
      <ListTvSeries list={airingToday} settings={settings4} />
      <div className='tvSeries__section__title'>
        <h2>TOP RATED&nbsp;&nbsp;&nbsp;&nbsp;</h2>
        <h2>TOP RATED&nbsp;&nbsp;&nbsp;&nbsp;</h2>
      </div>
      <ListTvSeries list={topRated} settings={settings4} />
    </div>
  )
};

export default TVSeries;
