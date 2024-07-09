//AdminNavBar.js


import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminNavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" >
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/admin">
              AdminDashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/addcars">
              AddCars
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/showcars">
              GetCars
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/messages">
              Messages
            </a>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-link nav-link"
              onClick={() => navigate('/home')}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminNavBar;
