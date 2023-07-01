import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCollection, getFetchedCollection } from '../../redux/specificRedux.js';
import { mediumImagePath } from '../../utils/tmdbConfig.js';
import './CollectionCard.scss';

const CollectionCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const collectionId = params.id;

  useEffect(() => dispatch(fetchCollection(collectionId)), [dispatch, collectionId]);
  const collection = useSelector(getFetchedCollection);

  return(
    <div className='collection__card__wrapper'>
      <div className='collection__card__title'>
        <h1>{collection.name}</h1>
      </div>
      <div className='collection__card__overview'>
        <p>{collection.overview}</p>
      </div>
      <div className='collection__card__container'>
        {collection.parts?.map(part => (
          (part.backdrop_path !== null) ? (
          <div className='collection__card__box' key={part.id}>
            <div className='collection__card__poster'>
              <img src={mediumImagePath + part.poster_path} onClick={() => navigate(`/movie/${part.id}`)} alt={part.title}/>
            </div>
          </div>
          ) : (null)
        ))}
      </div>
    </div>
  )
};

export default CollectionCard;
