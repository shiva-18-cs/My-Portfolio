import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';
import GithubIcon from './GithubIcon';

// Custom Counter Hook or Logic for Statistics
function AnimatedStat({ value, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = React.useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    // Parse numeric parts out of stat values
    const numericPart = parseInt(value, 10);
    const suffix = value.replace(numericPart.toString(), '');
    
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = Math.ceil(numericPart / (duration / 16)); // approx 60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericPart) {
        clearInterval(timer);
        setDisplayValue(value); // Set full original string at the end
      } else {
        setDisplayValue(`${start}${suffix}`);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center p-4 rounded-xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06]">
      <div className="text-2xl md:text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400">
        {displayValue || '0'}
      </div>
      <div className="text-[10px] md:text-xs text-slate-400 font-mono tracking-wider mt-1">
        {label}
      </div>
    </div>
  );
}

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: 'easeOut' } 
    }
  };

  const stats = [
    { value: '4th', label: 'Semester' },
    { value: '2', label: 'Internships' },
    { value: '4+', label: 'Projects' },
    { value: '9.82/10', label: 'CGPA' }
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-screen py-24 px-6 md:px-12 flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-xs font-mono tracking-widest text-indigo-400 mb-2">01 / Who I Am</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white">
            About Me
          </h3>
          <div className="h-[2px] w-20 bg-gradient-to-r from-indigo-500 to-violet-500 mt-4 mx-auto lg:mx-0"></div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            className="flex flex-col space-y-6"
          >
            <div className="p-8 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06]">
              <p className="text-base md:text-lg text-slate-300 font-body leading-relaxed">
                Computer Science student passionate about AI/ML and Data Science with 
                experience in Python, EDA, and machine learning fundamentals. Skilled in 
                data cleaning, feature engineering, and visualization to derive insights 
                from data. Actively strengthening problem-solving skills through Data 
                Structures and Algorithms practice.
              </p>

              {/* Verified Contact Details Grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/[0.06] pt-6 text-xs md:text-sm">
                <a href="mailto:suryawanshishivani18@gmail.com" className="flex items-center space-x-3 text-slate-300 hover:text-indigo-400 transition-colors group">
                  <Mail size={16} className="text-indigo-400 group-hover:scale-110 transition-transform" />
                  <span className="truncate">suryawanshishivani18@gmail.com</span>
                </a>
                <a href="https://linkedin.com/in/shivani-suryawanshi" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-slate-300 hover:text-indigo-400 transition-colors group">
                  <LinkedinIcon size={16} className="text-indigo-400 group-hover:scale-110 transition-transform" />
                  <span className="truncate">linkedin.com/in/shivani-suryawanshi</span>
                </a>
                <a href="https://github.com/shiva-18-cs" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-slate-300 hover:text-indigo-400 transition-colors group">
                  <GithubIcon size={16} className="text-indigo-400 group-hover:scale-110 transition-transform" />
                  <span>github.com/shiva-18-cs</span>
                </a>
                <div className="flex items-center space-x-3 text-slate-300">
                  <MapPin size={16} className="text-violet-400" />
                  <span>Pune, Maharashtra, India</span>
                </div>
              </div>
            </div>

            {/* Stats Counter Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
              {stats.map((stat, i) => (
                <AnimatedStat key={i} value={stat.value} label={stat.label} />
              ))}
            </div>
          </motion.div>

          {/* Right Decorative Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="h-[300px] md:h-[450px] w-full flex items-center justify-center relative"
          >
            {/* Decorative gradient orbs */}
            <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-indigo-500/20 to-violet-500/20 blur-3xl" />
            <div className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-violet-500/15 to-pink-500/10 blur-2xl translate-x-8 -translate-y-8" />
            
            {/* Central decorative element */}
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-indigo-500/20" />
              <div className="absolute inset-3 rounded-full border border-violet-500/15" />
              <div className="absolute inset-6 rounded-full border border-indigo-500/10" />
              
              {/* Inner gradient circle */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-indigo-500/10 to-violet-500/10 backdrop-blur-xl" />
              
              {/* Abstract grid pattern */}
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 200">
                <defs>
                  <linearGradient id="aboutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="80" fill="none" stroke="url(#aboutGrad)" strokeWidth="0.5" strokeDasharray="4 4" />
                <circle cx="100" cy="100" r="60" fill="none" stroke="url(#aboutGrad)" strokeWidth="0.5" strokeDasharray="2 6" />
                <circle cx="100" cy="100" r="40" fill="none" stroke="url(#aboutGrad)" strokeWidth="0.5" />
                {/* Node dots */}
                <circle cx="100" cy="20" r="3" fill="#6366f1" opacity="0.6" />
                <circle cx="170" cy="70" r="2.5" fill="#8b5cf6" opacity="0.5" />
                <circle cx="160" cy="140" r="3" fill="#6366f1" opacity="0.6" />
                <circle cx="40" cy="140" r="2.5" fill="#8b5cf6" opacity="0.5" />
                <circle cx="30" cy="70" r="3" fill="#6366f1" opacity="0.6" />
                <circle cx="100" cy="100" r="4" fill="#818cf8" opacity="0.8" />
                {/* Connecting lines */}
                <line x1="100" y1="20" x2="170" y2="70" stroke="#6366f1" strokeWidth="0.5" opacity="0.3" />
                <line x1="170" y1="70" x2="160" y2="140" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.3" />
                <line x1="160" y1="140" x2="40" y2="140" stroke="#6366f1" strokeWidth="0.5" opacity="0.3" />
                <line x1="40" y1="140" x2="30" y2="70" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.3" />
                <line x1="30" y1="70" x2="100" y2="20" stroke="#6366f1" strokeWidth="0.5" opacity="0.3" />
                <line x1="100" y1="100" x2="100" y2="20" stroke="#818cf8" strokeWidth="0.3" opacity="0.2" />
                <line x1="100" y1="100" x2="170" y2="70" stroke="#818cf8" strokeWidth="0.3" opacity="0.2" />
                <line x1="100" y1="100" x2="160" y2="140" stroke="#818cf8" strokeWidth="0.3" opacity="0.2" />
                <line x1="100" y1="100" x2="40" y2="140" stroke="#818cf8" strokeWidth="0.3" opacity="0.2" />
                <line x1="100" y1="100" x2="30" y2="70" stroke="#818cf8" strokeWidth="0.3" opacity="0.2" />
              </svg>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
