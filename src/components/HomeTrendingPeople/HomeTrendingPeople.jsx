import Slider from 'react-slick';
import { mediumImagePath } from '../../utils/tmdbConfig.js';
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
                    <img src={mediumImagePath + person.profile_path} loading="lazy" alt={person.name}/>
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
