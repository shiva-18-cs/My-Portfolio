import React from 'react';
import { Award, Trophy, GraduationCap, Calendar, Compass } from 'lucide-react';

export default function Certifications() {
  const certificationsData = [
    {
      id: 1,
      name: 'AI-ML Virtual Internship Certificate',
      issuer: 'AICTE + EduSkills + Google for Developers',
      year: '2025',
      desc: 'Completed a 10-week rigorous virtual internship program in Artificial Intelligence & Machine Learning foundations.',
      icon: <Award size={28} className="text-indigo-400" />,
      badgeColor: 'border-indigo-500',
    },
    {
      id: 2,
      name: 'TechNeeti 2025 – State Level Hackathon',
      issuer: "Coding Club, JSPM's RSCOE",
      year: '2025',
      desc: 'Participated and collaborated in a 24-hour state-level hackathon, solving practical real-world engineering problem statements.',
      icon: <Trophy size={28} className="text-violet-400" />,
      badgeColor: 'border-violet-500',
    },
    {
      id: 3,
      name: 'SQL Using AI Workshop – AI For Techies',
      issuer: 'AI For Techies',
      year: '2025',
      desc: 'Completed workshop on utilizing artificial intelligence to optimize and write SQL queries for database data analysis and business insights.',
      icon: <GraduationCap size={28} className="text-pink-400" />,
      badgeColor: 'border-pink-500',
    },
  ];

  return (
    <section id="certifications" className="relative min-h-screen py-24 px-6 md:px-12 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-xs font-mono tracking-widest text-indigo-400 mb-2">06 / Verified Credentials</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white">
            Certifications &amp; Achievements
          </h3>
          <div className="h-[2px] w-20 bg-gradient-to-r from-indigo-500 to-violet-500 mt-4 mx-auto"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className={`p-8 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] border-l-4 ${cert.badgeColor} flex flex-col justify-between hover:scale-[1.01] hover:border-indigo-500/30 transition-all duration-300 shadow-lg`}
            >
              <div>
                {/* Header Badge Icon */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex-shrink-0">
                    {cert.icon}
                  </div>
                  
                  <div className="flex items-center space-x-1.5 text-[10px] font-mono tracking-wider text-slate-500 font-bold">
                    <Calendar size={10} />
                    <span>{cert.year}</span>
                  </div>
                </div>
                
                {/* Title and Issuer */}
                <h4 className="text-lg md:text-xl font-bold text-white leading-snug font-display mb-2 tracking-wide">
                  {cert.name}
                </h4>
                
                <span className="text-xs text-indigo-400 font-bold tracking-wider block mb-4">
                  {cert.issuer}
                </span>

                {/* Description details */}
                <p className="text-slate-400 text-xs md:text-sm font-body leading-relaxed">
                  {cert.desc}
                </p>
              </div>

              {/* Verified badge footer */}
              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center space-x-2 text-[9px] font-mono text-slate-500 tracking-widest">
                <Compass size={12} className="text-violet-400" />
                <span>Credential Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
