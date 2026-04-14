import { useState } from 'react';
import { FaCheck, FaCopy, FaEnvelope, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const email = 'ghaziaskari@gmail.com';
  const whatsappNumber = '34600977125';
  const [copied, setCopied] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi Arman, I would like to discuss my project.');
    const digits = String(whatsappNumber).replace(/\D/g, '');
    window.open(`https://wa.me/${digits}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error('Failed to copy email:', error);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* HERO CTA */}
        <div className="cta-hero">
          <h1>Looking for a GIS or Data Specialist?</h1>
          <p>Let&apos;s discuss your project and turn your data into actionable insights.</p>
        </div>

        {/* QUICK CONTACT */}
        <div className="quick-contact">
          {/* WhatsApp */}
          <div className="whatsapp-section">
            <h2>Fastest Way</h2>
            <button type="button" className="whatsapp-button" onClick={handleWhatsAppClick}>
              <FaWhatsapp />
              Chat on WhatsApp
            </button>
            <p>Get a quick response and discuss your project.</p>
          </div>

          {/* Email */}
          <div className="email-section">
            <h2>Prefer Email?</h2>

            <div className="contact-item">
              <FaEnvelope />
              <button type="button" className="email-copy" onClick={handleCopyEmail}>
                {email}
                {copied ? <FaCheck /> : <FaCopy />}
              </button>
            </div>

            <p className="response-time">I usually reply within a few hours.</p>
          </div>
        </div>
      </div>

      {/* FORM */}
      <div className="contact-form">
        <h2 className="section-title">
          <FaEnvelope />
          Tell Me About Your Project
        </h2>

        <form action="https://formsubmit.co/02ad2d2441030f69f7107ce3699c230a" method="POST">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://armanghazi.github.io/portfolio/#/thank-you" />

          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" placeholder="Describe your project..." required />

          <button type="submit" className="submit-button">
            <FaPaperPlane />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;