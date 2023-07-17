import { motion } from "framer-motion";
import './Footer.scss';

const Footer = () => {
  return(
    <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0,
      transition: { delay: 0.5, duration: 0.8, ease: [0, 0.9, 0.9, 1] }
    }}
    >
      <div className='footer__container'>
        <a href='https://www.themoviedb.org/'><img className='tmdb__logo' src={process.env.PUBLIC_URL + '/assets/tmdb/blue-short.svg'} alt='tmdb logo'/></a>
        <p className='footer__desc'>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
      </div>
    </motion.div>
  )
};

export default Footer;
