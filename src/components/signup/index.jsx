import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './index.css';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Account Created");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="heading">Signup Form</h2>
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
        <button type="submit" className="button">Signup</button>
        <p style={{color:"black"}}>
          Already registered? <Link to="/login" className="link">Log in</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
