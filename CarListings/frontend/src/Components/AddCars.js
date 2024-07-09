//AddCars.js


import React, { useState } from 'react';
import axios from 'axios';
import AdminNavBar from './AdminNavBar';

const AddCars = () => {
  const [image, setImage] = useState(null);
  const [model, setModel] = useState('');
  const [company, setCompany] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [engine, setEngine] = useState('');
  const [seatingCapacity, setSeatingCapacity] = useState('');
  const [mileage, setMileage] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('model', model);
    formData.append('company', company);
    formData.append('year', year);
    formData.append('price', price);
    formData.append('type', type);
    formData.append('engine', engine);
    formData.append('seating_capacity', seatingCapacity);
    formData.append('mileage', mileage);
    formData.append('description', description);

    try {
      const response = await axios.post('http://localhost:8000/admin/add-car', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setStatus(response.data.message);
    } catch (error) {
      console.error('Error adding car:', error);
      setStatus('Failed to add car');
    }
  };

  return (
    < >
      <AdminNavBar />
    <div className="stellar-background">
    
      <form className="cosmic-form" onSubmit={handleSubmit}>
        <br/><br/>
        <h2 className="cosmic-form-title">Car Details Form</h2>
        <br/><br/>
        <label className="cosmic-form-label">
          Car Image: <input type="file" name="image" accept="image/*" className="cosmic-form-input" onChange={(e) => setImage(e.target.files[0])} required />
        </label>

        <label className="cosmic-form-label">
          Model: <input type="text" name="model" className="cosmic-form-input" value={model} onChange={(e) => setModel(e.target.value)} required />
        </label>

        <label className="cosmic-form-label">
          Company Name: <input type="text" name="company" className="cosmic-form-input" value={company} onChange={(e) => setCompany(e.target.value)} required />
        </label>

        <label className="cosmic-form-label">
          Year: <input type="number" name="year" className="cosmic-form-input" value={year} onChange={(e) => setYear(e.target.value)} required />
        </label>

        <label className="cosmic-form-label">
          Price (in lakhs): <input type="number" name="price" className="cosmic-form-input" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </label>

        <label className="cosmic-form-label">
          Car Type:
          <div className="cosmic-form-radio-group">
            <label className="cosmic-form-radio-label">
              <input type="radio" name="type" value="new" className="cosmic-form-radio-input" onChange={(e) => setType(e.target.value)} required />
              New
            </label>
            <label className="cosmic-form-radio-label">
              <input type="radio" name="type" value="used" className="cosmic-form-radio-input" onChange={(e) => setType(e.target.value)} required />
              Used
            </label>
          </div>
        </label>

        <label className="cosmic-form-label">
          Engine:  <input type="text" name="engine" className="cosmic-form-input" value={engine} onChange={(e) => setEngine(e.target.value)} required />
        </label>
 
        <label className="cosmic-form-label">
          Seating Capacity:  <input type="number" name="seating_capacity" className="cosmic-form-input" value={seatingCapacity} onChange={(e) => setSeatingCapacity(e.target.value)} required />
        </label>

        <label className="cosmic-form-label">
          Mileage:  <input type="text" name="mileage" className="cosmic-form-input" value={mileage} onChange={(e) => setMileage(e.target.value)} required />
        </label>

        <label className="cosmic-form-label">
          Description:
          <textarea name="description" className="cosmic-form-textarea" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        </label>

        <button type="submit" className="cosmic-form-button">Submit</button>
        {status && <p className="mt-3">{status}</p>}
      </form>
      </div>
    </>
  );
};

export default AddCars;


