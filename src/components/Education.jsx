import React from 'react';
import { GraduationCap, School, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Education() {
  const educationData = [
    {
      id: 1,
      degree: 'B.Tech in Computer Engineering',
      institution: "JSPM's Rajarshi Shahu College of Engineering, Pune",
      status: 'Graduating 2028',
      scoreLabel: 'CGPA',
      scoreValue: '9.82 / 10',
      details: 'Focusing on core Computer Engineering fundamentals including Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), Database Systems (SQL), and Machine Learning.',
      icon: <GraduationCap size={32} className="text-indigo-400" />,
      glowColor: 'from-indigo-500 to-violet-500',
    },
    {
      id: 2,
      degree: 'Secondary School (SSC - 10th) / MHT-CET',
      institution: 'St. Lawrence High School and Junior College, Nashik',
      status: '2022 / 2024',
      scoreLabel: 'SSC / MHT-CET Score',
      scoreValue: '96.4% / 96.4 percentile',
      details: 'Completed secondary and higher secondary education in science and mathematics. Secured strong foundational grades in computer programming structures, algebra, and physics.',
      icon: <School size={32} className="text-violet-400" />,
      glowColor: 'from-violet-500 to-indigo-500',
    },
  ];

  // 3D Tilt handlers
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const factorX = 10 / (rect.width / 2);
    const factorY = 10 / (rect.height / 2);
    
    card.style.transform = `perspective(1000px) rotateX(${-y * factorY}deg) rotateY(${x * factorX}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <section id="education" className="relative min-h-screen py-24 px-6 md:px-12 flex items-center overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-xs font-mono tracking-widest text-indigo-400 mb-2">05 / Academic Foundation</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white">
            Education
          </h3>
          <div className="h-[2px] w-20 bg-gradient-to-r from-indigo-500 to-violet-500 mt-4 mx-auto"></div>
        </div>

        {/* Side-by-Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative p-[1px] rounded-2xl bg-gradient-to-r from-white/10 to-white/5 transition-all duration-200 ease-out"
              style={{
                transformStyle: 'preserve-3d',
                transition: 'transform 0.15s ease-out',
              }}
            >
              {/* Inner Card content */}
              <div className="relative h-full bg-[#111827]/90 rounded-2xl p-8 md:p-10 flex flex-col justify-between overflow-hidden border border-white/[0.06] shadow-lg">
                
                {/* Visual Icon Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    {edu.icon}
                  </div>
                  <span className="inline-flex items-center space-x-2 text-[10px] font-mono tracking-widest font-semibold px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-slate-300">
                    <Calendar size={10} className="mr-1.5" />
                    <span>{edu.status}</span>
                  </span>
                </div>

                {/* Info block */}
                <div>
                  <h4 className="text-2xl font-display font-bold text-white mb-2 tracking-wide">
                    {edu.degree}
                  </h4>
                  
                  <h5 className="text-sm font-semibold tracking-wide text-indigo-400 mb-6">
                    {edu.institution}
                  </h5>

                  {/* Highlights Score Badge */}
                  <div className="mb-6 p-4 rounded-xl bg-[#0a0f1a]/60 border border-white/[0.06] flex items-center space-x-3">
                    <Award className="text-indigo-400 flex-shrink-0" size={20} />
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 tracking-widest block leading-tight">{edu.scoreLabel}</span>
                      <span className="text-base font-bold font-display text-white">{edu.scoreValue}</span>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm md:text-base leading-relaxed font-body">
                    {edu.details}
                  </p>
                </div>

                {/* Decorative gradient bottom bar */}
                <div className={`mt-8 h-1 w-full bg-gradient-to-r ${edu.glowColor} rounded-full opacity-60`} />

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
