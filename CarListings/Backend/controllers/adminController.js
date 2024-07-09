//controllers/adminController.js


const multer = require('multer');
const path = require('path');
const Car = require('../models/carModel');
const Message = require('../models/messageModel');

const getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ message: 'Failed to fetch messages' });
  }
};


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); 
  }
});


const upload = multer({ storage: storage });

const addCar = async (req, res) => {
  const { model, company, year, price, type, engine, seating_capacity, mileage, description } = req.body;
  const image = `/uploads/${req.file.filename.replace(/\\/g, '/')}`;
  try {
    const newCar = new Car({
      image,
      model,
      company,
      year,
      price,
      type,
      engine,
      seating_capacity,
      mileage,
      description
    });

    
    await newCar.save();

    res.status(201).json({ message: 'Car added successfully' });
  } catch (error) {
 
    console.error('Error adding car:', error);
    res.status(500).json({ message: 'Failed to add car' });
  }
};


module.exports = {
  getMessages,
  addCar
};
