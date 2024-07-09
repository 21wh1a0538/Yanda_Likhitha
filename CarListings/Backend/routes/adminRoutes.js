//routes/adminRoutes.js


const express = require('express');
const router = express.Router();
const { getMessages, addCar } = require('../controllers/adminController');


const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); 
  }
});
const upload = multer({ storage: storage });


router.get('/messages', getMessages);


router.post('/add-car', upload.single('image'), addCar);

module.exports = router;
