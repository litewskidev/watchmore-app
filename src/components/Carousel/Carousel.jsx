import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imagePath } from '../../utils/tmdbConfig';
import './Carousel.scss';
import { useNavigate } from 'react-router';

const Carousel = ({ settings, list }) => {
  const navigate = useNavigate();

  return(
    <div className='carousel__wrapper'>
      <Slider {...settings}>
        {list.results?.map(item => (
          <div className='carousel__box' key={item.id}>
            <div className='image__border'>
              <div className='image__box'>
                <img src={imagePath + item.backdrop_path} alt='poster' onClick={() => navigate(`${item.media_type}/${item.id}`)}/>
                <div className='title__box'>
                  <p>{item.title}</p>
                  <p>{item.name}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
