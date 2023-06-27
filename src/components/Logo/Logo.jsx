import { useNavigate } from 'react-router';
import './Logo.scss';

const Logo = () => {
  const navigate = useNavigate();

  return(
    <div className='logo__font' onClick={() => navigate('/')}>
      <h1 className='navbar__logo'>watch<br />&nbsp;m<span><img src={process.env.PUBLIC_URL + '/assets/logo/4.png'} alt='film reel'/></span>re</h1>
      <h1 className='navbar__logo'>watch<br />&nbsp;m<span><img src={process.env.PUBLIC_URL + '/assets/logo/4.png'} alt='film reel'/></span>re</h1>
    </div>
  )
};

export default Logo;
