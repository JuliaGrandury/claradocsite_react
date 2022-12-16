import React, { useState } from 'react'
import './screenings.css'

const Screenings = () => {
  const [success, setSuccess] = useState('false');
  const [formData, setFormData] = useState({
    fullname : '',
    email: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const field = event.target.getAttribute("name");
    const value = event.target.value;
    const inProgressData = {formData};
    inProgressData[field] = value;
    setFormData(inProgressData);
  }

  const handleChange = (event) => {
    event.preventDefault();
    const newInput = {
      fullname: formData.fullname,
      email: formData.email
    }
    const newFormData = [...formData, newInput];
    setFormData(newFormData);
  }

  return (
    <section id="screenings">
      <h2>No Upcoming Screenings</h2>
      <p>Subscribe to our email list and get notified of our next screening!</p>
      <div className="container newsletter__container">
        <form onSubmit={handleSubmit}>
          <input aria-label="Your full name" placeholder="Your full name" type="text" name="fullname" onChange={handleChange} required/>
          <input aria-label="Your email" placeholder="Your email" type="email" name="email" onChange={handleChange} required/>
          <button type="submit" className="btn btn-primary">Get Notified</button>
        </form>
      </div>
    </section>
  )
}

export default Screenings