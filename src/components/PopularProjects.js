import React from 'react';
import { Link } from 'react-router-dom';
import '../css/PopularProjects.css'; 
import p1 from "../Assets/furniture_assembly.webp";
import p2 from "../Assets/mount_tv.webp";
import p3 from "../Assets/help_moving.jpg";
import p4 from "../Assets/house-cleaning.jpg";
import p5 from "../Assets/plumber-working.jpg";
import p6 from "../Assets/Electrical-Repairs.jpg";

const PopularProjects = () => {
  const projects = [
    { id: 1, title: "Furniture Assembly", price: "$49", imgSrc: p1 },
    { id: 2, title: "Mount a TV", price: "$69", imgSrc: p2 },
    { id: 3, title: "Help Moving", price: "$67", imgSrc: p3 },
    { id: 4, title: "House Cleaning", price: "$59", imgSrc: p4 },
    { id: 5, title: "Plumbing Repairs", price: "$75", imgSrc: p5 },
    { id: 6, title: "Electrical Repairs", price: "$80", imgSrc: p6 },
  ];

  return (
    <div className="popular-projects-section">
      <h2 className="facts section-title">Popular Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <Link key={project.id} to={`/projects/${project.id}`}>
            <div className="project-card">
              <img src={project.imgSrc} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3 className='facts'>{project.title}</h3>
                <p>Projects starting at {project.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link to="/projectsall" className="more-projects-btn">More Projects</Link>
    </div>
  );
};

export default PopularProjects;
