import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import './index.css';

function App() {
  return (
    <div className="relative z-0 bg-primary">
      <Hero />
      <About />
      <Timeline />
      <Projects />
    </div>
  );
}

export default App;