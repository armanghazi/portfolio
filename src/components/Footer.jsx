import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faKaggle } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const socialLinks = [
  { icon: faLinkedin, url: 'https://www.linkedin.com/in/arman-ghaziaskari/', label: 'LinkedIn' },
  { icon: faGithub,   url: 'https://github.com/armanghazi/',                  label: 'GitHub'   },
  { icon: faKaggle,   url: 'https://www.kaggle.com/armanghazi',               label: 'Kaggle'   },
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
          {socialLinks.map(link => (
            <li key={link.label} className="social-link">
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={link.icon} />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
