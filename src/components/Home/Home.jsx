import { useDispatch, useSelector } from 'react-redux';
import './Home.scss';
import { getFetchedPopularMovies } from '../../redux/moviesRedux';
import { updatePage } from '../../redux/pageRedux.js';
import { goToTop } from '../../utils/goToTop.js'
import { getFetchedPopularTv } from '../../redux/tvSeriesRedux';
import { fetchAllTrending, fetchMoviesTrending, fetchTvTrending, getAllTrending, getFetchedAllTrending, getFetchedMoviesTrending, getFetchedTvTrending } from '../../redux/trendingRedux';
import HomeHero from '../HomeHero/HomeHero';
import { useEffect } from 'react';
import HomeTrending from '../HomeTrending/HomeTrending';

const Home = ({ page }) => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchAllTrending(page)), [dispatch, page]);
  useEffect(() => dispatch(fetchMoviesTrending(page)), [dispatch, page]);
  useEffect(() => dispatch(fetchTvTrending(page)), [dispatch, page]);

  const trendingAll = useSelector(getFetchedAllTrending);
  const trendingMovies = useSelector(getFetchedMoviesTrending);
  const trendingTv = useSelector(getFetchedTvTrending);

  const decrementPage = () => {
    if(page > 1) {
    dispatch(updatePage(page - 1));
    goToTop();
    }
  };

  const incrementPage = () => {
    dispatch(updatePage(page + 1));
    goToTop();
  };

  return(
    <div className='home__container'>
      <HomeHero trendingAll={trendingAll}/>
      <HomeTrending trendingMovies={trendingMovies} trendingTv={trendingTv}/>
    </div>
  )
};

export default Home;
