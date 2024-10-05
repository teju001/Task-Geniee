import React from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import "./Navbar.css";
import Facts from './Facts';
import Features from './Features';
import PopularProjects from './PopularProjects';


const Home = () => {
  return (
    <div className='home-container'>
    <Navbar />
    <Carousel />
    <Facts></Facts>
    <Features />
    <PopularProjects></PopularProjects>

  </div>
  )
}

export default Home
