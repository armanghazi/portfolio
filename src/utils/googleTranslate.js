const SUPPORTED = ['en', 'es', 'eu', 'fa'];
const STORAGE_KEY = 'portfolioLang';

// Map 2-letter browser language codes to our supported codes
const BROWSER_LANG_MAP = {
  es: 'es',
  eu: 'eu',
  fa: 'fa',
};

export function getCurrentLanguage() {
  const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]*)/);
  if (!match || !match[1]) return 'en';
  const code = match[1].split('/').pop();
  return SUPPORTED.includes(code) ? code : 'en';
}

function clearGoogtransCookies() {
  const expires = 'expires=Thu, 01 Jan 1970 00:00:00 UTC';
  const host = window.location.hostname;
  const paths = ['/', '/portfolio', '/portfolio/'];

  paths.forEach((path) => {
    document.cookie = `googtrans=; ${expires}; path=${path}`;
    document.cookie = `googtrans=; ${expires}; path=${path}; domain=${host}`;
    document.cookie = `googtrans=; ${expires}; path=${path}; domain=.${host}`;
  });
}

function setGoogtransCookie(langCode) {
  const value = langCode === 'en' ? '' : `/auto/${langCode}`;
  const host = window.location.hostname;
  const paths = ['/', '/portfolio', '/portfolio/'];

  paths.forEach((path) => {
    if (value) {
      document.cookie = `googtrans=${value}; path=${path}`;
      document.cookie = `googtrans=${value}; path=${path}; domain=${host}`;
      if (host.includes('.')) {
        document.cookie = `googtrans=${value}; path=${path}; domain=.${host}`;
      }
    } else {
      document.cookie = `googtrans=; path=${path}; max-age=0`;
    }
  });
}

export function detectBrowserLanguage() {
  const raw = navigator.language || (navigator.languages && navigator.languages[0]) || 'en';
  const code = raw.split('-')[0].toLowerCase();
  return BROWSER_LANG_MAP[code] || 'en';
}

/**
 * Called once on app startup (before first render).
 * - First visit: auto-detects browser language, saves to localStorage, reloads if non-English.
 * - Returning visit: restores saved preference (re-syncs cookie if it was cleared).
 */
export function initLanguage() {
  const saved = localStorage.getItem(STORAGE_KEY);
  const targetLang = saved && SUPPORTED.includes(saved) ? saved : null;

  if (!targetLang) {
    // First visit — detect and persist
    const detected = detectBrowserLanguage();
    localStorage.setItem(STORAGE_KEY, detected);

    if (detected !== 'en') {
      clearGoogtransCookies();
      setGoogtransCookie(detected);
      window.location.reload();
    }
    return;
  }

  // Returning visit — ensure the Google Translate cookie matches the saved preference
  const currentLang = getCurrentLanguage();
  if (targetLang !== currentLang) {
    if (targetLang === 'en') {
      clearGoogtransCookies();
    } else {
      setGoogtransCookie(targetLang);
    }
    window.location.reload();
  }
}

export function setLanguage(langCode) {
  if (!SUPPORTED.includes(langCode)) return;

  // Always persist the user's manual choice
  localStorage.setItem(STORAGE_KEY, langCode);

  if (langCode === getCurrentLanguage()) return;

  if (langCode === 'en') {
    clearGoogtransCookies();
  } else {
    setGoogtransCookie(langCode);
  }

  window.location.reload();
}

export function applyDocumentDirection() {
  const lang = document.documentElement.lang || 'en';
  const rtl = lang === 'fa' || lang === 'ar';
  document.documentElement.dir = rtl ? 'rtl' : 'ltr';
  document.body.dir = rtl ? 'rtl' : 'ltr';
}
