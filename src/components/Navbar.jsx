import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'GitHub', id: 'github' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.remove('light-theme');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.add('light-theme');
    }
  }, [isDarkMode]);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#0a0f1a]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center space-x-2 text-2xl font-display font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400 focus:outline-none"
        >
          <span>SS</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm font-medium transition-colors font-display focus:outline-none ${
                activeSection === link.id
                  ? 'text-indigo-400 font-semibold relative after:content-[""] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-indigo-500 after:to-violet-500'
                  : 'text-slate-400 hover:text-indigo-300'
              }`}
            >
              {link.name}
            </button>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full border border-white/[0.06] hover:border-indigo-500/30 hover:text-indigo-400 transition-colors focus:outline-none"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={18} className="text-indigo-400" /> : <Moon size={18} className="text-violet-400" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center space-x-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full border border-white/[0.06] focus:outline-none"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={18} className="text-indigo-400" /> : <Moon size={18} className="text-violet-400" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-300 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#111827]/95 border-b border-white/[0.06] border-t mt-3 overflow-hidden backdrop-blur-xl"
          >
            <div className="px-6 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left text-base font-medium py-2 font-display focus:outline-none ${
                    activeSection === link.id
                      ? 'text-indigo-400 border-l-2 border-indigo-500 pl-3 font-semibold'
                      : 'text-slate-400 pl-3'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
