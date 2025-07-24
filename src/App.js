import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <div>
      <nav className="navbar">
        <h3>Sagnik Mallick</h3>
        <div className="hamburger" onClick={() => setNavOpen(!navOpen)}>
          <div></div><div></div><div></div>
        </div>
        <div className={`nav-links ${navOpen ? 'show' : ''}`}>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <button className="toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      </nav>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </motion.div>
    </div>
  );
}

export default App