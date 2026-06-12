import React, { useState, useEffect, Suspense, lazy } from 'react';
import { ReactLenis } from 'lenis/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, ArrowUp } from 'lucide-react';

import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Background3D from './components/Background3D';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

// Lazy-loaded heavy sections
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const GitHubStats = lazy(() => import('./components/GitHubStats'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const ResumeSection = lazy(() => import('./components/ResumeSection'));

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [showStickyBtn, setShowStickyBtn] = useState(false);

  // Manage Active Section highlighting on Scroll
  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'skills',
      'projects',
      'experience',
      'education',
      'certifications',
      'github',
      'testimonials',
      'resume',
      'contact',
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Handle floating actions display status
    const handleScroll = () => {
      setShowStickyBtn(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ReactLenis root>
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative min-h-screen selection:bg-indigo-500/30 selection:text-white">
          
          {/* Custom Cursor */}
          <CustomCursor />

          {/* Subtle 3D Background */}
          <Background3D />

          {/* Navbar */}
          <Navbar activeSection={activeSection} />

          {/* Main Content */}
          <main className="relative z-10 w-full">
            <Suspense fallback={
              <div className="h-screen flex items-center justify-center bg-[#0a0f1a] text-white">
                <div className="text-center">
                  <div className="w-10 h-10 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-xs tracking-widest uppercase text-slate-500 font-mono">Loading...</p>
                </div>
              </div>
            }>
              <Hero />
              
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
              <About />
              
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
              <Skills />
              
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
              <Projects />
              
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
              <Experience />
              
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
              <Education />
              
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
              <Certifications />
              
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
              <GitHubStats />
              
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
              <Testimonials />
              
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
              <ResumeSection />
              
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
              <Contact />
            </Suspense>
          </main>

          {/* Footer */}
          <footer className="relative z-10 border-t border-white/[0.06] bg-[#0a0f1a]/80 py-8 text-center text-sm text-slate-500 font-mono">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p>&copy; {new Date().getFullYear()} Shivani Suryawanshi. All rights reserved.</p>
              <p className="text-xs text-slate-600">
                Built with React, Three.js, Tailwind &amp; Framer Motion.
              </p>
            </div>
          </footer>

          {/* Floating Actions */}
          <AnimatePresence>
            {showStickyBtn && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3"
              >
                {/* Back to Top */}
                <button
                  onClick={scrollToTop}
                  className="p-3 rounded-full bg-[#111827]/90 text-white border border-white/[0.06] hover:border-indigo-500/30 hover:text-indigo-400 transition-colors shadow-lg focus:outline-none"
                  aria-label="Scroll to top"
                >
                  <ArrowUp size={18} />
                </button>

                {/* Floating Resume Download */}
                <a
                  href="/resume.pdf"
                  download="Shivani_Suryawanshi_Resume.pdf"
                  className="flex items-center space-x-2 px-5 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-bold font-display text-sm shadow-lg shadow-indigo-500/20 hover:scale-105 active:scale-95 transition-all focus:outline-none"
                >
                  <FileText size={16} />
                  <span>Resume</span>
                </a>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      )}
    </ReactLenis>
  );
}
