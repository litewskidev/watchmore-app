import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const navigate = useNavigate();

  const toggleMenu = () => {
    const dropdownMenuBtn = document.querySelector('.dropdown__toggle__btn');
    const dropdownMenu = document.querySelector('#dropdown');
    dropdownMenuBtn.classList.toggle('active');
    dropdownMenu.classList.toggle('open');
  };

  const closeMenu = () => {
    const dropdownMenu = document.querySelector('#dropdown');
    const dropdownMenuBtn = document.querySelector('.dropdown__toggle__btn');
    dropdownMenu.classList.remove('open');
    dropdownMenuBtn.classList.remove('active');
  };

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
            <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} to='/categories'>
              CATEGORIES
            </NavLink>
          </li>
        </ul>
        <div className='navbar__log__search'>
          <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} to='/search'>
            <img className='navbar__search__icon__desktop' src={process.env.PUBLIC_URL + '/assets/icons/magnifying-glass-solid.svg'} alt='search icon' />
          </NavLink>
          <button className='navbar__login__button'>LOG IN</button>
        </div>
      </div>
      <div className='navbar__pattern'></div>

      {/* DROPDOWN */}
      <div id='dropdown' className='navbar__dropdown'>
        <li>
          <div className='dropdown__box'>
            <NavLink className={({ isActive }) => isActive ? 'linkActive' : 'dropdown__link'} to="/" onClick={closeMenu}>
              <img src={process.env.PUBLIC_URL + '/assets/icons/home-icon.svg'} />
            </NavLink>
          </div>
        </li>
        <li>
          <div className='dropdown__box'>
              <NavLink className={({ isActive }) => isActive ? 'linkActive' : 'dropdown__link'} to="/movies" onClick={closeMenu}>
              <img src={process.env.PUBLIC_URL + '/assets/icons/movie-icon.svg'} />
            </NavLink>
          </div>
        </li>
        <li>
          <div className='dropdown__box'>
            <NavLink className={({ isActive }) => isActive ? 'linkActive' : 'dropdown__link'} to="/tvseries" onClick={closeMenu}>
              <img src={process.env.PUBLIC_URL + '/assets/icons/series-icon.svg'} />
            </NavLink>
          </div>
        </li>
        <li>
          <div className='dropdown__box'>
            <NavLink className={({ isActive }) => isActive ? 'linkActiveCategories' : 'dropdown__categories__icon'} to="/categories" onClick={closeMenu}>
              <img src={process.env.PUBLIC_URL + '/assets/icons/categories-icon.jpg'} />
            </NavLink>
          </div>
        </li>
        <li>
          <div className='dropdown__box'>
          <NavLink className={({ isActive }) => isActive ? 'linkActiveSearch' : ''} to="/search" onClick={closeMenu}>
              <img className='navbar__search__icon__mobile' src={process.env.PUBLIC_URL + '/assets/icons/magnifying-glass-solid.svg'} alt='search icon' />
            </NavLink>
          </div>
        </li>
      </div>
    </div>
  )
};

export default Navbar;
