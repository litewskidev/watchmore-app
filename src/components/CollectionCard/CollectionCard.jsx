import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCollection, getFetchedCollection } from '../../redux/specificRedux.js';
import { image185Path, image342Path } from '../../utils/tmdbConfig.js';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import Footer from '../Footer/Footer.jsx';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './CollectionCard.scss';

const CollectionCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const collectionId = params.id;

  useEffect(() => dispatch(fetchCollection(collectionId)), [dispatch, collectionId]);
  const collection = useSelector(getFetchedCollection);

  return(
    <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0,
      transition: { delay: 0.5, duration: 0.8, ease: [0, 0.9, 0.9, 1] }
    }}
    >
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
                {(window.matchMedia('(max-width: 1024px)').matches) ? (
                  <LazyLoadImage src={image185Path + part.poster_path} effect='blur' onClick={() => navigate(`/movie/${part.id}`)} alt={part.title}/>
                ) : (
                  <LazyLoadImage src={image342Path + part.poster_path} effect='blur' onClick={() => navigate(`/movie/${part.id}`)} alt={part.title}/>
                )}
              </div>
            </div>
            ) : (null)
          ))}
        </div>
      </div>
      <Footer />
    </motion.div>
  )
};

export default CollectionCard;
