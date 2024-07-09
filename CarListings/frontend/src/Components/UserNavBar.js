//UserNavBar.js


import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserNavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/home');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
     {/*  <span className="navbar-brand">UserDashboard</span> */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
        <li className="nav-item"><a className="nav-link" href="/user">UserDashboard</a> </li>
          <li className="nav-item">
            <a className="nav-link" href="/getcars">GetCars</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">ContactUs</a>
          </li>
          <li className="nav-item">
            <button className="btn btn-link nav-link" onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default UserNavBar;
