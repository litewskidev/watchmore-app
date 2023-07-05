import Slider from 'react-slick';
import { mediumImagePath } from '../../utils/tmdbConfig.js';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import './HomeTrendingPeople.scss';

const HomeTrendingPeople = ({ trendingPeople, settings }) => {
  return(
    <div className='home__trending__wrapper'>
      <div className='home__trending__box'>
        <div className='home__section__title'>
          <p>TRENDING PEOPLE</p>
        </div>
        <div className='trending__movies__container'>
          <Slider {...settings}>
            {trendingPeople.results?.map(person => (
              (person.profile_path !== null) ? (
                <div className='trending__movies__wrapper' key={person.id}>
                  <div className='trending__movies__box'>
                    <LazyLoadImage src={mediumImagePath + person.profile_path} effect='blur' alt={person.name}/>
                  </div>
                </div>
              ) : (null)
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
};

export default HomeTrendingPeople;
