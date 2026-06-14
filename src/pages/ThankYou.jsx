import { FaHome, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './ThankYou.css';

const ThankYou = () => {
  const { t } = useTranslation('thankyou');

  return (
    <section className="thank-you-section">
      <h1 className="thank-you-title">
        <FaCheckCircle />
        {t('title')}
      </h1>
      <p className="thank-you-message">
        {t('message')}
      </p>
      <Link to="/" className="home-button">
        <FaHome />
        {t('back_home')}
      </Link>
    </section>
  );
};

export default ThankYou;
