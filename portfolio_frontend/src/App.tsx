import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Chat from './components/Chat';
import Contact from './components/Contact';
import './App.css';
import { useEffect } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabChange = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Shared Divider Pattern defined in §4
  const Divider = () => (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
  );

  useEffect(() => {
    // Force the browser to scroll to the very top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-violet-500/30 overflow-x-hidden">
      
      {/* Visual Depth: Ambient Noise Overlay */}
      <div className="noise-overlay fixed inset-0 pointer-events-none z-50" />

      {/* System Architecture Banner (At Top) */}
      <div className="w-full bg-slate-900/60 border-b border-slate-800 text-center py-2 px-4 text-xs font-mono text-slate-400">
        🚀 Built to demonstrate a modern full-stack AI application using React, FastAPI, and LLM APIs.
      </div>

      {/* Main Page Layout Wrapper */}
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        
        <div id="home">
          <Hero setActiveTab={handleTabChange} />
        </div>

        <Divider />

        <div id="about">
          <About />
        </div>

        <Divider />

        <div id="experience">
          <Experience />
        </div>

        <Divider />

        <div id="projects">
          <Projects />
        </div>

        <Divider />

        <div id="skills">
          <Skills />
        </div>

        <Divider />

        <div id="chat">
          <Chat />
        </div>

        <Divider />

        <div id="contact">
          <Contact />
        </div>

        {/* System Footer */}
        <footer className="py-12 border-t border-slate-900 text-center space-y-3">
          <p className="text-xs text-slate-500 font-mono">
            Designed &amp; Engineered by Avradip Mazumdar
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-[10px] text-slate-500 font-mono">
            <span>React (Vite)</span>
            <span>•</span>
            <span>FastAPI</span>
            <span>•</span>
            <span>OpenAI API</span>
            <span>•</span>
            <span>Tailwind CSS</span>
          </div>
        </footer>

      </div>
    </div>
  );
}