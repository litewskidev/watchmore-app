import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getFetchedCollections } from '../../redux/collectionsRedux.js';
import { image185Path, mediumImagePath } from '../../utils/tmdbConfig.js';
import './Collections.scss';

const Collections = () => {
  const navigate = useNavigate();

  const collections = useSelector(getFetchedCollections);

  return(
    <div className='categories'>
      <div className='categories__main__title'>
        <h1>COLLECTIONS</h1>
        <h1>COLLECTIONS</h1>
      </div>
      <div className='categories__wrapper'>
        <div className='categories__container'>
          {collections?.map(collection => (
            <div className='categories__box' key={collection.id}>
              <div className='categories__poster' onClick={() => navigate(`/collection/${collection.id}`)}>
                <img src={image185Path + collection.poster_path} loading="lazy" alt={collection.name}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default Collections;
