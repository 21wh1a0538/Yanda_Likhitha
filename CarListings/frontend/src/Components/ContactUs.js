//contactUs.js


import React, { useState } from 'react';
import axios from 'axios';
import UserNavBar from './UserNavBar';




const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/user/contact', { name, email, message }); 
      setStatus(response.data.message);
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Failed to send message');
    }
  };
  
  return (
    <>
    
      <UserNavBar/>
     
      <div className="vasu-page-container">
        <form className="vasu-form-wrapper" onSubmit={handleSubmit}>
          <h2 className="vasu-form-title">Contact Us</h2>
          <div className="vasu-input-group">
            <label htmlFor="name" className="vasu-input-label" >Name</label>
            <input 
              type="text" 
              name="name" 
              className="vasu-input-control"
              id="name" 
              required 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="vasu-input-group">
            <label htmlFor="email" className="vasu-input-label" >Email Address</label>
            <input 
              type="email" 
              name="email" 
              className="vasu-input-control" 
              id="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="vasu-input-group">
            <label  className="vasu-input-label" htmlFor="message">Message</label>
            <textarea 
              name="message" 
              className="vasu-input-control" 
              id="message" 
              rows="7" 
              required 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="vasu-submit-btn">Send Message</button>
          {status && <p className="mt-3">{status}</p>}
        </form>
      </div>
    </>
  );
}

export default ContactUs;



