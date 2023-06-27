import { useNavigate } from 'react-router';
import './Collections.scss';

const Collections = () => {
  const navigate = useNavigate();

  return(
    <div className='collections'>
      <div className='collections__main__title' onClick={() => navigate('/collections')}>
        <h1>COLLECTIONS</h1>
        <h1>COLLECTIONS</h1>
      </div>
      <div className='collections__wrapper'>
        <div className='collections__container'>
          <div className='collections__box'>
            <div className='collections__logo' onClick={() => navigate('/collection/marvel')}>
              <img className='collections__img' src={process.env.PUBLIC_URL + '/assets/images/viewers-marvel.png'}/>
              <video className='collections__video' autoPlay={true} loop={true} playsInline={true} muted>
                <source src={process.env.PUBLIC_URL + '/assets/videos/1564676115-marvel.mp4'} type='video/mp4' />
              </video>
            </div>
          </div>
          <div className='collections__box'>
            <div className='collections__logo' onClick={() => navigate('/collection/starwars')}>
              <img className='collections__img' src={process.env.PUBLIC_URL + '/assets/images/viewers-starwars.png'}/>
              <video className='collections__video' autoPlay={true} loop={true} playsInline={true} muted>
                <source src={process.env.PUBLIC_URL + '/assets/videos/1608229455-star-wars.mp4'} type='video/mp4' />
              </video>
            </div>
          </div>
        </div>

        <div className='collections__container'>
          <div className='collections__box'>
            <div className='collections__logo' onClick={() => navigate('/collection/pixar')}>
              <img className='collections__img' src={process.env.PUBLIC_URL + '/assets/images/viewers-pixar.png'}/>
              <video className='collections__video' autoPlay={true} loop={true} playsInline={true} muted>
                <source src={process.env.PUBLIC_URL + '/assets/videos/1564676714-pixar.mp4'} type='video/mp4' />
              </video>
            </div>
          </div>
          <div className='collections__box'>
            <div className='collections__logo' onClick={() => navigate('/collection/national')}>
              <img className='collections__img' src={process.env.PUBLIC_URL + '/assets/images/viewers-national.png'}/>
              <video className='collections__video' autoPlay={true} loop={true} playsInline={true} muted>
                <source src={process.env.PUBLIC_URL + '/assets/videos/1564676296-national-geographic.mp4'} type='video/mp4' />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Collections;
