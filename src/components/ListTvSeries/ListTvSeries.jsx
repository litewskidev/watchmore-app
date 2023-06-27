import { useNavigate } from 'react-router-dom';
import './ListTvSeries.scss';
import { mediumImagePath } from '../../utils/tmdbConfig';
import Slider from 'react-slick';

const ListTvSeries = ({ list, settings }) => {
  const navigate = useNavigate();

  return (
    <div className='tv__box'>
      <Slider {...settings}>
        {list.results?.map(tv => (
          <div className='tv__item__wrapper'>
            <div className='tv__item__box' key={tv.id}>
              <img src={mediumImagePath+tv.poster_path} alt='poster' onClick={() => navigate(`/tv/${tv.id}`)} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
};

export default ListTvSeries;
