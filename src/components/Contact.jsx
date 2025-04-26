import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset the submitted state after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>Have questions about our movie app? Want to suggest new features? We'd love to hear from you!</p>
          <div className="contact-details">
            <div className="contact-item">
              <i className="fa-solid fa-location-dot"></i>
              <span>123 Movie Street, Hollywood, CA 90001</span>
            </div>
            <div className="contact-item">
              <i className="fa-solid fa-phone"></i>
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="contact-item">
              <i className="fa-solid fa-envelope"></i>
              <span>contact@moviehub.com</span>
            </div>
          </div>
        </div>
        <div className="contact-form-container">
          {submitted ? (
            <div className="success-message">
              <h3>Thank you for your message!</h3>
              <p>We'll get back to you soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn-submit">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;