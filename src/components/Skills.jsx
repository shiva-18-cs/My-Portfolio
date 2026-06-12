import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, FileCode, Smartphone, Database, 
  Brain, Network, Sliders, Cpu, 
  Columns, Binary, BarChart3, LineChart, 
  AreaChart, Terminal, Users, Zap, 
  FileText, Layers, Grid, Boxes, Code
} from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { name: 'All', id: 'All' },
    { name: 'Programming & Scripting', id: 'Programming' },
    { name: 'Databases', id: 'Databases' },
    { name: 'AI / ML', id: 'AI/ML' },
    { name: 'Data Science Stack', id: 'Data Science' },
    { name: 'Tools & Platforms', id: 'Tools' },
    { name: 'Core Abilities', id: 'Core' },
  ];

  const skillsData = [
    // Programming & Scripting
    { name: 'C', category: 'Programming', icon: <Code size={22} /> },
    { name: 'C++', category: 'Programming', icon: <Code2 size={22} /> },
    { name: 'Python', category: 'Programming', icon: <FileCode size={22} /> },
    { name: 'Swift', category: 'Programming', icon: <Smartphone size={22} /> },

    // Databases
    { name: 'MySQL', category: 'Databases', icon: <Database size={22} /> },
    { name: 'MongoDB (Learning)', category: 'Databases', icon: <Database size={22} /> },

    // AI/ML
    { name: 'Machine Learning', category: 'AI/ML', icon: <Brain size={22} /> },
    { name: 'Deep Learning', category: 'AI/ML', icon: <Network size={22} /> },
    { name: 'Scikit-learn', category: 'AI/ML', icon: <Sliders size={22} /> },
    { name: 'TensorFlow', category: 'AI/ML', icon: <Cpu size={22} /> },
    { name: 'EDA', category: 'AI/ML', icon: <BarChart3 size={22} /> },
    { name: 'Feature Engineering', category: 'AI/ML', icon: <Cpu size={22} /> },

    // Data Science Stack
    { name: 'Pandas', category: 'Data Science', icon: <Columns size={22} /> },
    { name: 'NumPy', category: 'Data Science', icon: <Binary size={22} /> },
    { name: 'Matplotlib', category: 'Data Science', icon: <LineChart size={22} /> },
    { name: 'Seaborn', category: 'Data Science', icon: <AreaChart size={22} /> },
    { name: 'Google Colab', category: 'Data Science', icon: <Terminal size={22} /> },

    // Tools & Platforms
    { name: 'GitHub', category: 'Tools', icon: <GithubIcon size={22} /> },
    { name: 'VS Code', category: 'Tools', icon: <Code2 size={22} /> },
    { name: 'Google Colab', category: 'Tools', icon: <Terminal size={22} /> },

    // Core Abilities
    { name: 'Problem-Solving', category: 'Core', icon: <Zap size={22} /> },
    { name: 'Team Collaboration', category: 'Core', icon: <Users size={22} /> },
    { name: 'Presentation Skills', category: 'Core', icon: <FileText size={22} /> },
    { name: 'DSA', category: 'Core', icon: <Layers size={22} /> },
    { name: 'STL', category: 'Core', icon: <Grid size={22} /> },
    { name: 'OOP', category: 'Core', icon: <Boxes size={22} /> },
  ];

  const filteredSkills = activeCategory === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="relative min-h-screen py-24 px-6 md:px-12 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-xs font-mono tracking-widest text-indigo-400 mb-2">02 / Core Abilities</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white">
            Technical Skills
          </h3>
          <div className="h-[2px] w-20 bg-gradient-to-r from-indigo-500 to-violet-500 mt-4 mx-auto"></div>
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-lg text-xs md:text-sm font-semibold tracking-wider font-display border transition-all duration-300 focus:outline-none ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white border-transparent shadow-lg'
                  : 'bg-transparent text-slate-400 border-white/[0.06] hover:border-white/10 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 max-w-5xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                key={`${skill.name}-${skill.category}`}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.02 }}
                className="group p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-indigo-500/20 transition-all duration-300 flex flex-col items-center justify-center text-center gap-3"
              >
                {/* Icon */}
                <div className="text-slate-500 group-hover:text-indigo-400 transition-colors duration-300">
                  {skill.icon}
                </div>

                {/* Skill Name */}
                <span className="text-[10px] md:text-xs font-medium text-slate-300 group-hover:text-white transition-colors leading-tight">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
