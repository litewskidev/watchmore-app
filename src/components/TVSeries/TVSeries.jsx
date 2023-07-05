import { useDispatch, useSelector } from 'react-redux';
import { fetchActionTv, fetchAiringTodayTv, fetchAnimeTv, fetchComedyTv, fetchCrimeTv, fetchDramaTv, fetchMysteryTv, fetchOnTheAirTv, fetchPopularTv, fetchScifiTv, fetchTopRatedTv, fetchWesternTv, getFetchedActionTv, getFetchedAiringTodayTv, getFetchedAnimeTv, getFetchedComedyTv, getFetchedCrimeTv, getFetchedDramaTv, getFetchedMysteryTv, getFetchedOnTheAirTv, getFetchedPopularTv, getFetchedScifiTv, getFetchedTopRatedTv, getFetchedWesternTv } from '../../redux/tvSeriesRedux.js';
import ListTvSeries from '../ListTvSeries/ListTvSeries.jsx';
import './TVSeries.scss';
import { useEffect } from 'react';

const TVSeries = () => {
  const dispatch = useDispatch();

  //  FETCH TV SERIES
  useEffect(() => dispatch(fetchAiringTodayTv(1)), [dispatch]);
  useEffect(() => dispatch(fetchOnTheAirTv(2)), [dispatch]);
  useEffect(() => dispatch(fetchPopularTv(3)), [dispatch]);
  useEffect(() => dispatch(fetchTopRatedTv(1)), [dispatch]);
  useEffect(() => dispatch(fetchActionTv(1)), [dispatch]);
  useEffect(() => dispatch(fetchComedyTv(1)), [dispatch]);
  useEffect(() => dispatch(fetchMysteryTv(1)), [dispatch]);
  useEffect(() => dispatch(fetchScifiTv(1)), [dispatch]);
  useEffect(() => dispatch(fetchWesternTv(1)), [dispatch]);
  useEffect(() => dispatch(fetchCrimeTv(1)), [dispatch]);
  useEffect(() => dispatch(fetchDramaTv(1)), [dispatch]);
  useEffect(() => dispatch(fetchAnimeTv(1)), [dispatch]);

  //  GET TV SERIES
  const airingToday = useSelector(getFetchedAiringTodayTv);
  const onTheAir = useSelector(getFetchedOnTheAirTv);
  const popular = useSelector(getFetchedPopularTv);
  const topRated = useSelector(getFetchedTopRatedTv);
  const action = useSelector(getFetchedActionTv);
  const comedy = useSelector(getFetchedComedyTv);
  const mystery = useSelector(getFetchedMysteryTv);
  const scifi = useSelector(getFetchedScifiTv);
  const western = useSelector(getFetchedWesternTv);
  const crime = useSelector(getFetchedCrimeTv);
  const drama = useSelector(getFetchedDramaTv);
  const anime = useSelector(getFetchedAnimeTv);

  const settings4 = {
    dots: false,
    infinite: true,
    speed: 600,
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
    <div className='tvSeries__wrapper'>
      <div className='tvSeries__main__title'>
        <h1>TV SERIES</h1>
        <h1>TV SERIES</h1>
      </div>
    <div className='tvSeries__container'>
      <div className='tvSeries__section__title'>
        <h2>TOP RATED</h2>
      </div>
      <ListTvSeries list={topRated} settings={settings4} />
      <div className='tvSeries__section__title'>
        <h2>POPULAR</h2>
      </div>
      <ListTvSeries list={popular} settings={settings4} />
      <div className='tvSeries__section__title'>
        <h2>ON THE AIR</h2>
      </div>
      <ListTvSeries list={onTheAir} settings={settings4} />
      <div className='tvSeries__section__title'>
        <h2>AIRING TODAY</h2>
      </div>
      <ListTvSeries list={airingToday} settings={settings4} />
      <div className='tvSeries__section__title'>
        <h2>ACTION & ADVENTURE</h2>
      </div>
      <ListTvSeries list={action} settings={settings4} />
      <div className='tvSeries__section__title'>
        <h2>COMEDY</h2>
      </div>
      <ListTvSeries list={comedy} settings={settings4} />
      <div className='tvSeries__section__title'>
        <h2>ANIMATION</h2>
      </div>
      <ListTvSeries list={anime} settings={settings4} />
      <div className='tvSeries__section__title'>
        <h2>MYSTERY</h2>
      </div>
      <ListTvSeries list={mystery} settings={settings4} />
      <div className='tvSeries__section__title'>
        <h2>SCI-FI & FANTASY</h2>
      </div>
      <ListTvSeries list={scifi} settings={settings4} />
      <div className='tvSeries__section__title'>
        <h2>WESTERN</h2>
      </div>
      <ListTvSeries list={western} settings={settings4} />
      <div className='tvSeries__section__title'>
        <h2>CRIME</h2>
      </div>
      <ListTvSeries list={crime} settings={settings4} />
      <div className='tvSeries__section__title'>
        <h2>DRAMA</h2>
      </div>
      <ListTvSeries list={drama} settings={settings4} />
    </div>
    </div>
  )
};

export default TVSeries;
