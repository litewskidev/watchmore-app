import { useContext, useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext.js';
import { auth } from "../../firebase.js";
import { motion } from "framer-motion";
import Footer from '../Footer/Footer.jsx';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //  Logged in
      const user = userCredential.user;
      console.log('Log-in successful!');
      dispatch({ type: 'LOGIN', payload: user });
      navigate('/');
    })
    .catch(() => {
      setError(true);
    });

    setEmail("");
    setPassword("");
  };

  return(
    <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0,
      transition: { delay: 0.5, duration: 0.8, ease: [0, 0.9, 0.9, 1] }
    }}
    >
      <div className='login__wrapper'>
        <h2>LOG IN</h2>
        <form className='login__form__wrapper' onSubmit={handleLogin}>
          <input type='email' value={email} placeholder='email' onChange={e => setEmail(e.target.value)} required></input>
          <input type='password' value={password} placeholder='password' onChange={e => setPassword(e.target.value)} required></input>
          <button type='submit'>Log In</button>
          {error && <span>Wrong email or password!</span>}
        </form>
        <p>Don't have an account yet?<Link to="/signup"> Sign Up</Link></p>
      </div>
      <Footer />
    </motion.div>
  )
};

export default Login;
