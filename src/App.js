import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SpaceTheme from './SpaceTheme';
import Navigation from './Navigation';
// Import other components as needed

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
        {/* Define other routes as needed */}
      </Routes>
    </Router>
  );
}

// Placeholder components, replace with actual component imports and definitions
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Projects() {
  return <h2>Projects</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

export default App;
