import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

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
