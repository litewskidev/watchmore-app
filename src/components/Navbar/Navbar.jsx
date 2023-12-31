import { NavLink, useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../../firebase.js';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './Navbar.scss';

const Navbar = ({ user }) => {
  const navigate = useNavigate();

  const toggleMenu = () => {
    const dropdownMenuBtn = document.querySelector('.dropdown__toggle__btn');
    const dropdownMenu = document.querySelector('#dropdown');
    dropdownMenuBtn.classList.toggle('active');
    dropdownMenu.classList.toggle('open');
  };

  const { dispatch } = useContext(AuthContext);

  const handleLogOut = (e) => {
    e.preventDefault();

    signOut(auth).then(() => {
      // Logged out
      dispatch({ type: 'LOGOUT', payload: null});
      console.log('Log-out successful!');
      navigate('/');
    }).catch(err => {
      console.log(err);
    });
  };

  /*
  const closeMenu = () => {
    const dropdownMenu = document.querySelector('#dropdown');
    const dropdownMenuBtn = document.querySelector('.dropdown__toggle__btn');
    dropdownMenu.classList.remove('open');
    dropdownMenuBtn.classList.remove('active');
  };
  */

  return(
    <div className='navbar'>
      <div className='navbar__wrapper'>
        <div className='dropdown__toggle__btn' onClick={toggleMenu}>
          <div className='hamburger__one'></div>
          <div className='hamburger__two'></div>
          <div className='hamburger__three'></div>
        </div>
        <div className='logo__font' onClick={() => navigate('/')}>
          <h1 className='navbar__logo'>watch<br />&nbsp;m<span><img src={process.env.PUBLIC_URL + '/assets/logo/4.png'} alt='film reel'/></span>re</h1>
          <h1 className='navbar__logo'>watch<br />&nbsp;m<span><img src={process.env.PUBLIC_URL + '/assets/logo/4.png'} alt='film reel'/></span>re</h1>
        </div>
        <ul className='navbar__links'>
          <li>
            <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} to='/'>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} to='/movies'>
              MOVIES
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} to='/tvseries'>
              TV SERIES
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} to='/collections'>
              COLLECTIONS
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} to='/watchlist'>
              WATCH LIST
            </NavLink>
          </li>
        </ul>
        <div className='navbar__log__search'>
          <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} to='/search'>
            <img className='navbar__search__icon__desktop' src={process.env.PUBLIC_URL + '/assets/icons/magnifying-glass-solid.svg'} alt='search icon' />
          </NavLink>
          {(user !== null ) ? (
            <div className='navbar__logged__user'>
              <button className='navbar__login__button' onClick={handleLogOut}>LOG OUT</button>
            </div>
          ) : (
            <button className='navbar__login__button' onClick={(() => navigate('/login'))}>LOG IN</button>
          )
          }
        </div>
      </div>
      <div id='navbar-pattern' className='navbar__pattern'></div>

      {/* DROPDOWN */}
      <div id='dropdown' className='navbar__dropdown'>
        <li>
          <div className='dropdown__box'>
            <NavLink className={({ isActive }) => isActive ? 'linkActive' : 'dropdown__link'} to="/">
              <img src={process.env.PUBLIC_URL + '/assets/icons/home-icon.svg'} alt='home icon' />
            </NavLink>
          </div>
        </li>
        <li>
          <div className='dropdown__box'>
              <NavLink className={({ isActive }) => isActive ? 'linkActive' : 'dropdown__link'} to="/movies">
              <img src={process.env.PUBLIC_URL + '/assets/icons/movie-icon.svg'} alt='movie icon' />
            </NavLink>
          </div>
        </li>
        <li>
          <div className='dropdown__box'>
            <NavLink className={({ isActive }) => isActive ? 'linkActive' : 'dropdown__link'} to="/tvseries">
              <img src={process.env.PUBLIC_URL + '/assets/icons/series-icon.svg'} alt='series icon' />
            </NavLink>
          </div>
        </li>
        <li>
          <div className='dropdown__box'>
            <NavLink className={({ isActive }) => isActive ? 'linkActiveCategories' : 'dropdown__categories__icon'} to="/collections">
              <img src={process.env.PUBLIC_URL + '/assets/icons/categories-icon.jpg'} alt='categories icon' />
            </NavLink>
          </div>
        </li>
        <li>
          <div className='dropdown__box'>
            <NavLink className={({ isActive }) => isActive ? 'linkActiveCategories' : ''} to="/watchlist">
              <img src={process.env.PUBLIC_URL + '/assets/icons/watchlist-icon.svg'} alt='watchlist icon' />
            </NavLink>
          </div>
        </li>
        <li>
          <div className='dropdown__box'>
            <NavLink className={({ isActive }) => isActive ? 'linkActiveSearch' : ''} to="/search">
              <img className='navbar__search__icon__mobile' src={process.env.PUBLIC_URL + '/assets/icons/magnifying-glass-solid.svg'} alt='search icon' />
            </NavLink>
          </div>
        </li>
      </div>
    </div>
  )
};

export default Navbar;
