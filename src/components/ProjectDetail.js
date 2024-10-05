import React, { useState } from 'react';
import Modal from 'react-modal';
import { useParams } from 'react-router-dom';
import '../css/ProjectDetails.css';

// Set up modal root for accessibility
Modal.setAppElement('#root');

const ProjectDetails = () => {
  const { projectId } = useParams();
  const projectData = {
    "1": { title: "Furniture Assembly", price: "$49", description: "We assemble your furniture professionally." },
    "2": { title: "Mount a TV", price: "$69", description: "Mount your TV securely." },
    "3": { title: "Help Moving", price: "$67", description: "Help with moving your furniture." },
    "4": { title: "House Cleaning", price: "$59", description: "Thorough cleaning for your home." },
    "5": { title: "Plumbing Repairs", price: "$75", description: "Fix leaks and plumbing issues." },
    "6": { title: "Electrical Repairs", price: "$80", description: "Qualified electricians for your needs." },
  };

  const project = projectData[projectId];
  const [modalIsOpen, setModalIsOpen] = useState(false); // State for controlling modal
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    address: '',
    phone: '',
    description: '',
  });
  const [showAlert, setShowAlert] = useState(false); // State for alert visibility
  const [errors, setErrors] = useState({}); // State for form validation errors

  const openModal = () => {
    setModalIsOpen(true);
    setFormData({
      name: '',
      email: '',
      date: '',
      time: '',
      address: '',
      phone: '',
      description: '',
    });
    setShowAlert(false);
    setErrors({});
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.description) newErrors.description = "Description is required";
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // Simulate a booking submission
      console.log("Booking data:", formData);
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000); // Hide alert after 3 seconds
      setFormData({
        name: '',
        email: '',
        date: '',
        time: '',
        address: '',
        phone: '',
        description: '',
      });
    }
  };

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-details-container">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p>Price: {project.price}</p>
      <button onClick={openModal} className="book-btn">Book this project</button>

      {/* Modal for booking */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Booking Modal"
        className="booking-modal"
        overlayClassName="booking-overlay"
      >
        <h2 className="modal-title">Book {project.title}</h2>
        {showAlert && (
          <div className="alert-container">
            <div className="alert">
              <div className="checkmark"></div>
              <p className="alert-message">Booking Confirmed!</p>
            </div>
          </div>
        )}
        <form className="booking-form" onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your full name" required />
            {errors.name && <span className="error">{errors.name}</span>}
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" required />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>
          <label>
            Date:
            <input type="date" name="date" value={formData.date} onChange={handleInputChange} required />
            {errors.date && <span className="error">{errors.date}</span>}
          </label>
          <label>
            Time:
            <input type="time" name="time" value={formData.time} onChange={handleInputChange} required />
            {errors.time && <span className="error">{errors.time}</span>}
          </label>
          <label>
            Address:
            <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Enter your address" required />
            {errors.address && <span className="error">{errors.address}</span>}
          </label>
          <label>
            Phone Number:
            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Enter your phone number" required />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </label>
          <label>
            Description:
            <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Describe your project needs" required />
            {errors.description && <span className="error">{errors.description}</span>}
          </label>
          <button type="submit" className="submit-btn">Confirm Booking</button>
        </form>
        <button onClick={closeModal} className="close-btn">Close</button>
      </Modal>
    </div>
  );
};

export default ProjectDetails;
