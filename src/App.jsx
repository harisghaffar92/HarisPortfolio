import React from 'react';
import { useScrollProgress } from './hooks/useScrollProgress';
import { useScrollFrames } from './components/cinematic/useScrollFrames';
import LoadingScreen from './components/cinematic/LoadingScreen';
import ScrollFrameCanvas from './components/cinematic/ScrollFrameCanvas';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Resume from './sections/Resume';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  const scrollProgress = useScrollProgress();
  const { loadProgress, isReady } = useScrollFrames(scrollProgress);

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 selection:bg-sky-500 selection:text-white">
      {/* First Load High-Tech Loading Screen */}
      <LoadingScreen loadProgress={loadProgress} isReady={isReady} />

      {/* Sticky Cinematic Background Frame Canvas */}
      <ScrollFrameCanvas scrollProgress={scrollProgress} />

      {/* Floating Top Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main className="relative z-10 space-y-12">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Resume />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
