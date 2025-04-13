import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faKaggle } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    {
      icon: faLinkedin,
      url: 'https://www.linkedin.com/in/arman-ghaziaskari/',
      label: 'LinkedIn'
    },
    {
      icon: faGithub,
      url: 'https://github.com/armanghazi/',
      label: 'GitHub'
    },
    {
      icon: faKaggle,
      url: 'https://www.kaggle.com/armanghazi',
      label: 'Kaggle'
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
      <p className="copyright">
            ©{new Date().getFullYear()} Arman Ghaziaskari Naeini
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