import { useSelector } from 'react-redux';
import './Home.scss';
import { getFetchedAllTrending, getFetchedMoviesTrending, getFetchedTvTrending } from '../../redux/trendingRedux';
import HomeTrending from '../HomeTrending/HomeTrending';
import Carousel from '../Carousel/Carousel';
import NextArrow from '../NextArrow/NextArrow';

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
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false
  };

  return(
    <div className='home__container'>
      <Carousel settings={settings} list={trendingAll}/>
      <HomeTrending trendingMovies={trendingMovies} trendingTv={trendingTv} settings={settings2}/>
    </div>
  )
};

export default Home;
