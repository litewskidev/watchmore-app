import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchPerson, fetchPersonList, getFetchedPerson, getFetchedPersonList } from '../../redux/peopleRedux';
import { useDispatch, useSelector } from 'react-redux';
import { image185Path, profileH632Path, profileImagePath } from '../../utils/tmdbConfig';
import { LazyLoadImage } from "react-lazy-load-image-component";
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

  console.log(personData);
  console.log(personList);


  return(
    <div className='person__container'>
      <div className='person__info'>
        {(window.matchMedia('(max-width: 1024px)').matches) ? (
          <LazyLoadImage src={profileImagePath + personData.profile_path} effect='blur' alt={personData.name}/>
        ) : (
          <LazyLoadImage src={profileH632Path + personData.profile_path} effect='blur' alt={personData.name}/>
        )}
        <h1>{personData.name}</h1>
        <p>{personData.birthday}</p>
        <p>{personData.place_of_birth}</p>
      </div>
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
  )
};

export default PersonCard;
