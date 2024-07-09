/* AboutUs.js */


import React from 'react';
import Navbar from './Navbar';

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div className="about">
      <img src="https://cdn.pixabay.com/photo/2023/03/27/16/24/sports-car-7881150_1280.jpg" alt="cars" className="image-container"/>
      <h1 className="image-text">CarHub</h1>
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          Welcome to CarHub, your ultimate destination for car listings and sales. Our platform is designed to revolutionize the car buying experience. Whether you're a buyer or a seller, CarHub offers a seamless solution that ensures convenience, transparency, and efficiency.
        </p>
      </section>
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          At CarHub, our mission is to redefine the way people buy and sell cars. We believe in providing a user-friendly platform that empowers both buyers and sellers, making the entire process hassle-free and enjoyable.
        </p>
      </section>
      <section className="about-section">
        <h2>What Sets Us Apart</h2>
        <div >
          <h3>Seamless Experience</h3> 
          <p>We prioritize user experience above all else, offering a seamless interface that simplifies the car buying journey.</p>
        </div >
        <div >
          <h3>Real-Time Updates</h3>
          <p>Administrators can effortlessly add detailed car listings, ensuring that users have access to up-to-date information at all times.</p>
        </div>
        <div>
          <h3>Extensive Catalog</h3>
          <p>Explore our extensive catalog of cars, complete with detailed specifications, high-quality images, and transparent pricing details.</p>
        </div>
        <div >
          <h3>Intuitive Comparison Tool</h3>
          <p>Make informed decisions with our intuitive comparison tool, allowing you to compare different vehicles side by side.</p>
        </div>
      </section>
      <section className="about-section">
        <h2>Our Commitment</h2>
        <p>At CarHub, we are committed to providing a platform that prioritizes trust, transparency, and customer satisfaction. Whether you're buying your first car or selling your tenth, we're here to make the process smooth and stress-free.</p>
      </section>
      <section className="about-section">
        <h2>Start Your Journey with CarHub Today</h2>
        <p>Join thousands of satisfied customers who have found their perfect vehicle through CarHub. Start browsing now and discover the car of your dreams!</p>
      </section>
    </div>
    </>
  );
};

export default AboutUs;


