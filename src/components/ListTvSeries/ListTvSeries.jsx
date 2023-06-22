import { useNavigate } from 'react-router-dom';
import './ListTvSeries.scss';
import { mediumImagePath } from '../../utils/tmdbConfig';

const ListTvSeries = ({ list }) => {
  const navigate = useNavigate();
  
  return (
    <div className='tv__box'>
      {list.results?.map(tv => (
        <div className='tv__item' key={tv.id}>
          <img src={mediumImagePath+tv.poster_path} alt='poster' onClick={() => navigate(`/tv/${tv.id}`)} />
        </div>
      ))}
    </div>
  )
};

export default ListTvSeries;
