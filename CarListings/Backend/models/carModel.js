//models/carModel.js


const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    enum: ['new', 'used'],
    required: true
  },
  engine: {
    type: String,
    required: true
  },
  seating_capacity: {
    type: Number,
    required: true
  },
  mileage: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
