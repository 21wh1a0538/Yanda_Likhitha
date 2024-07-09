/* Home.js */


import React from 'react';
import Navbar from './Navbar';
import Corosol from './Corosol';
/* import Search from './Search'; */
import Cars from './Cars';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const welcomeMessage = location.state ? `Hello " ${location.state.id} " , Welcome to the Home` : '';
  return (
    <div>
      <Navbar />
      {welcomeMessage && (
        <h1>
          <br /><br /> <i>{welcomeMessage}</i>
        </h1>
      )}
      <br /><br />
      <Corosol/>
      {/* <Search /> */}  
      <Cars /> 
      <br/><br/><br/><br/>
      <Footer/>
    </div>
  );
};

export default Home;


