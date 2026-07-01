import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const { t } = useTranslation('common');

  useEffect(() => {
    // Read the attribute already set by the inline script in index.html
    setIsDark(document.documentElement.getAttribute('data-theme') === 'dark');
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? t('theme_to_light') : t('theme_to_dark')}
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;
