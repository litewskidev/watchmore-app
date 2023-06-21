import { useNavigate } from 'react-router-dom';
import { imagePath } from '../../utils/tmdbConfig';
import './HomeHero.scss';

const HomeHero = ({ trendingAll }) => {
  const navigate = useNavigate();
  console.log(trendingAll);

  return (
    <div className='hero__container'>
      {trendingAll.results?.map(item => (
        <div className='hero__item' key={item.id}>
          <img src={imagePath + item.poster_path} alt='movie poster' onClick={() => navigate(`/movie/${item.id}`)}/>
        </div>
      ))
      }
    </div>
  )
};

export default HomeHero;
