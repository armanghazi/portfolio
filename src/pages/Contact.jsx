import React, { useState } from 'react';
import { FaEnvelope, FaUser, FaPaperPlane, FaPhone, FaWhatsapp, FaCopy, FaCheck } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = 'ghaziaskari@gmail.com';

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
      <div className="contact-container">
        <div className="contact-form">
          <h1 className="section-title">
            <FaEnvelope />
            Contact Me
          </h1>
          <form 
            id="contact-form" 
            action="https://formsubmit.co/02ad2d2441030f69f7107ce3699c230a" 
            method="POST"
            className="contact-form"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://armanghazi.github.io/portfolio/thank-you.html" />
            
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                <FaUser />
                Name:
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="form-input"
                required 
                placeholder="Write your name here."
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                <FaEnvelope />
                Email:
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="form-input"
                required 
                placeholder="Write your Email here." 
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" 
                title="Please enter a valid email address (e.g., name@example.com)" 
                aria-label="Your Email"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                <FaEnvelope />
                Your Message:
              </label>
              <textarea 
                id="message" 
                name="message" 
                className="form-textarea"
                required 
                placeholder="Write your message here."
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>

        <div className="whatsapp-section">
          <div className="whatsapp-info">
            <h2 className="whatsapp-title">Get in Touch</h2>
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
            <p className="whatsapp-description">
              You can also reach me directly through WhatsApp for a faster response.
            </p>
            <button className="whatsapp-button" onClick={handleWhatsAppClick}>
              <FaWhatsapp />
              Start Chat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 