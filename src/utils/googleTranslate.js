const SUPPORTED = ['en', 'es', 'eu', 'fa'];

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

export function setLanguage(langCode) {
  if (!SUPPORTED.includes(langCode)) return;
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
