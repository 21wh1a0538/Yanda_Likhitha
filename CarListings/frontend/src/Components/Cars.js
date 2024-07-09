//Cars.js


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await axios.get('http://localhost:8000/user/cars');
      setCars(response.data);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  return (
    <div>
      <br /><br />
      <h6 align="center"><b>Welcome to CarHub!</b></h6>
      <h6 align="center">Find your dream car here</h6>
      <br /><br />

      <div className="cards-container d-flex flex-wrap justify-content-around">
        {cars.map(car => (
          <div key={car._id} className="card m-2" style={{ width: '18rem' }}>
            <img src={`http://localhost:8000${car.image}`} className="card-img-top" alt={`${car.model} by ${car.company}`} />
            <div className="card-body">
              <p className="card-text"><b>{car.company}</b></p>
              <Link to={`/car/${car._id}`} className="btn btn-primary">More info</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
