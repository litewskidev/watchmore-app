import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.js";
import { Link, useNavigate } from 'react-router-dom';
import './Signup.scss';

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user);
      navigate("/login");
    })
    .catch((err) => {
      console.log(err);
    });

    setEmail("");
    setPassword("");
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
