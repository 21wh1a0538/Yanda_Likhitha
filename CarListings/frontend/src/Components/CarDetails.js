//CarDetails.js




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCarById = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/user/car/${id}`);
        setCar(response.data);
      } catch (error) {
        console.error('Error fetching car details:', error);
      }
    };
    fetchCarById();
  }, [id]);

  const handleCompare = () => {
    const storedCar1 = JSON.parse(localStorage.getItem('compareCar'));
    const storedCar2 = JSON.parse(localStorage.getItem('compareCar2'));

    if (storedCar1 && storedCar2) {
      if (window.confirm('You can only compare two cars at a time. Do you want to reset your comparison list?')) {
        localStorage.removeItem('compareCar');
        localStorage.removeItem('compareCar2');
        localStorage.setItem('compareCar', JSON.stringify(car));
        alert('Car added for comparison. Now select another car to compare.');
      }
    } else if (!storedCar1) {
      localStorage.setItem('compareCar', JSON.stringify(car));
      alert('Car added for comparison. Now select another car to compare.');
    } else {
      localStorage.setItem('compareCar2', JSON.stringify(car));
      navigate('/compare');
    }
  };

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <br /><br />
      <div className="car-details-container">
        <img src={`http://localhost:8000${car.image}`} alt={`${car.model} by ${car.company}`} className="car-image" />
        <div className="car-info">
          <h2>{car.company} {car.model}</h2>
          <p><strong>Model:</strong> {car.model}</p>
          <p><strong>Company:</strong> {car.company}</p>
          <p><strong>Year:</strong> {car.year}</p>
          <p><strong>Price:</strong> {car.price} lakhs</p>
          <p><strong>Type:</strong> {car.type}</p>
          <p><strong>Engine:</strong> {car.engine}</p>
          <p><strong>Seating Capacity:</strong> {car.seating_capacity}</p>
          <p><strong>Mileage:</strong> {car.mileage}</p>
          <p><strong>Description:</strong> {car.description}</p>
          <button onClick={() => navigate(-1)} className="btn btn-secondary mt-3" style={{ width: '150px' }}>Back</button>
          <button onClick={handleCompare} className="btn btn-primary mx-3 mt-3" style={{ width: '150px' }}>Compare</button>
        </div>
      </div>
    </>
  );
};

export default CarDetails;



