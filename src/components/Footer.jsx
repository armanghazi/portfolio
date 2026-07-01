import { FaLinkedin, FaGithub, FaKaggle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const socialLinks = [
  { Icon: FaLinkedin, url: 'https://www.linkedin.com/in/arman-ghaziaskari/', label: 'LinkedIn' },
  { Icon: FaGithub,   url: 'https://github.com/armanghazi/',                  label: 'GitHub'   },
  { Icon: FaKaggle,   url: 'https://www.kaggle.com/armanghazi',               label: 'Kaggle'   },
];

const Footer = () => {
  const { t } = useTranslation('footer');

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">
          {t('copyright', { year: new Date().getFullYear() })}
        </p>
        <ul className="social-links">
          {socialLinks.map(({ Icon, url, label }) => (
            <li key={label} className="social-link">
              <a href={url} target="_blank" rel="noopener noreferrer">
                <Icon aria-hidden="true" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
