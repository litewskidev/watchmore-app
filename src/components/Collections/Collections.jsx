import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getFetchedCollections } from '../../redux/collectionsRedux';
import { mediumImagePath } from '../../utils/tmdbConfig';
import './Collections.scss';

const Categories = () => {
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
                <img src={mediumImagePath + collection.poster_path} alt={collection.name}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default Categories;
