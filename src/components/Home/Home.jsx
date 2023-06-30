import { useSelector } from 'react-redux';
import { getFetchedAllTrending, getFetchedMoviesTrending, getFetchedTvTrending } from '../../redux/trendingRedux';
import HomeTrending from '../HomeTrending/HomeTrending.jsx';
import Carousel from '../Carousel/Carousel.jsx';
import HomeHubs from '../HomeHubs/HomeHubs.jsx';
import './Home.scss';
import HomeCollections from '../HomeCollections/HomeCollections';

const Home = () => {
  const trendingAll = useSelector(getFetchedAllTrending);
  const trendingMovies = useSelector(getFetchedMoviesTrending);
  const trendingTv = useSelector(getFetchedTvTrending);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false
  };

  const settings2 = {
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
    <div className='home__container'>
      <Carousel settings={settings} list={trendingAll}/>
      <HomeHubs />
      <HomeTrending trendingMovies={trendingMovies} trendingTv={trendingTv} settings={settings2}/>
      <HomeCollections />
    </div>
  )
};

export default Home;
