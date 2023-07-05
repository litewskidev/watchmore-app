import { useSelector } from 'react-redux';
import { getFetchedAllTrending, getFetchedMoviesTrending, getFetchedPeopleTrending, getFetchedTvTrending } from '../../redux/trendingRedux.js';
import HomeTrending from '../HomeTrending/HomeTrending.jsx';
import Carousel from '../Carousel/Carousel.jsx';
import HomeHubs from '../HomeHubs/HomeHubs.jsx';
import HomeCollections from '../HomeCollections/HomeCollections.jsx';
import HomeTrendingPeople from '../HomeTrendingPeople/HomeTrendingPeople.jsx';
import './Home.scss';

const Home = () => {

  //  GET TRENDING
  const trendingAll = useSelector(getFetchedAllTrending);
  const trendingMovies = useSelector(getFetchedMoviesTrending);
  const trendingTv = useSelector(getFetchedTvTrending);
  const trendingPeople = useSelector(getFetchedPeopleTrending);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3700,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false
  };

  const settings2 = {
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
    <div className='home__container'>
      <Carousel settings={settings} list={trendingAll}/>
      <HomeHubs />
      <HomeTrending trendingMovies={trendingMovies} trendingTv={trendingTv} settings={settings2}/>
      <HomeCollections />
      <HomeTrendingPeople trendingPeople={trendingPeople} settings={settings2}/>
    </div>
  )
};

export default Home;
