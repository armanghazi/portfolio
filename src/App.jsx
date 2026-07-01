import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import ScrollToTop from './components/ScrollToTop';
import SkipLink from './components/SkipLink';
import './styles/global.css';
import './styles/rtl.css';

const Home       = lazy(() => import('./pages/Home'));
const Studies    = lazy(() => import('./pages/Studies'));
const Experience = lazy(() => import('./pages/Experience'));
const Projects   = lazy(() => import('./pages/Projects'));
const Contact    = lazy(() => import('./pages/Contact'));
const ThankYou   = lazy(() => import('./pages/ThankYou'));

function App() {
  return (
    <Router basename="/portfolio">
      <ScrollToTop />
      <div className="app">
        <SkipLink />
        <Navbar />
        <main id="main-content">
          <Suspense fallback={<div className="page-spinner" aria-label="Loading…" />}>
            <Routes>
              <Route path="/"           element={<Home />} />
              <Route path="/studies"    element={<Studies />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects"   element={<Projects />} />
              <Route path="/contact"    element={<Contact />} />
              <Route path="/thank-you"  element={<ThankYou />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ThemeToggle />
      </div>
    </Router>
  );
}

export default App;
