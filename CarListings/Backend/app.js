//app.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routes/userRoutes');
const adminRouter = require('./routes/adminRoutes');
const path = require('path');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/', (req, res) => {
  res.send('Server is up and running');
});

mongoose.connect('mongodb://127.0.0.1:27017/project')
  .then(() => {
    console.log('Connection established');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB', err.message);
  });

app.use('/user', userRouter);
app.use('/admin', adminRouter);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Connected to port ${PORT}`);
});
