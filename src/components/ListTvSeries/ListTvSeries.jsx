import { useNavigate } from 'react-router-dom';
import { mediumImagePath } from '../../utils/tmdbConfig.js';
import Slider from 'react-slick';
import './ListTvSeries.scss';

const ListTvSeries = ({ list, settings }) => {
  const navigate = useNavigate();

  return(
    <div className='tv__box'>
      <Slider {...settings}>
        {list.results?.map(tv => (
          <div className='tv__item__wrapper' key={tv.id}>
            <div className='tv__item__box'>
              <img src={mediumImagePath+tv.poster_path} loading='lazy' alt='poster' onClick={() => navigate(`/tv/${tv.id}`)} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
};

export default ListTvSeries;
