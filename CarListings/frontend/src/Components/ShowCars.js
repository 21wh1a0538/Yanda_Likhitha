//ShowCars.js


import React from 'react';

import Cars from './Cars';
import AdminNavBar from './AdminNavBar';


const ShowCars = () => {


  return (
    <div className='cars-display'>
      <AdminNavBar />
    <br /><br /><br/>
      <h2 style={{color:'beige',}}>Available Cars</h2>
      
      <Cars />
    </div>
  );
};

export default ShowCars;


