import { useParams } from 'react-router';
import './CollectionCard.scss';

const CollectionCard = () => {
  const params = useParams();
  const collectionId = params.id;

  return(
    <div className='collection__wrapper'>
      <h1>{collectionId}</h1>
    </div>
  )
};

export default CollectionCard;
