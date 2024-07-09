// Register.js


import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState(''); 

  async function submit(e) {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/user/register', {
        email, password, username 
      })
        .then(res => {
          if (res.data === 'exist') {
            alert('User already exists');
          } else if (res.data === 'notexist') {
            navigate('/home', { state: { id: username } });
          }
        })
        .catch(e => {
          alert('wrong details');
          console.log('Registration error:', e); 
        });
    } catch (e) {
      console.log('Error in try-catch:', e); 
    }
  }

  return (
    <>
      <Navbar />
      <div className="login-wrapper">
        <div className="login-page">
          <div className="login-image-container">
            <img src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsYWNrJTIwY2FyfGVufDB8fDB8fHww" alt="Car" className="loginlikhi-car-image" />
          </div>
          <div className="login-form-container">
            <form className="login-form" onSubmit={submit}>
              <h2 className="login-form-title">Register</h2>
              <div className="login-form-group">
                <label htmlFor="register-username" className="login-form-label">Username:</label>
                <input type="text" className="login-form-input" id="register-username" required onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="login-form-group">
                <label htmlFor="register-email" className="login-form-label">Email:</label>
                <input type="email" className="login-form-input" id="register-email" required onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="login-form-group">
                <label htmlFor="register-password" className="login-form-label">Password:</label>
                <input type="password" className="login-form-input" id="register-password" required onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button type="submit" className="login-submit-btn">Sign Up</button>
              <p className="login-register-link">
                Already Registered? <a href="/login">Login Here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
