//Messages


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavBar from './AdminNavBar';

const Messages = () => {
  const [messages, setMessages] = useState([]);
 
  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:8000/admin/messages');
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  return (
    <div className="messages">
      <AdminNavBar />
      <div className="messages-container">
        <h2 style={{color:'beige',}}>Messages</h2>
        <ul className="list-group">
          {messages.map((message, index) => (
            <li key={index} className="list-group-item">
              <h5 className="mb-1">Name: {message.name}</h5>
              <p className="mb-1">Email: {message.email}</p>
              <p className="mb-1">Message: {message.message}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Messages;


