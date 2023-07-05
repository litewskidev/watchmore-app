import { useNavigate } from 'react-router';
import './HomeHubs.scss';

const HomeHubs = () => {
  const navigate = useNavigate();

  return(
    <div className='hubs'>
      <div className='collections__main__title'>
        <h1>HUBS</h1>
        <h1>HUBS</h1>
      </div>
      <div className='collections__wrapper'>
        <div className='collections__container'>
          <div className='collections__box'>
            <div className='collections__logo' onClick={() => navigate('/hubs/marvel')}>
              <img className='collections__img' src={process.env.PUBLIC_URL + '/assets/images/viewers-marvel.png'} loading="lazy" alt='marvel logo'/>
              <video className='collections__video' autoPlay={true} loop={true} playsInline={true} muted>
                <source src={process.env.PUBLIC_URL + '/assets/videos/1564676115-marvel.mp4'} type='video/mp4' />
              </video>
              <img className='collections__mobile__background' src={process.env.PUBLIC_URL + '/assets/images/marvel-mobile.webp'} loading="lazy" alt='marvel background' />
            </div>
          </div>
          <div className='collections__box'>
            <div className='collections__logo' onClick={() => navigate('/hubs/starwars')}>
              <img className='collections__img' src={process.env.PUBLIC_URL + '/assets/images/viewers-starwars.png'} loading="lazy" alt='star wars logo'/>
              <video className='collections__video' autoPlay={true} loop={true} playsInline={true} muted>
                <source src={process.env.PUBLIC_URL + '/assets/videos/1608229455-star-wars.mp4'} type='video/mp4' />
              </video>
              <img className='collections__mobile__background' src={process.env.PUBLIC_URL + '/assets/images/starwars-mobile.webp'} loading="lazy" alt='star wars background' />
            </div>
          </div>
        </div>
        <div className='collections__container'>
          <div className='collections__box'>
            <div className='collections__logo' onClick={() => navigate('/hubs/pixar')}>
              <img className='collections__img' src={process.env.PUBLIC_URL + '/assets/images/viewers-pixar.png'} loading="lazy" alt='pixar logo'/>
              <video className='collections__video' autoPlay={true} loop={true} playsInline={true} muted>
                <source src={process.env.PUBLIC_URL + '/assets/videos/1564676714-pixar.mp4'} type='video/mp4' />
              </video>
              <img className='collections__mobile__background' src={process.env.PUBLIC_URL + '/assets/images/pixar-mobile.webp'} loading="lazy" alt='pixar background' />
            </div>
          </div>
          <div className='collections__box'>
            <div className='collections__logo' onClick={() => navigate('/hubs/national')}>
              <img className='collections__img' src={process.env.PUBLIC_URL + '/assets/images/viewers-national.png'} loading="lazy" alt='national geographic logo'/>
              <video className='collections__video' autoPlay={true} loop={true} playsInline={true} muted>
                <source src={process.env.PUBLIC_URL + '/assets/videos/1564676296-national-geographic.mp4'} type='video/mp4' />
              </video>
              <img className='collections__mobile__background' src={process.env.PUBLIC_URL + '/assets/images/national-mobile.webp'} loading="lazy" alt='national geographic background' />
            </div>
          </div>
        </div>
        <div className='collections__container'>
        <div className='collections__box'>
            <div className='collections__logo' onClick={() => navigate('/hubs/a24')}>
              <video className='collections__video' autoPlay={true} loop={true} playsInline={true} muted>
                <source src={process.env.PUBLIC_URL + '/assets/videos/A24.mp4'} type='video/mp4' />
              </video>
              <img className='collections__mobile__background' src={process.env.PUBLIC_URL + '/assets/images/a24-mobile.webp'} loading="lazy" alt='a24 background' />
            </div>
          </div>
          <div className='collections__box'>
            <div className='collections__logo' onClick={() => navigate('/hubs/disney')}>
              <img className='collections__img' src={process.env.PUBLIC_URL + '/assets/images/viewers-disney.png'} loading="lazy" alt='disney logo'/>
              <video className='collections__video' autoPlay={true} loop={true} playsInline={true} muted>
                <source src={process.env.PUBLIC_URL + '/assets/videos/1564674844-disney.mp4'} type='video/mp4' />
              </video>
              <img className='collections__mobile__background' src={process.env.PUBLIC_URL + '/assets/images/disney-mobile.webp'} loading="lazy" alt='disney background' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default HomeHubs;
