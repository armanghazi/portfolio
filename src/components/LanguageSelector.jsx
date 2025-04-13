import { useEffect } from 'react';
import './LanguageSelector.css';

const LanguageSelector = () => {
  useEffect(() => {
    // Add Google Translate Script
    const addScript = () => {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    };

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,es,eu,fa,ar',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: true,
        },
        'google_translate_element'
      );
    };

    addScript();
  }, []);

  return (
    <div className="language-selector">
      <div id="google_translate_element"></div>
    </div>
  );
};

export default LanguageSelector; 