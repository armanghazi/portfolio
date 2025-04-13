import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/">Arman Ghaziaskari</Link>
        </div>
        <nav className="nav">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <LanguageSelector />
      </div>
    </header>
  );
};

export default Header; 