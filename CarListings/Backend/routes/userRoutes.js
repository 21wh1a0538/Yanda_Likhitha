// routes/userRoutes.js

const express = require('express');
const { registerController, loginController, contactController, getCars, searchCars,getCarById } = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerController);
router.post('/login', loginController);
router.post('/contact', contactController); 
router.get('/cars', getCars);
router.get('/search-cars', searchCars); 
router.get('/car/:id', getCarById);

module.exports = router;
