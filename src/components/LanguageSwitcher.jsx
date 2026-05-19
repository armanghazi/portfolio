import { useState, useEffect } from 'react';
import { getCurrentLanguage, setLanguage } from '../utils/googleTranslate';
import './LanguageSwitcher.css';

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'eu', label: 'EU' },
  { code: 'fa', label: 'FA' },
];

const LanguageSwitcher = () => {
  const [active, setActive] = useState('en');

  useEffect(() => {
    setActive(getCurrentLanguage());

    const observer = new MutationObserver(() => {
      setActive(getCurrentLanguage());
      const lang = document.documentElement.getAttribute('lang');
      if (lang === 'fa' || lang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.body.dir = 'rtl';
      } else if (lang) {
        document.documentElement.dir = 'ltr';
        document.body.dir = 'ltr';
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['lang', 'class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="language-switcher" aria-label="Language selection">
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          className={`lang-btn${active === code ? ' active' : ''}`}
          onClick={() => setLanguage(code)}
          aria-pressed={active === code}
          aria-label={label}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
