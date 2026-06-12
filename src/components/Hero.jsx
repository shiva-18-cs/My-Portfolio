import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Phone } from 'lucide-react';

export default function Hero() {
  const subtitles = [
    'AI/ML Engineer',
    'Data Scientist',
    'B.Tech CS Student',
    'Problem Solver',
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % subtitles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden pt-20"
    >
      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-500/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center flex flex-col items-center">
        {/* Top badges */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-3 mb-10"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs md:text-sm font-medium tracking-wider text-indigo-400">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
            <span>Welcome to the Future of Data</span>
          </div>

          <a
            href="tel:+918767881633"
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] hover:border-indigo-500/30 text-xs md:text-sm font-medium tracking-wider text-slate-400 hover:text-indigo-300 transition-colors"
          >
            <Phone size={12} />
            <span>+91-8767881633</span>
          </a>
        </motion.div>

        {/* Name — clean typography, no 3D */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-1 mb-6"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tight leading-[0.9]">
            Shivani
          </h1>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 tracking-tight leading-[0.9]">
            Suryawanshi
          </h1>
        </motion.div>

        {/* Subtitles Cycler */}
        <div className="h-10 mt-4 mb-4 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="text-xl md:text-2xl font-display font-semibold tracking-wide text-indigo-300"
            >
              {subtitles[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-base md:text-xl text-slate-400 max-w-xl mb-10 font-body font-medium leading-relaxed"
        >
          Turning Data into Decisions. Code into Impact.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto px-4"
        >
          <button
            onClick={scrollToProjects}
            className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-lg overflow-hidden font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-indigo-500/20 focus:outline-none"
          >
            <span>View My Work</span>
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="/resume.pdf"
            download="Shivani_Suryawanshi_Resume.pdf"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-white/10 hover:border-indigo-500/30 hover:text-indigo-300 font-semibold bg-white/[0.03] backdrop-blur-sm hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none text-slate-300"
          >
            <span>Download Resume</span>
            <Download size={18} className="ml-2" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center pointer-events-none"
      >
        <span className="text-xs text-slate-500 font-mono tracking-widest mb-2">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/10 flex justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-indigo-400" />
        </div>
      </motion.div>
    </section>
  );
}
