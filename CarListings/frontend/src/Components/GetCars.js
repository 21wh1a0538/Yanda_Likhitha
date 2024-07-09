//GetCars.js


import React from 'react';
import Cars from './Cars';
import UserNavBar from './UserNavBar';

const GetCars = () => {
  return (
    <div className='cars-display'>
     < UserNavBar />
     <br /><br /><br/>
     <h2 style={{color:'beige',}}>Available Cars</h2>
      <Cars />
    </div>
  );
};

export default GetCars;


