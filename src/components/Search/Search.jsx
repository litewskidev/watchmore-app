import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchMulti, getSearchedMulti } from '../../redux/searchRedux.js';
import { getSearch, updateSearchString } from '../../redux/searchStringRedux.js';
import { image185Path, mediumImagePath, miniImagePath } from '../../utils/tmdbConfig.js';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Search.scss';

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const searchString = useSelector(getSearch);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchString(search));
    setSearch('');
  };

  const increment = (e) => {
    e.preventDefault();
    setPage(page + 1);
  };

  const decrement = (e) => {
    e.preventDefault();
    if(page >= 2) {
      setPage(page - 1);
    }
  };

  useEffect(() => dispatch(fetchSearchMulti(searchString, page)), [dispatch, searchString, page]);
  const searchResults = useSelector(getSearchedMulti);

  return(
    <div className='search__wrapper'>
      <div className='search__form__container'>
        <form className='search__form' onSubmit={handleSubmit}>
        <button className='search__button'><img src={process.env.PUBLIC_URL + '/assets/icons/magnifying-glass-solid.svg'} alt='search icon'/></button>
          <input className='search__input' placeholder={searchString} value={search} onChange={e => setSearch(e.target.value)} type='text'/>
        </form>
      </div>
      <div className='search__results__container'>
        {searchResults.results?.map(result => (
          (result.poster_path !== null && result.media_type !== 'person' && result.backdrop_path !== null) ? (
          <div className='search__result__item' key={result.id}>
            {(window.matchMedia('(max-width: 1024px)').matches) ? (
              <LazyLoadImage src={miniImagePath + result.poster_path} effect='blur' alt='poster' onClick={() => navigate(`/${result.media_type}/${result.id}`)}/>
            ) : (
              <LazyLoadImage src={image185Path + result.poster_path} effect='blur' alt='poster' onClick={() => navigate(`/${result.media_type}/${result.id}`)}/>
            )}
          </div>) : (null)
        ))}
      </div>
      <div className='search__page__input'>
        <div onClick={decrement}>-</div>
        <div>{page}</div>
        <div onClick={increment}>+</div>
      </div>
    </div>
  )
};

export default Search;
