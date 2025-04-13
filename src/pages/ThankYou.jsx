import React from 'react';
import { FaHome, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './ThankYou.css';

const ThankYou = () => {
  return (
    <section className="thank-you-section">
      <h1 className="thank-you-title">
        <FaCheckCircle />
        Thank You!
      </h1>
      <p className="thank-you-message">
        Your message has been successfully sent. I will get back to you as soon as possible.
      </p>
      <Link to="/" className="home-button">
        <FaHome />
        Back to Home
      </Link>
    </section>
  );
};

export default ThankYou; 