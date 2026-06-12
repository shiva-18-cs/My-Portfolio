import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, RefreshCw, Layers } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      title: 'Insurance Dataset Analysis',
      date: 'Oct 2025',
      tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
      bullets: [
        'Applied feature scaling and correlation-based feature selection',
        'Performed EDA, cleaned data, and engineered BMI category features'
      ],
      github: 'https://github.com/shiva-18-cs',
      live: '#',
    },
    {
      id: 2,
      title: 'Heart Disease Dataset Analysis',
      date: 'Nov 2025',
      tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
      bullets: [
        'Conducted EDA and handled invalid medical values',
        'Created medical features, applied encoding, scaling, and correlation analysis',
        'Implemented Supervised Machine Learning models'
      ],
      github: 'https://github.com/shiva-18-cs',
      live: '#',
    },
    {
      id: 3,
      title: 'Supervised ML Implementation',
      date: 'Dec 2025',
      tags: ['Python', 'Scikit-learn'],
      bullets: [
        'Implemented Linear Regression, Logistic Regression, KNN, SVM, Decision Tree, and Random Forest models',
        'Trained and evaluated models on real-world datasets'
      ],
      github: 'https://github.com/shiva-18-cs',
      live: '#',
    },
    {
      id: 4,
      title: 'ML Optimization & Unsupervised',
      date: 'Jan 2026',
      tags: ['Python', 'Scikit-learn'],
      bullets: [
        'Implemented clustering algorithms: KMeans and DBSCAN',
        'Applied PCA for dimensionality reduction'
      ],
      github: 'https://github.com/shiva-18-cs',
      live: '#',
    },
  ];

  // State to track mobile touch flips
  const [flippedCards, setFlippedCards] = useState({});

  const handleCardClick = (id) => {
    // Only toggle flip on click for small screens or mobile layout
    if (window.innerWidth < 1024) {
      setFlippedCards(prev => ({
        ...prev,
        [id]: !prev[id]
      }));
    }
  };

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Slight tilt factor to keep the 3D depth alive
    const factorX = 8 / (rect.width / 2);
    const factorY = 8 / (rect.height / 2);
    
    card.style.transform = `perspective(1200px) rotateX(${-y * factorY}deg) rotateY(${x * factorX}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <section id="projects" className="relative min-h-screen py-24 px-6 md:px-12 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-xs font-mono tracking-widest text-indigo-400 mb-2">03 / Hands-On Work</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white">
            Featured Projects
          </h3>
          <div className="h-[2px] w-20 bg-gradient-to-r from-indigo-500 to-violet-500 mt-4 mx-auto lg:mx-0"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projectsData.map((project) => {
            const isFlipped = !!flippedCards[project.id];
            
            return (
              <div
                key={project.id}
                onClick={() => handleCardClick(project.id)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="flip-card h-[380px] w-full cursor-pointer relative"
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.15s ease-out',
                }}
              >
                {/* 3D Flip Card Inner Container */}
                <div 
                  className={`flip-card-inner w-full h-full relative ${isFlipped ? 'flipped' : ''}`}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  
                  {/* FRONT FACE */}
                  <div className="flip-card-front absolute inset-0 bg-[#111827]/90 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-between overflow-hidden border border-white/[0.06] shadow-lg select-none">
                    
                    {/* Subtle grid background */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                    <div>
                      {/* Header row */}
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-[10px] font-mono tracking-widest font-bold px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-slate-400">
                          {project.date}
                        </span>
                        <div className="flex items-center space-x-2 text-[10px] text-slate-500 font-mono">
                          <Layers size={12} className="text-indigo-400" />
                          <span>AI/ML Model</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h4 className="text-2xl md:text-3xl font-display font-bold text-white mb-6 tracking-wide leading-tight">
                        {project.title}
                      </h4>

                      {/* Tech stack capsules */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <span 
                            key={idx} 
                            className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-slate-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hint to Flip */}
                    <div className="flex items-center text-xs font-mono text-indigo-400 mt-6">
                      <RefreshCw size={14} className="mr-2 animate-spin-slow" />
                      <span className="tracking-wider">Hover / Tap to Reveal Details</span>
                    </div>

                  </div>

                  {/* BACK FACE */}
                  <div className="flip-card-back absolute inset-0 bg-[#111827]/95 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-between overflow-hidden border border-white/[0.06] shadow-lg select-none">

                    <div>
                      {/* Back Header */}
                      <div className="border-b border-white/[0.06] pb-4 mb-6">
                        <h5 className="text-sm font-display font-bold tracking-widest text-indigo-400">
                          Project Details
                        </h5>
                      </div>

                      {/* Description Bullet points */}
                      <ul className="space-y-4 text-left">
                        {project.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start text-slate-300 text-sm font-body leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 mr-3 flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center space-x-4 pt-6 border-t border-white/[0.06]">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-white/[0.06] hover:border-indigo-500/30 hover:text-indigo-300 font-bold bg-white/[0.02] transition-all duration-300 text-xs focus:outline-none flex-1"
                      >
                        <GithubIcon size={14} className="mr-2" />
                        <span>GitHub</span>
                      </a>

                      <a
                        href={project.live}
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-500 hover:scale-105 active:scale-95 shadow-lg transition-all duration-300 text-xs focus:outline-none flex-1"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={14} className="ml-2" />
                      </a>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
