import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from './Navbar'; // Import the Navbar
import '../css/AllProjects.css'; 
import p1 from "../Assets/furniture_assembly.webp";
import p2 from "../Assets/mount_tv.webp";
import p3 from "../Assets/help_moving.jpg";
import p4 from "../Assets/house-cleaning.jpg";
import p5 from "../Assets/plumber-working.jpg";
import p6 from "../Assets/Electrical-Repairs.jpg";
import placeholderImg from "../Assets/furniture_assembly.webp"; // Import a placeholder image

const AllProjects = () => {
  const allProjects = [
    { id: 1, title: "Furniture Assembly", price: 49, popularity: 5, imgSrc: p1 },
    { id: 2, title: "Mount a TV", price: 69, popularity: 4, imgSrc: p2 },
    { id: 3, title: "Help Moving", price: 67, popularity: 3, imgSrc: p3 },
    { id: 4, title: "House Cleaning", price: 59, popularity: 2, imgSrc: p4 },
    { id: 5, title: "Plumbing Repairs", price: 75, popularity: 1, imgSrc: p5 },
    { id: 6, title: "Electrical Repairs", price: 80, popularity: 6, imgSrc: p6 },
    { id: 7, title: "Gardening Services", price: 40, popularity: 3, imgSrc: placeholderImg },
    { id: 8, title: "Carpentry Work", price: 55, popularity: 2, imgSrc: placeholderImg },
    { id: 9, title: "Window Installation", price: 150, popularity: 5, imgSrc: placeholderImg },
    { id: 10, title: "Appliance Repair", price: 100, popularity: 4, imgSrc: placeholderImg },
    { id: 11, title: "Roofing Services", price: 250, popularity: 1, imgSrc: placeholderImg },
    { id: 12, title: "Pest Control", price: 90, popularity: 3, imgSrc: placeholderImg },
    { id: 13, title: "Landscaping", price: 60, popularity: 5, imgSrc: placeholderImg },
    { id: 14, title: "Pressure Washing", price: 70, popularity: 2, imgSrc: placeholderImg },
    { id: 15, title: "Siding Repair", price: 120, popularity: 6, imgSrc: placeholderImg },
  ];

  const [sortOption, setSortOption] = useState('default');

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedProjects = [...allProjects].sort((a, b) => {
    if (sortOption === 'asc') return a.title.localeCompare(b.title);
    if (sortOption === 'desc') return b.title.localeCompare(a.title);
    if (sortOption === 'price-asc') return a.price - b.price; // Sort by price ascending
    if (sortOption === 'price-desc') return b.price - a.price; // Sort by price descending
    if (sortOption === 'popularity') return b.popularity - a.popularity; // Sort by popularity (higher first)
    return 0; // Default order
  });

  return (
    <div className="all-projects-container">
      <Navbar /> {/* Navbar at the top */}
      <br></br><br></br><br></br>
      <div className="header-container">
        <h2>All Projects</h2>
        <label htmlFor="sort">Sort by:</label>
        <select id="sort" value={sortOption} onChange={handleSortChange}>
          <option value="default">Select...</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="popularity">Popularity</option>
        </select>
      </div>
      <br />
      <div className="projectslist">
        {sortedProjects.map((project) => (
          <Link key={project.id} to={`/projects/${project.id}`} className="projectcard">
            <img src={project.imgSrc} alt={project.title} className="projecti" />
            <div className="projectinfo">
              <h3>{project.title}</h3>
              <p>Price: ${project.price}</p> {/* Display price with a dollar sign */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
