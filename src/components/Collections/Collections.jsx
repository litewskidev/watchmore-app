import './Collections.scss';

const Collections = () => {
  return(
    <div className='collections__wrapper'>
      <div className='collections__box'>
        <div className='collections__logo'>
          <img className='collections__img' src={process.env.PUBLIC_URL + '/assets/images/viewers-marvel.png'}/>
          <video className='collections__video' autoPlay={true} loop={true} playsInline={true} muted>
            <source src={process.env.PUBLIC_URL + '/assets/videos/1564676115-marvel.mp4'} type='video/mp4' />
          </video>
        </div>
      </div>
      <div className='collections__box'>
        <div className='collections__logo'>
          <img className='collections__img' src={process.env.PUBLIC_URL + '/assets/images/viewers-starwars.png'}/>
          <video className='collections__video' autoPlay={true} loop={true} playsInline={true} muted>
            <source src={process.env.PUBLIC_URL + '/assets/videos/1608229455-star-wars.mp4'} type='video/mp4' />
          </video>
        </div>
      </div>
      <div className='collections__box'>
        <div className='collections__logo'>
          <img className='collections__img' src={process.env.PUBLIC_URL + '/assets/images/viewers-pixar.png'}/>
          <video className='collections__video' autoPlay={true} loop={true} playsInline={true} muted>
            <source src={process.env.PUBLIC_URL + '/assets/videos/1564676714-pixar.mp4'} type='video/mp4' />
          </video>
        </div>
      </div>
    </div>
  )
};

export default Collections;
