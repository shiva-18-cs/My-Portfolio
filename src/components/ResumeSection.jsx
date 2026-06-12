import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download, FileText, Briefcase, GraduationCap, Cpu } from 'lucide-react';

export default function ResumeSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section
      id="resume"
      ref={containerRef}
      className="relative min-h-screen py-24 px-6 md:px-12 flex items-center overflow-hidden"
    >
      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-xs font-mono tracking-widest text-indigo-400 mb-2">08.5 / Curriculum Vitae</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white">
            Resume / CV
          </h3>
          <div className="h-[2px] w-20 bg-gradient-to-r from-indigo-500 to-violet-500 mt-4 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Detail Column */}
          <div className="md:col-span-5 flex flex-col justify-center space-y-6 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-2xl font-display font-bold text-white mb-4">
                Professional Blueprint
              </h4>
              <p className="text-slate-400 font-body leading-relaxed mb-6">
                My resume details my academic journey as a B.Tech student, my hands-on internships in AI/ML, project completions, and complete technology skill stacks.
              </p>
              
              <div className="hidden md:flex flex-col space-y-4 text-xs font-mono text-slate-500 mb-8">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  <span>Latest Update: May 2026</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
                  <span>Format: PDF Document</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                  <span>Contains verified project credentials</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Preview Card Column */}
          <div className="md:col-span-7 w-full flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.8, type: 'spring', damping: 15 }}
              className="w-full max-w-md p-[1px] rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 shadow-xl shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all duration-300 preserve-3d"
            >
              {/* Resume Card Preview Face */}
              <div className="bg-[#111827]/95 rounded-2xl p-8 text-left border border-white/5 relative overflow-hidden select-none">
                
                {/* Visual Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                {/* Header preview */}
                <div className="border-b border-white/10 pb-6 mb-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="text-xl font-display font-bold text-white tracking-wide">Shivani Ganesh</h5>
                      <h6 className="text-sm font-semibold text-indigo-400 uppercase mt-1">Suryawanshi</h6>
                    </div>
                    <FileText className="text-pink-500 opacity-80" size={32} />
                  </div>
                  <p className="text-[10px] text-slate-500 font-mono mt-2">Pune, India &bull; suryawanshishivani18@gmail.com</p>
                </div>

                {/* Body Details preview (Education, Exp, Skills) */}
                <div className="space-y-4">
                  {/* Education section */}
                  <div className="flex items-start space-x-3">
                    <GraduationCap size={16} className="text-indigo-400 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase tracking-wider">Education</span>
                      <p className="text-xs text-white font-bold leading-tight mt-0.5">B.Tech in Computer Engineering</p>
                      <p className="text-[10px] text-slate-400 font-mono">JSPM RSCOE &bull; CGPA: 9.82/10</p>
                    </div>
                  </div>

                  {/* Experience section */}
                  <div className="flex items-start space-x-3">
                    <Briefcase size={16} className="text-violet-400 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-mono text-violet-400 font-bold uppercase tracking-wider">Experience</span>
                      <p className="text-xs text-white font-bold leading-tight mt-0.5">AI-ML Virtual Intern</p>
                      <p className="text-[10px] text-slate-400 font-mono">IEduSkills &amp; Thiranex</p>
                    </div>
                  </div>

                  {/* Skills preview */}
                  <div className="flex items-start space-x-3">
                    <Cpu size={16} className="text-pink-400 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-mono text-pink-400 font-bold uppercase tracking-wider">Core Tech Stack</span>
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {['Python', 'C++', 'Machine Learning', 'AWS', 'SQL'].map((skill, index) => (
                          <span key={index} className="text-[8px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Small preview footer */}
                <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center text-[8px] font-mono text-slate-500">
                  <span>Shivani_Suryawanshi_Resume.pdf</span>
                  <span>45 KB</span>
                </div>
              </div>
            </motion.div>

            {/* Download CTA Button below the card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 w-full max-w-md flex justify-center"
            >
              <a
                href="/resume.pdf"
                download="Shivani_Suryawanshi_Resume.pdf"
                className="group relative inline-flex items-center justify-center w-full px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 overflow-hidden hover:scale-105 active:scale-95 transition-all shadow-lg shadow-violet-500/20 focus:outline-none"
              >
                <Download size={20} className="mr-2 group-hover:animate-bounce" />
                <span>Download PDF Resume</span>
              </a>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}

