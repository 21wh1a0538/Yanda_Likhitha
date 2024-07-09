/* Navbar.js */


import React from 'react';

export default function Navbar(props) {
  return (
    <>
      
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="dark">
        <div className="container-fluid">
          <span className="navbar-brand">CarHub</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">AboutUs</a>
              </li>
               
              {/* <li className="nav-item">
                <a className="nav-link" href="/contact">ContactUs</a>
              </li> */}
            </ul>
            <div className="d-flex">
              <a className="btn btn-outline-primary me-2" href="/register">Register</a>
              <a className="btn btn-outline-success" href="/login">Login</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}


