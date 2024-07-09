//controllers/userController.js


const User = require('../models/userModel');
const Message = require('../models/messageModel'); 
const bcrypt = require('bcryptjs');
const Car = require('../models/carModel');

const getCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    console.error('Error fetching cars:', error);
    res.status(500).json({ message: 'Failed to fetch cars' });
  }
};

const searchCars = async (req, res) => {
  const { company, model } = req.query;
  try {
    const query = {};
    if (company) query.company = company;
    if (model) query.model = model;

    const cars = await Car.find(query);
    res.status(200).json(cars);
  } catch (error) {
    console.error('Error searching cars:', error);
    res.status(500).json({ message: 'Failed to search cars' });
  }
};

const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.json('notexist');
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (isValidPassword) {
      res.json({ status: 'exist', username: user.username, role: user.role });
    } else {
      res.json('notexist');
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.json('notexist');
  }
};

const registerController = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    const check = await User.findOne({ email: email });
    if (check) {
      res.json('exist');
    } else {
      const newUser = new User({
        email: email,
        password: password,
        username: username,
        role: 'user'
      });
      await newUser.save();
      res.json('notexist');
    }
  } catch (error) {
    console.error('Error during registration:', error);
    res.json('notexist');
  }
};

const contactController = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).json({ status: 'success', message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ status: 'error', message: 'Failed to send message' });
  }
};


const getCarById = async (req, res) => {
  const { id } = req.params;
  try {
    const car = await Car.findById(id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.status(200).json(car);
  } catch (error) {
    console.error('Error fetching car by ID:', error);
    res.status(500).json({ message: 'Failed to fetch car' });
  }
};

module.exports = {
  registerController,
  loginController,
  contactController,
  getCars,
  getCarById,
};




module.exports = {
  registerController,
  loginController,
  contactController,
  getCars,
  searchCars,
  getCarById,
};
