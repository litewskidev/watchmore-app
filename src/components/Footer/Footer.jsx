import './Footer.scss';

const Footer = () => {
  return(
    <div className='footer__container'>
      <img className='tmdb__logo' src={process.env.PUBLIC_URL + '/assets/tmdb/blue-short.svg'} loading="lazy" alt='tmdb logo'/>
      <p className='footer__desc'>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
    </div>
  )
};

export default Footer;
