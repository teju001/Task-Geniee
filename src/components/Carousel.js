import React, { useEffect } from 'react';
import '../css/Carousel.css'; 
import c1 from "../Assets/c1.jpg";
import c2 from "../Assets/c2.jpeg";
import c3 from "../Assets/c3.jpg";

const Carousel = () => {
  useEffect(() => {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % radioButtons.length;
      radioButtons[currentIndex].checked = true;
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <input type="radio" id="page1cb" name="pages" defaultChecked />
      <input type="radio" id="page2cb" name="pages" />
      <input type="radio" id="page3cb" name="pages" />
      
      {/* Slide 1 */}
      <div className="carousel-page" id="page1">
        <img src={c1} alt="Slide 1" className="carousel-img" />
        <div className="carousel-content">
          <h1> Trusted Local Experts</h1>
          <p>Connecting Task Givers with Task Takers</p>
          <div className="carousel-buttons">
            <a href="#task-giver" className="btn-primary">Hire a Tasker</a>
            <a href="#task-taker" className="btn-outline">Become a tasker</a>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="carousel-page" id="page2">
        <img src={c2} alt="Slide 2" className="carousel-img" />
        <div className="carousel-content">
          <h1>Hire Experts On Demand</h1>
          <p>Quick and Reliable Services at Your Fingertips</p>
          <div className="carousel-buttons">
          <a href="#task-giver" className="btn-primary">Hire a Tasker</a>
          <a href="#task-taker" className="btn-outline">Become a tasker</a>
          </div>
        </div>
      </div>

      {/* Slide 3 */}
      <div className="carousel-page" id="page3">
        <img src={c3} alt="Slide 3" className="carousel-img" />
        <div className="carousel-content">
          <h1>Flexible and Affordable</h1>
          <p>Choose from a Variety of Skilled Taskers</p>
          <div className="carousel-buttons">
          <a href="#task-giver" className="btn-primary">Hire a Tasker</a>
          <a href="#task-taker" className="btn-outline">Become a tasker</a>
          </div>
        </div>
      </div>
    </div>




  );
};

export default Carousel;
