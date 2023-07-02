import { useContext, useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext.js';
import { auth } from "../../firebase.js";
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
      // Loged in
      const user = userCredential.user;
      console.log(user);
      dispatch({ type: 'LOGIN', payload: user });
      navigate('/watchlist');
    })
    .catch(() => {
      setError(true);
    });

    setEmail("");
    setPassword("");
  };

  return(
    <div className='login__wrapper'>
      <h2>LOGIN</h2>
      <form className='login__form__wrapper' onSubmit={handleLogin}>
        <input type='email' value={email} placeholder='email' onChange={e => setEmail(e.target.value)}></input>
        <input type='password' value={password} placeholder='password' onChange={e => setPassword(e.target.value)}></input>
        <button type='submit'>Log In</button>
        {error && <span>Wrong email or password!</span>}
      </form>
      <p>Don't have an account yet?<Link to="/signup"> Sign Up</Link></p>
    </div>
  )
};

export default Login;
