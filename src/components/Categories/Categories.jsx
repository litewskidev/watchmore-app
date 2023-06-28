import { useSelector } from 'react-redux';
import './Categories.scss';
import { useNavigate } from 'react-router';
import { getAllCollections } from '../../redux/collectionsRedux';
import { mediumImagePath } from '../../utils/tmdbConfig';

const Categories = () => {
  const navigate = useNavigate();

  const collections = useSelector(getAllCollections);

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
                <img src={mediumImagePath + collection.poster_path}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default Categories;
