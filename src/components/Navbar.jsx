import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation('nav');

  const navItems = [
    { path: '/', label: t('home') },
    { path: '/studies', label: t('studies') },
    { path: '/experience', label: t('experience') },
    { path: '/projects', label: t('projects') },
    { path: '/contact', label: t('contact') },
  ];

  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="logo">Arman Ghaziaskari Naeini</Link>
        <button
          className="menu-button"
          type="button"
          aria-label={t('menu_toggle')}
          aria-expanded={isOpen}
          aria-controls="nav-list"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul id="nav-list" className={`nav-list ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.path} className="nav-item">
              <Link
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
