import { useSelector } from 'react-redux';
import './Home.scss';
import { getFetchedAllTrending, getFetchedMoviesTrending, getFetchedTvTrending } from '../../redux/trendingRedux';
import HomeHero from '../HomeHero/HomeHero';
import HomeTrending from '../HomeTrending/HomeTrending';

const Home = () => {
  const trendingAll = useSelector(getFetchedAllTrending);
  const trendingMovies = useSelector(getFetchedMoviesTrending);
  const trendingTv = useSelector(getFetchedTvTrending);

  return(
    <div className='home__container'>
      <HomeHero trendingAll={trendingAll}/>
      <HomeTrending trendingMovies={trendingMovies} trendingTv={trendingTv}/>
    </div>
  )
};

export default Home;
