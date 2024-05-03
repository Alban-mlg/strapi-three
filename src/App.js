import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SpaceTheme from './SpaceTheme';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <Navigation />
      <SpaceTheme />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
