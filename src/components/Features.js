import React, { useState, useEffect, useRef } from 'react';
import why from '../Assets/why.jpeg';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import SupportAgentSharpIcon from '@mui/icons-material/SupportAgentSharp';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import '../css/Features.css'; // Ensure this contains animation CSS

const Features = () => {
  const [isVisible, setIsVisible] = useState([false, false, false, false, false]); // Track visibility for each section
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ]; // Create separate refs for each section

  // Intersection Observer to handle visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.findIndex((ref) => ref.current === entry.target);
            if (index !== -1 && !isVisible[index]) { // Check if it's not already visible
              setIsVisible((prev) => {
                const newVisibility = [...prev];
                newVisibility[index] = true; // Mark this section as visible
                return newVisibility;
              });
              observer.unobserve(entry.target); // Stop observing once visible
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [sectionRefs, isVisible]); // Add isVisible to dependency array

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
          <h5 className="facts fw-bold text-uppercase" style={{ color: 'rgba(31,84,121,255)' }}>Why Choose Task Genie?</h5>
          <h1 className="mb-0 facts">We Make Task Management Simple and Efficient</h1>
        </div>
        <div className="row g-5">
          {/* First Column - Best Task Management */}
          <div className="col-lg-4">
            <div className="row g-5">
              <div className={`col-12 ${isVisible[0] ? 'fadeIn' : ''}`} ref={sectionRefs[0]} style={{ animationDelay: '0.1s' }}>
                <div className="border rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px', backgroundColor: 'rgba(31,84,121,255)' }}>
                  <TaskAltOutlinedIcon style={{ color: 'white' }} />
                </div>
                <h4>Best Task Management</h4>
                <p className="mb-0 fp">Seamlessly connect clients with skilled service providers and streamline tasks efficiently.</p>
              </div>

              <div className={`col-12 ${isVisible[1] ? 'fadeIn' : ''}`} ref={sectionRefs[1]} style={{ animationDelay: '0.3s' }}>
                <div className="border rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px', backgroundColor: 'rgba(31,84,121,255)' }}>
                  <MilitaryTechOutlinedIcon style={{ color: 'white' }} />
                </div>
                <h4>Award-Winning Service</h4>
                <p className="mb-0 fp">Our top-tier platform has been recognized for its excellence in task management and client satisfaction.</p>
              </div>
            </div>
          </div>

          {/* Middle Image Column */}
          <div className={`col-lg-4 ${isVisible[2] ? 'fadeIn' : ''}`} ref={sectionRefs[2]} style={{ minHeight: '350px', animationDelay: '0.7s' }}>
            <div className="position-relative h-100">
              <img className="position-absolute w-100 h-100 rounded" src={why} alt="Feature" style={{ objectFit: 'cover' }} />
            </div>
          </div>

          {/* Third Column - Professional Providers */}
          <div className="col-lg-4">
            <div className="row g-5">
              <div className={`col-12 ${isVisible[3] ? 'fadeIn' : ''}`} ref={sectionRefs[3]} style={{ animationDelay: '0.5s' }}>
                <div className="border rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px', backgroundColor: 'rgba(31,84,121,255)' }}>
                  <WorkHistoryOutlinedIcon style={{ color: 'white' }} />
                </div>
                <h4>Professional Providers</h4>
                <p className="mb-0 fp">Our platform offers highly skilled and vetted professionals for all your tasks.</p>
              </div>

              <div className={`col-12 ${isVisible[4] ? 'fadeIn' : ''}`} ref={sectionRefs[4]} style={{ animationDelay: '0.9s' }}>
                <div className="border rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px', backgroundColor: 'rgba(31,84,121,255)' }}>
                  <SupportAgentSharpIcon style={{ color: 'white' }} />
                </div>
                <h4>24/7 Support</h4>
                <p className="mb-0 fp">Our support team is available round-the-clock to ensure a smooth experience for both clients and providers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
