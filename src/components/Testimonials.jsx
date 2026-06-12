import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, User } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Shivani showed exceptional dedication during her AI/ML internship. Her data analysis skills and enthusiasm for ML are impressive.",
      name: "Internship Mentor",
      role: "IEduSkills",
      avatar: null
    },
    {
      id: 2,
      quote: "One of the most hardworking students I've taught. Her CGPA of 9.82 reflects her commitment to excellence.",
      name: "Professor",
      role: "JSPM RSCOE",
      avatar: null
    },
    {
      id: 3,
      quote: "Shivani is a fantastic team collaborator. She brought great ideas to our hackathon team at TechNeeti 2025.",
      name: "Peer",
      role: "TechNeeti Hackathon",
      avatar: null
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative min-h-screen py-24 px-6 md:px-12 flex items-center overflow-hidden">
      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-xs font-mono tracking-widest text-indigo-400 mb-2">08 / Voices &amp; Feedback</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white">
            Testimonials
          </h3>
          <div className="h-[2px] w-20 bg-gradient-to-r from-indigo-500 to-violet-500 mt-4 mx-auto"></div>
        </div>

        {/* Stack Deck Carousel */}
        <div className="relative h-[380px] sm:h-[320px] md:h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {testimonials.map((item, idx) => {
              if (idx !== activeIndex) return null;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8, y: 30, rotateZ: -5 }}
                  animate={{ opacity: 1, scale: 1, y: 0, rotateZ: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -30, rotateZ: 5 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute w-full max-w-2xl p-8 md:p-10 rounded-2xl glass-panel border border-white/[0.06] flex flex-col justify-between shadow-xl bg-white/[0.03] backdrop-blur-xl"
                >
                  <Quote className="absolute top-4 right-6 text-violet-400 opacity-20" size={48} />
                  
                  <div>
                    <p className="text-slate-300 text-base md:text-lg italic leading-relaxed mb-6 font-body">
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="flex items-center space-x-4 border-t border-white/[0.06] pt-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400">
                      <User size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white font-display tracking-wider">
                        {item.name}
                      </h4>
                      <p className="text-xs text-indigo-400 font-semibold">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center space-x-6 mt-12">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full border border-white/10 hover:border-indigo-500/30 hover:text-indigo-300 bg-[#0a0f1a]/60 hover:scale-105 active:scale-95 transition-all focus:outline-none text-slate-300"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-colors focus:outline-none ${
                  activeIndex === idx ? 'bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]' : 'bg-white/20'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-full border border-white/10 hover:border-indigo-500/30 hover:text-indigo-300 bg-[#0a0f1a]/60 hover:scale-105 active:scale-95 transition-all focus:outline-none text-slate-300"
            aria-label="Next Testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}

