import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ContentProvider, useContent } from './context/ContentContext';

const AppContent: React.FC = () => {
  const { t } = useContent();
  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

const App: React.FC = () => {
  return (
    <ContentProvider>
      <AppContent />
    </ContentProvider>
  );
};

export default App;