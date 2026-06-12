import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Terminal } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: 'AI-ML Virtual Intern',
      company: 'IEduSkills — AICTE + Google for Developers',
      type: '10-Week Virtual Internship',
      duration: 'Oct 2025 – Dec 2025',
      desc: 'Gained hands-on experience with end-to-end Machine Learning workflows: data preprocessing, model training, validation, and testing.',
      highlights: [
        'Completed a 10-week virtual internship focused on AI and ML fundamentals',
        'Gained hands-on experience with ML workflows: data preprocessing, model building, and evaluation',
        'Worked on data cleaning, feature engineering, and EDA',
        'Applied ML concepts to solve real-world data problems'
      ],
      tools: ['Python', 'Google Colab', 'Scikit-learn', 'TensorFlow', 'EDA'],
      color: 'border-indigo-500',
    },
    {
      id: 2,
      role: 'AI-ML Virtual Intern',
      company: 'Thiranex',
      type: 'Online Internship',
      duration: 'Online Internship',
      desc: 'Focused on acquiring fundamentals in artificial intelligence, learning data ingestion, training pipelines, and core ML models.',
      highlights: [
        'Hands-on experience in AI/ML concepts and practical applications'
      ],
      tools: ['Python', 'Machine Learning', 'Data Preprocessing'],
      color: 'border-violet-500',
    },
  ];

  return (
    <section id="experience" className="relative min-h-screen py-24 px-6 md:px-12 flex items-center overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative z-10">
        
        {/* Section Heading */}
        <div className="mb-20 text-center">
          <h2 className="text-xs font-mono tracking-widest text-indigo-400 mb-2">04 / The Journey</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white">
            Work Experience
          </h3>
          <div className="h-[2px] w-20 bg-gradient-to-r from-indigo-500 to-violet-500 mt-4 mx-auto"></div>
        </div>

        {/* Timeline container */}
        <div className="relative">
          
          {/* Vertical central timeline line */}
          <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 via-violet-500 to-transparent opacity-20" />

          {/* Timeline Cards */}
          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`flex flex-col md:flex-row items-stretch w-full ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Card Section */}
                  <div className="w-full md:w-1/2 flex justify-start md:justify-end pl-8 md:pl-0 md:px-10">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.8 }}
                      className={`w-full p-8 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] border-l-4 ${exp.color} relative`}
                    >
                      {/* Timeline Duration */}
                      <div className="flex items-center space-x-2 text-indigo-400 mb-3">
                        <Calendar size={14} />
                        <span className="text-xs font-mono tracking-widest font-semibold">
                          {exp.duration}
                        </span>
                      </div>
                      
                      {/* Role & Company Header */}
                      <h4 className="text-xl md:text-2xl font-display font-bold text-white mb-1">
                        {exp.role}
                      </h4>
                      
                      <h5 className="text-sm font-semibold tracking-wide text-indigo-400 mb-4">
                        {exp.company} &bull; <span className="font-normal text-slate-400">{exp.type}</span>
                      </h5>
                      
                      {/* Description Paragraph */}
                      <p className="text-slate-300 text-sm md:text-base leading-relaxed font-body mb-4">
                        {exp.desc}
                      </p>

                      {/* Highlights Bullet List */}
                      <ul className="space-y-2 mb-6">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start text-xs md:text-sm text-slate-400 font-body">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 mr-2.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tools Tag Badges */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                        {exp.tools.map((tool, idx) => (
                          <span 
                            key={idx} 
                            className="text-[10px] font-mono px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-slate-400 font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                    </motion.div>
                  </div>

                  {/* Icon/Dot connector */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 mt-10 md:mt-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 200, damping: 10, delay: 0.2 }}
                      className="w-10 h-10 rounded-full border-2 border-white/10 bg-[#0a0f1a] flex items-center justify-center shadow-lg"
                    >
                      <Briefcase size={16} className="text-indigo-400" />
                    </motion.div>
                  </div>

                  {/* Spacer for structure */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
