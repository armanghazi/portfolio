import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Studies from './pages/Studies';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';
import ThemeToggle from './components/ThemeToggle';
import './styles/global.css';

function App() {
  return (
    <Router>
      
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/studies" element={<Studies />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </main>
        <Footer />
        <ThemeToggle />
      </div>
    </Router>
  );
}

export default App;
