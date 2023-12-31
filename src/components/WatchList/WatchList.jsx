import { arrayRemove, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { image185Path, mediumImagePath } from "../../utils/tmdbConfig";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
import 'react-lazy-load-image-component/src/effects/blur.css';
import './WatchList.scss';

const WatchList = ({ user }) => {
  const navigate = useNavigate();

  const [data, setData] = useState({});

  const getData = async () => {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    const watchlist = docSnap.data();
    setData(watchlist);
  };

  useEffect(() => {
    getData()
  }, []);

  const removeMovieFromWatch = async (id, title, poster) => {
    try {
      await updateDoc(doc(db, "users", user.uid), {
        watchlistMovie: arrayRemove({
          id: id,
          title: title,
          poster: poster
        })
      }, { merge: true });
    }
    catch (err) {
      console.log(err);
    };
    console.log("Movie removed from watchlist successfully!");
    setData(data.watchlistMovie.filter((item) => item.id !== id));
    getData();
  };

  const removeTvFromWatch = async (id, title, poster) => {
    try {
      await updateDoc(doc(db, "users", user.uid), {
        watchlistTv: arrayRemove({
          id: id,
          title: title,
          poster: poster
        })
      }, { merge: true });
    }
    catch (err) {
      console.log(err);
    };
    console.log("Show removed from watchlist successfully!");
    setData(data.watchlistTv.filter((item) => item.id !== id));
    getData();
  };

  return(
    <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0,
      transition: { delay: 0.5, duration: 0.8, ease: [0, 0.9, 0.9, 1] }
    }}
    >
      <div className="watchlist">
        <div className="watchlist__main__title">
          <h1>WATCH LIST</h1>
          <h1>WATCH LIST</h1>
        </div>
        <div className='watchlist__wrapper'>
          <h2>MOVIES</h2>
          <div className="watchlist__movies__container">
            {(data.watchlistMovie?.length > 0) ? (
              data.watchlistMovie?.map(movie => (
                  <div className='watchlist__item__container' key={movie.id}>
                    <div className='remove__icon__container' onClick={e => removeMovieFromWatch(movie.id, movie.title, movie.poster)}>
                      <LazyLoadImage className="lazy__delete__icon" src={process.env.PUBLIC_URL + '/assets/icons/delete-icon.jpg'} effect='blur' alt="delete icon"/>
                    </div>
                    {(window.matchMedia('(max-width: 1024px)').matches) ? (
                      <LazyLoadImage src={mediumImagePath + movie.poster} effect='blur' alt={movie.title} onClick={() => navigate(`/movie/${movie.id}`)} />
                    ) : (
                      <LazyLoadImage src={image185Path + movie.poster} effect='blur' alt={movie.title} onClick={() => navigate(`/movie/${movie.id}`)} />
                    )}
                  </div>
              ))
            ) : (
              <p>Your Movies Watch List is Empty!</p>
            )}
          </div>
          <h2>TV SERIES</h2>
          <div className="watchlist__tvseries__container">
            {(data.watchlistTv?.length > 0) ? (
              data.watchlistTv?.map(tv => (
                  <div className='watchlist__item__container' key={tv.id}>
                    <div className='remove__icon__container' onClick={e => removeTvFromWatch(tv.id, tv.title, tv.poster)}>
                      <LazyLoadImage className="lazy__delete__icon" src={process.env.PUBLIC_URL + '/assets/icons/delete-icon.jpg'} effect='blur' alt="delete icon"/>
                    </div>
                    {(window.matchMedia('(max-width: 1024px)').matches) ? (
                      <LazyLoadImage src={mediumImagePath + tv.poster} effect='blur' alt={tv.title} onClick={() => navigate(`/movie/${tv.id}`)} />
                    ) : (
                      <LazyLoadImage src={image185Path + tv.poster} effect='blur' alt={tv.title} onClick={() => navigate(`/movie/${tv.id}`)} />
                    )}
                  </div>
              ))
            ) : (
              <p>Your TV Series Watch lList is Empty!</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  )
};

export default WatchList;
