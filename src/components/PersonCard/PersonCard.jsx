import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchPerson, fetchPersonList, getFetchedPerson, getFetchedPersonList } from '../../redux/peopleRedux';
import { useDispatch, useSelector } from 'react-redux';
import { image185Path, profileH632Path } from '../../utils/tmdbConfig';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import Footer from '../Footer/Footer';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './PersonCard.scss';

const PersonCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const personId = params.id;

  useEffect(() => dispatch(fetchPerson(personId)), [dispatch, personId]);
  useEffect(() => dispatch(fetchPersonList(personId)), [dispatch, personId]);

  const personData = useSelector(getFetchedPerson);
  const personList = useSelector(getFetchedPersonList);

  return(
    <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0,
      transition: { delay: 0.5, duration: 0.8, ease: [0, 0.9, 0.9, 1] }
    }}
    >
      <div className='person__container'>
          {(window.matchMedia('(max-width: 1024px)').matches) ? (
            <div className='person__info'>
              <div className='person__main__border'>
                <LazyLoadImage src={image185Path + personData.profile_path} effect='blur' alt={personData.name}/>
              </div>
              <h1>{personData.name}</h1>
            </div>
          ) : (
            <div className='person__info'>
              <div className='person__main__border'>
                <LazyLoadImage src={profileH632Path + personData.profile_path} effect='blur' alt={personData.name}/>
              </div>
              <h1>{personData.name}</h1>
              <p>{personData.birthday}</p>
              <p>{personData.place_of_birth}</p>
            </div>
          )}
        <div className='person__list'>
          {(personData.known_for_department === "Directing") ? (
          personList.crew?.map(movie => (
            (movie.poster_path !== null && movie.department === "Directing" && movie.backdrop_path !== null) ? (
            <div className='person__list__poster' key={movie.id}>
              <LazyLoadImage src={image185Path + movie.poster_path} effect='blur' alt={movie.title} onClick={() => navigate(`/movie/${movie.id}`)}/>
            </div>
          ) : (null)))
          ) : (
            personList.cast?.map(movie => (
              (personData.known_for_department === "Acting" && movie.poster_path !== null && movie.backdrop_path !== null) ? (
              <div className='person__list__poster' key={movie.id}>
                <LazyLoadImage src={image185Path + movie.poster_path} effect='blur' alt={movie.title} onClick={() => navigate(`/movie/${movie.id}`)}/>
              </div>
            ) : (null)))
          )}
        </div>
      </div>
      <Footer />
    </motion.div>
  )
};

export default PersonCard;
