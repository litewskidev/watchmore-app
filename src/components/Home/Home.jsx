import { useSelector } from 'react-redux';
import { getFetchedAllTrending, getFetchedMoviesTrending, getFetchedPeopleTrending, getFetchedTvTrending } from '../../redux/trendingRedux.js';
import { motion } from "framer-motion";
import HomeTrending from '../HomeTrending/HomeTrending.jsx';
import Carousel from '../Carousel/Carousel.jsx';
import HomeHubs from '../HomeHubs/HomeHubs.jsx';
import HomeCollections from '../HomeCollections/HomeCollections.jsx';
import HomeTrendingPeople from '../HomeTrendingPeople/HomeTrendingPeople.jsx';
import Footer from '../Footer/Footer.jsx';
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
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3700,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false
  };

  let settings2;
  if (window.matchMedia('(max-width: 540px)').matches) {
    settings2 = {
      dots: false,
      infinite: true,
      speed: 700,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: false,
      autoplaySpeed: 3500,
      arrows: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false
    };
  }
  else if
  (window.matchMedia('(max-width: 1024px)').matches) {
    settings2 = {
      dots: false,
      infinite: true,
      speed: 700,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3500,
      arrows: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false
    };
  }
  else {
    settings2 = {
      dots: false,
      infinite: true,
      speed: 700,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3500,
      arrows: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false
    };
  }

  return(
    <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0,
      transition: { delay: 0.5, duration: 0.8, ease: [0, 0.9, 0.9, 1] }
    }}
    >
      <div className='home__container'>
          <Carousel settings={settings} list={trendingAll}/>
          <HomeHubs />
          <HomeTrending trendingMovies={trendingMovies} trendingTv={trendingTv} settings={settings2}/>
          <HomeCollections />
          <HomeTrendingPeople trendingPeople={trendingPeople} settings={settings2}/>
      </div>
      <Footer />
    </motion.div>
  )
};

export default Home;
