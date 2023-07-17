import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase.js";
import { Link, useNavigate } from 'react-router-dom';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { motion } from "framer-motion";
import Footer from '../Footer/Footer.jsx';
import './Signup.scss';

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

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
        name: userName,
        watchlistMovie: [],
        watchlistTv: []
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
    <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0,
      transition: { delay: 0.5, duration: 0.8, ease: [0, 0.9, 0.9, 1] }
    }}
    >
      <div className='signup__wrapper'>
        <h2>SIGN UP</h2>
        <form className='signup__form__wrapper' onSubmit={handleSignUp}>
          <input type='email' value={email} placeholder='email' onChange={e => setEmail(e.target.value)} required></input>
          <input type='password' value={password} placeholder='password' onChange={e => setPassword(e.target.value)}
          required></input>
          <input type='text' value={userName} placeholder='name' onChange={e => setUserName(e.target.value)} required></input>
          <button type='submit'>Sign Up</button>
        </form>
        <p>Have an account?<Link to="/login"> Log In</Link></p>
      </div>
      <Footer />
    </motion.div>
  )
};

export default Signup;
