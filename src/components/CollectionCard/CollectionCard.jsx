import { useNavigate, useParams } from 'react-router';
import './CollectionCard.scss';
import Logo from '../Logo/Logo';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCollection, getFetchedCollection } from '../../redux/specificRedux';
import { mediumImagePath } from '../../utils/tmdbConfig';

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
        <h1>{collection.name}</h1>
      </div>
      <div className='collection__card__container'>
        {collection.parts?.map(part => (
          <div className='collection__card__box' key={part.id}>
            <div className='collection__card__poster'>
              <img src={mediumImagePath + part.poster_path} onClick={() => navigate(`/movie/${part.id}`)}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default CollectionCard;
