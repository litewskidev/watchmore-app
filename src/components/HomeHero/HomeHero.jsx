import { useNavigate } from 'react-router-dom';
import { imagePath } from '../../utils/tmdbConfig';
import './HomeHero.scss';

const HomeHero = ({ trendingAll }) => {
  const navigate = useNavigate();

  return (
    <div className='hero__container'>
      {trendingAll.results?.map(item => (
        <div className='hero__item' key={item.id}>
          <img src={imagePath + item.poster_path} alt='movie poster' onClick={() => navigate(`/${item.media_type
}/${item.id}`)}/>
        </div>
      ))
      }
    </div>
  )
};

export default HomeHero;
