import { arrayRemove, doc, getDoc, updateDoc } from "firebase/firestore";
import './WatchList.scss';
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { mediumImagePath } from "../../utils/tmdbConfig";
import { useNavigate } from "react-router-dom";

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

  const removeFromWatch = async (id, title, poster) => {
    try {
      await updateDoc(doc(db, "users", user.uid), {
        watchlist: arrayRemove({
          id: id,
          title: title,
          poster: poster
        })
      }, { merge: true });
    }
    catch (err) {
      console.log(err);
    };
    console.log("Movie removed from watchlist successful!");
    setData(data.watchlist.filter((item) => item.id !== id));
    getData();
  };

  return(
    <div className="watchlist">
      <h1>WATCHLIST</h1>
      <div className='watchlist__wrapper'>
      {(data.watchlist?.length > 0) ? (
        data.watchlist?.map(movie => (
            <div className='watchlist__item__container' key={movie.id}>
              <div className='remove__icon__container' onClick={e => removeFromWatch(movie.id, movie.title, movie.poster)}>
                <img src={process.env.PUBLIC_URL + '/assets/icons/delete-icon.jpg'} alt="delete icon"/>
              </div>
              <img src={mediumImagePath + movie.poster} alt={movie.title} onClick={() => navigate(`/movie/${movie.id}`)} />
            </div>
        ))
      ) : (
        <p>Your Watchlist is empty!</p>
      )}
      </div>
    </div>
  )
};

export default WatchList;
