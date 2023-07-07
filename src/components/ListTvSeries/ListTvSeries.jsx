import { useNavigate } from 'react-router-dom';
import { imagePath, mediumImagePath } from '../../utils/tmdbConfig.js';
import { LazyLoadImage } from "react-lazy-load-image-component";
import Slider from 'react-slick';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './ListTvSeries.scss';

const ListTvSeries = ({ list, settings }) => {
  const navigate = useNavigate();

  return(
    <div className='tv__box'>
      <Slider {...settings}>
        {list.results?.map(tv => (
          <div className='tv__item__wrapper' key={tv.id}>
            <div className='tv__item__box'>
              {(window.matchMedia('(max-width: 540px)').matches) ? (
                <LazyLoadImage src={mediumImagePath+tv.poster_path} effect='blur' alt='poster' onClick={() => navigate(`/tv/${tv.id}`)} />
              ) : (
                <LazyLoadImage src={imagePath + tv.poster_path} effect='blur' alt='poster' onClick={() => navigate(`/tv/${tv.id}`)} />
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
};

export default ListTvSeries;
