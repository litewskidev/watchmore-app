import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase.js";
import { Link, useNavigate } from 'react-router-dom';
import './Signup.scss';
import { addDoc, doc, setDoc, collection, serverTimestamp } from 'firebase/firestore';

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState({});

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await setDoc(doc(db, "users", res.user.uid), {
        email: email,
        password: password,
        timeStamp: serverTimestamp(),
        watchlist: []
      }, { merge: true });
    }
    catch (err) {
      console.log(err);
    };

    console.log("Sign-up successful!");
    setEmail("");
    setPassword("");
    navigate("/login");
  };

  return(
    <div className='signup__wrapper'>
      <h2>SIGN UP</h2>
      <form className='signup__form__wrapper' onSubmit={handleSignUp}>
        <input type='email' value={email} placeholder='email' onChange={e => setEmail(e.target.value)}></input>
        <input type='password' value={password} placeholder='password' onChange={e => setPassword(e.target.value)}></input>
        <button type='submit'>Sign Up</button>
      </form>
      <p>Have an account?<Link to="/login"> Log In</Link></p>
    </div>
  )
};

export default Signup;
