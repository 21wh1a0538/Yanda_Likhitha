//Compare.js



import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Compare = () => {
  const [car1, setCar1] = useState(null);
  const [car2, setCar2] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCar1 = JSON.parse(localStorage.getItem('compareCar'));
    const storedCar2 = JSON.parse(localStorage.getItem('compareCar2'));

    setCar1(storedCar1);
    setCar2(storedCar2);
  }, []);

  if (!car1 || !car2) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="compare-container">
        <div className="car-details">
          <h2>{car1.company} {car1.model}</h2>
          <img src={`http://localhost:8000${car1.image}`} alt={`${car1.model} by ${car1.company}`} />
          <p><strong>Model:</strong> {car1.model}</p>
          <p><strong>Company:</strong> {car1.company}</p>
          <p><strong>Year:</strong> {car1.year}</p>
          <p><strong>Price:</strong> {car1.price} lakhs</p>
          <p><strong>Type:</strong> {car1.type}</p>
          <p><strong>Engine:</strong> {car1.engine}</p>
          <p><strong>Seating Capacity:</strong> {car1.seating_capacity}</p>
          <p><strong>Mileage:</strong> {car1.mileage}</p>
          <p><strong>Description:</strong> {car1.description}</p>
        </div>
        <div className="car-details">
          <h2>{car2.company} {car2.model}</h2>
          <img src={`http://localhost:8000${car2.image}`} alt={`${car2.model} by ${car2.company}`} />
          <p><strong>Model:</strong> {car2.model}</p>
          <p><strong>Company:</strong> {car2.company}</p>
          <p><strong>Year:</strong> {car2.year}</p>
          <p><strong>Price:</strong> {car2.price} lakhs</p>
          <p><strong>Type:</strong> {car2.type}</p>
          <p><strong>Engine:</strong> {car2.engine}</p>
          <p><strong>Seating Capacity:</strong> {car2.seating_capacity}</p>
          <p><strong>Mileage:</strong> {car2.mileage}</p>
          <p><strong>Description:</strong> {car2.description}</p>
        </div>
      </div>
      <button onClick={() => navigate(-1)} className="btn btn-secondary mt-3" style={{ width: '200px', marginLeft: '45%' }}>Back</button>
    </>
  );
};

export default Compare;




