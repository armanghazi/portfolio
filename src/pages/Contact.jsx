import React, { useState } from 'react';
import { FaEnvelope, FaUser, FaPaperPlane, FaPhone, FaWhatsapp, FaCopy, FaCheck } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const email = 'ghaziaskari@gmail.com';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello. I want to send you this message:');
    window.open(`https://wa.me/+34600977125?text=${message}`, '_blank');
  };

  return (
    <section className="contact-section">
      <h1 className="section-title">
        <FaEnvelope />
        Contact Me
      </h1>

      <div className="container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label">
              <FaUser />
              Name
            </label>
            <i className="input-icon">
              <FaUser />
            </i>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input"
              required
            />
          </div>

          <div className="form-group">
            <label className="label">
              <FaEnvelope />
              Email
            </label>
            <i className="input-icon">
              <FaEnvelope />
            </i>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input"
              required
            />
          </div>

          <div className="form-group">
            <label className="label">
              <FaEnvelope />
              Message
            </label>
            <i className="input-icon">
              <FaEnvelope />
            </i>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="textarea"
              required
            />
          </div>

          <button type="submit" className="submit-button">
            <FaPaperPlane />
            Send Message
          </button>
        </form>

        <div className="contact-info">
          <h2>Get in Touch</h2>
          <div className="contact-details">
            <div className="contact-item">
              <i className="fa fa-envelope"></i>
              <span>Email: </span>
              <button 
                className="email-copy" 
                onClick={handleCopyEmail}
                title="Click to copy email"
              >
                {email}
                {copied ? <FaCheck className="copy-icon" /> : <FaCopy className="copy-icon" />}
              </button>
            </div>

          </div>
        </div>

        <div className="whatsapp-section">
          <h2>Chat on WhatsApp</h2>
          <p>I would be delighted to connect you! Kindly click the button below to start a WhatsApp conversation with us.</p>
          <button className="whatsapp-button" onClick={handleWhatsAppClick}>
            <FaWhatsapp /> Start Chat
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact; 