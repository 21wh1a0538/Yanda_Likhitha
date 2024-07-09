// Search.js


import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [company, setCompany] = useState('');
  const [model, setModel] = useState('');
  const [cars, setCars] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:8000/user/search-cars', {
        params: { company, model }
      });
      setCars(response.data);
    } catch (error) {
      console.error('Error searching cars:', error);
    }
  };

  return (
    <div className="gari-background">
      <div className='gari-container'>
      <form className='gari-form'  onSubmit={handleSearch}>
        <h4>Search By:</h4>
        <br />
        <label className='gari-label'> Please Select Company name here</label>
        <select
          className="form-select form-select-lg gari-select mb-3"
          aria-label="Large select example"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        >
          <option value="">Select company name</option>
          <option value="Tata Motors">Tata Motors</option>
          <option value="Maruti Suzuki">Maruti Suzuki</option>
          <option value="Hyundai">Hyundai</option>
          <option value="Mahindra">Mahindra</option>
          <option value="Skoda">Skoda</option>
          <option value="Honda">Honda</option>
          <option value="Volkswagen">Volkswagen</option>
        </select>

        <br />
        <label className='gari-label'>Please Select your model</label>
        <select
          className="form-select form-select-lg gari-select mb-3"
          aria-label="Large select example"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        >
          <option value="">Select Model</option>
          <option value="Thar">Thar</option>
          <option value="Fronx">Fronx</option>
          <option value="Creta">Creta</option>
        </select>

        <br />
        <br />
        <button type="submit" className="btn btn-primary">Search</button>
      </form>

      <div className='gari-results'>
        <h2>Search Results</h2>
        <ul>
          {cars.map((car, index) => (
            <li key={index}>
              <img src={`http://localhost:8000${car.image}`} alt={`${car.model} by ${car.company}`} style={{ width: '200px' }} />
              <p>Model: {car.model}</p>
              <p>Company: {car.company}</p>
              <p>Year: {car.year}</p>
              <p>Price: {car.price} lakhs</p>
              <p>Type: {car.type}</p>
              <p>Engine: {car.engine}</p>
              <p>Seating Capacity: {car.seating_capacity}</p>
              <p>Mileage: {car.mileage}</p>
              <p>Description: {car.description}</p>
              <hr />
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Search;
