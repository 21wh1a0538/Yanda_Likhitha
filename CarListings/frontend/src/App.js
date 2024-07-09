/* App.js */


import './App.css';
import React from 'react'
import Corosol from './Components/Corosol'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Footer from './Components/Footer';
import UserDashBoard from './Components/UserDashBoard';
import AdminDashBoard from './Components/AdminDashBoard';
import AddCars from './Components/AddCars';
import GetCars from './Components/GetCars';
import ShowCars from './Components/ShowCars';
import CarDetails from './Components/CarDetails';
import Cars from './Components/Cars';
import Compare from './Components/Compare';
import Messages from './Components/Messages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>    
    <BrowserRouter>
      <Routes>
        <Route index element= {<Home/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/corosol" element={<Corosol />} />
        <Route path="/about" element= {<AboutUs/>}/>
        <Route path="/contact" element= {<ContactUs/>}/>
        <Route path="/login" element= {<Login/>}/>
        <Route path="/register" element= {<Register/>}/>
        <Route path="/footer" element= {<Footer/>}/>
        <Route path="/user" element= {<UserDashBoard/>}/>
        <Route path="/admin" element= {<AdminDashBoard/>}/>
        <Route path="/addcars" element= {<AddCars/>}/>
        <Route path="/getcars" element= {<GetCars/>}/>
        <Route path="/showcars" element= {<ShowCars/>}/>
        <Route path="/car" element={<Cars />} />
        <Route path="/car/:id" element={<CarDetails />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/messages" element= {<Messages/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}



