import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getFetchedCollections } from '../../redux/collectionsRedux.js';
import { mediumImagePath } from '../../utils/tmdbConfig.js';
import './HomeCollections.scss';

const HomeCollections = () => {
  const navigate = useNavigate();

  const collections = useSelector(getFetchedCollections);

  return(
    <div className='collections'>
      <div className='collections__main__title' onClick={() =>navigate(`/collections`)}>
        <h1>COLLECTIONS</h1>
        <h1>COLLECTIONS</h1>
      </div>
      <div className='collections__wrapper'>
        <div className='home__collections__container'>
          {collections?.slice(0, 6).map(collection => (
            <div className='home__collections__box' key={collection.id}>
              <div className='home__collections__poster' onClick={() => navigate(`/collection/${collection.id}`)}>
                <img src={mediumImagePath + collection.poster_path} loading="lazy" alt={collection.name}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default HomeCollections;
