import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'eu', label: 'EU' },
  { code: 'fa', label: 'FA' },
];

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation('common');
  const active = i18n.language;

  return (
    <div className="language-switcher" role="group" aria-label="Language selection">
      <span className="language-switcher-label">{t('language_label')}</span>
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          className={`lang-btn${active === code ? ' active' : ''}`}
          onClick={() => i18n.changeLanguage(code)}
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
