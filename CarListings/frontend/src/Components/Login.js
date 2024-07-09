/* Login.js */


import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/user/login', {
        email, password
      });

      if (response.data.status === 'exist') {
        if (response.data.role === 'admin') {
          navigate('/admin', { state: { id: response.data.username } });
        } else {
          navigate('/user', { state: { id: response.data.username } });
        }
      } else if (response.data === 'notexist') {
        alert('User did not sign up or wrong password');
      } else {
        alert('Unexpected response from server');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Error during login. Please try again.');
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
              <h2 className="login-form-title">Login</h2>
              <div className="login-form-group">
                <label htmlFor="login-email" className="login-form-label">Email:</label>
                <input type="email" className="login-form-input" id="login-email" required onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="login-form-group">
                <label htmlFor="login-password" className="login-form-label">Password:</label>
                <input type="password" className="login-form-input" id="login-password" required onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button type="submit" className="login-submit-btn">Sign In</button>
              <p className="login-register-link">
                Don't Have An Account? <a href="/register">Register Here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

 
 