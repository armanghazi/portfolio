import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { initLanguage } from './utils/googleTranslate'

// Pre-apply direction before React mounts to avoid flash of wrong layout
const savedLang = localStorage.getItem('portfolioLang');
if (savedLang === 'fa') {
  document.documentElement.setAttribute('dir', 'rtl');
  document.documentElement.setAttribute('lang', 'fa');
} else {
  document.documentElement.setAttribute('dir', 'ltr');
}

// Auto-detect language on first visit; restore saved preference on return.
// May trigger a page reload — code below this call may not execute on reload.
initLanguage();

function hideGoogleTranslateBar() {
  document.querySelectorAll('iframe.skiptranslate, .goog-te-banner-frame, body > .skiptranslate').forEach((el) => {
    el.style.display = 'none'
    el.style.visibility = 'hidden'
  })
  document.body.style.top = '0'
  document.body.style.position = 'static'
}

hideGoogleTranslateBar()
const translateUiObserver = new MutationObserver(hideGoogleTranslateBar)
translateUiObserver.observe(document.body, { childList: true, subtree: true })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
