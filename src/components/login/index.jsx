import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './index.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login Successfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="heading">Login Form</h2>
        <label htmlFor='email' className="label" style={{paddingLeft:"22px"}}>
          Email:
          <input 
            type="text" 
            onChange={(e) => setEmail(e.target.value)} 
            className="input"
          />
        </label>
        <label htmlFor='password' className="label">
          Password:
          <input 
            type="password" 
            onChange={(e) => setPassword(e.target.value)} 
            className="input"
          />
        </label>
        <button type="submit" className="button">SignIn</button>
        <p style={{color:"black"}}>
          Don't have an account? <Link to="/signup" style={{ color: '#4CAF50', textDecoration: 'none' }}>Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
