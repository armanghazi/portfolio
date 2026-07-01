import { useState } from 'react';
import { FaCheck, FaCopy, FaEnvelope, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import usePageMeta from '../hooks/usePageMeta';
import './Contact.css';

const Contact = () => {
  const email = 'ghaziaskari@gmail.com';
  const whatsappNumber = '34600977125';
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation('contact');
  usePageMeta('contact');

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(t('whatsapp_message'));
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
          <h1>{t('hero_title')}</h1>
          <p>{t('hero_desc')}</p>
        </div>

        {/* QUICK CONTACT */}
        <div className="quick-contact">
          {/* WhatsApp */}
          <div className="whatsapp-section">
            <h2>{t('fastest_title')}</h2>
            <button type="button" className="whatsapp-button" onClick={handleWhatsAppClick}>
              <FaWhatsapp />
              {t('whatsapp_btn')}
            </button>
            <p>{t('whatsapp_desc')}</p>
          </div>

          {/* Email */}
          <div className="email-section">
            <h2>{t('email_title')}</h2>
            <div className="contact-item">
              <FaEnvelope />
              <button type="button" className="email-copy" onClick={handleCopyEmail}>
                {email}
                {copied ? <FaCheck /> : <FaCopy />}
              </button>
            </div>
            <p className="response-time">{t('response_time')}</p>
          </div>
        </div>
      </div>

      {/* FORM */}
      <div className="contact-form">
        <h2 className="section-title">
          <FaEnvelope />
          {t('form_title')}
        </h2>

        <form action="https://formsubmit.co/02ad2d2441030f69f7107ce3699c230a" method="POST">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://armanghazi.github.io/portfolio/thank-you" />

          <input type="text"  name="name"    placeholder={t('placeholder_name')}    required />
          <input type="email" name="email"   placeholder={t('placeholder_email')}   required />
          <textarea           name="message" placeholder={t('placeholder_message')} required />

          <button type="submit" className="submit-button">
            <FaPaperPlane />
            {t('submit_btn')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
