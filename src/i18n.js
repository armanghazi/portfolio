import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enNav from './locales/en/nav.json';
import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enStudies from './locales/en/studies.json';
import enExperience from './locales/en/experience.json';
import enProjects from './locales/en/projects.json';
import enContact from './locales/en/contact.json';
import enThankyou from './locales/en/thankyou.json';
import enFooter from './locales/en/footer.json';

import esNav from './locales/es/nav.json';
import esCommon from './locales/es/common.json';
import esHome from './locales/es/home.json';
import esStudies from './locales/es/studies.json';
import esExperience from './locales/es/experience.json';
import esProjects from './locales/es/projects.json';
import esContact from './locales/es/contact.json';
import esThankyou from './locales/es/thankyou.json';
import esFooter from './locales/es/footer.json';

import euNav from './locales/eu/nav.json';
import euCommon from './locales/eu/common.json';
import euHome from './locales/eu/home.json';
import euStudies from './locales/eu/studies.json';
import euExperience from './locales/eu/experience.json';
import euProjects from './locales/eu/projects.json';
import euContact from './locales/eu/contact.json';
import euThankyou from './locales/eu/thankyou.json';
import euFooter from './locales/eu/footer.json';

import faNav from './locales/fa/nav.json';
import faCommon from './locales/fa/common.json';
import faHome from './locales/fa/home.json';
import faStudies from './locales/fa/studies.json';
import faExperience from './locales/fa/experience.json';
import faProjects from './locales/fa/projects.json';
import faContact from './locales/fa/contact.json';
import faThankyou from './locales/fa/thankyou.json';
import faFooter from './locales/fa/footer.json';

const SUPPORTED = ['en', 'es', 'eu', 'fa'];
const STORAGE_KEY = 'portfolioLang';
const BROWSER_LANG_MAP = { es: 'es', eu: 'eu', fa: 'fa' };

function detectLanguage() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && SUPPORTED.includes(saved)) return saved;
  const raw = navigator.language || (navigator.languages && navigator.languages[0]) || 'en';
  const code = raw.split('-')[0].toLowerCase();
  return BROWSER_LANG_MAP[code] || 'en';
}

function applyDocumentMeta(lang) {
  document.documentElement.setAttribute('lang', lang);
  const isRtl = lang === 'fa';
  document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
  document.body.dir = isRtl ? 'rtl' : 'ltr';
}

const resources = {
  en: { nav: enNav, common: enCommon, home: enHome, studies: enStudies, experience: enExperience, projects: enProjects, contact: enContact, thankyou: enThankyou, footer: enFooter },
  es: { nav: esNav, common: esCommon, home: esHome, studies: esStudies, experience: esExperience, projects: esProjects, contact: esContact, thankyou: esThankyou, footer: esFooter },
  eu: { nav: euNav, common: euCommon, home: euHome, studies: euStudies, experience: euExperience, projects: euProjects, contact: euContact, thankyou: euThankyou, footer: euFooter },
  fa: { nav: faNav, common: faCommon, home: faHome, studies: faStudies, experience: faExperience, projects: faProjects, contact: faContact, thankyou: faThankyou, footer: faFooter },
};

const initialLang = detectLanguage();
applyDocumentMeta(initialLang);

i18n.use(initReactI18next).init({
  resources,
  lng: initialLang,
  fallbackLng: 'en',
  ns: ['nav', 'common', 'home', 'studies', 'experience', 'projects', 'contact', 'thankyou', 'footer'],
  defaultNS: 'common',
  interpolation: { escapeValue: false },
});

i18n.on('languageChanged', (lang) => {
  localStorage.setItem(STORAGE_KEY, lang);
  applyDocumentMeta(lang);
});

export default i18n;
