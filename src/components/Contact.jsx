import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Phone } from 'lucide-react';
import GithubIcon from './GithubIcon';
import LinkedinIcon from './LinkedinIcon';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="text-indigo-400" />,
      label: 'Email Address',
      value: 'suryawanshishivani18@gmail.com',
      href: 'mailto:suryawanshishivani18@gmail.com',
    },
    {
      icon: <LinkedinIcon className="text-indigo-400" />,
      label: 'LinkedIn Profile',
      value: 'linkedin.com/in/shivani-suryawanshi',
      href: 'https://linkedin.com/in/shivani-suryawanshi',
    },
    {
      icon: <GithubIcon className="text-indigo-400" />,
      label: 'GitHub Profile',
      value: 'github.com/shiva-18-cs',
      href: 'https://github.com/shiva-18-cs',
    },
    {
      icon: <Phone className="text-indigo-400" />,
      label: 'Phone Call',
      value: '+91-8767881633',
      href: 'tel:+918767881633',
    },
    {
      icon: <MapPin className="text-violet-400" />,
      label: 'Location',
      value: 'Pune, Maharashtra, India',
      href: 'https://maps.google.com/?q=Pune,Maharashtra,India',
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Quick simple validation
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate sending email api
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Fire confetti animation
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#8b5cf6', '#ec4899', '#818cf8'],
      });

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="relative min-h-screen py-24 px-6 md:px-12 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-xs font-mono tracking-widest text-indigo-400 mb-2">09 / Get In Touch</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white">
            Contact Me
          </h3>
          <div className="h-[2px] w-20 bg-gradient-to-r from-indigo-500 to-violet-500 mt-4 mx-auto lg:mx-0"></div>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Details */}
          <div className="flex flex-col space-y-8">
            <div className="p-8 rounded-2xl glass-panel border border-white/[0.06] shadow-lg bg-white/[0.03] backdrop-blur-xl">
              <h4 className="text-2xl font-display font-bold text-white mb-6 tracking-wider">
                Let's Build Something
              </h4>
              <p className="text-slate-400 mb-8 leading-relaxed font-body">
                I am always open to discussing new opportunities, internship projects, cloud pipelines, or collaborative machine learning development. Feel free to reach out via email, GitHub, or use the contact form.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <a
                    key={i}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.06] hover:border-indigo-500/20 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-lg bg-black/30 border border-white/5">
                      {info.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block">
                        {info.label}
                      </span>
                      <span className="text-sm md:text-base font-bold font-display text-white group-hover:text-indigo-400 transition-colors">
                        {info.value}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="relative">
            {/* Paper Plane Floating decoration */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                x: [0, 8, 0],
                rotate: [0, 8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -top-12 -right-4 text-violet-400 opacity-10 pointer-events-none hidden md:block"
            >
              <Send size={72} className="rotate-[315deg]" />
            </motion.div>

            <div className="p-8 rounded-2xl glass-panel border border-white/[0.06] shadow-lg relative min-h-[420px] flex flex-col justify-center bg-white/[0.03] backdrop-blur-xl">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-xs font-mono tracking-wider text-slate-400 uppercase mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-[#0a0f1a]/60 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:shadow-[0_0_0_2px_rgba(99,102,241,0.1)] transition-all font-body"
                          placeholder="Shivani Suryawanshi"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-mono tracking-wider text-slate-400 uppercase mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-[#0a0f1a]/60 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:shadow-[0_0_0_2px_rgba(99,102,241,0.1)] transition-all font-body"
                          placeholder="example@gmail.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-mono tracking-wider text-slate-400 uppercase mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full bg-[#0a0f1a]/60 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:shadow-[0_0_0_2px_rgba(99,102,241,0.1)] transition-all font-body"
                        placeholder="Project Collaboration"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-mono tracking-wider text-slate-400 uppercase mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows="5"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full bg-[#0a0f1a]/60 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:shadow-[0_0_0_2px_rgba(99,102,241,0.1)] transition-all font-body resize-none"
                        placeholder="Hi Shivani, I'd love to connect..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full relative inline-flex items-center justify-center px-8 py-3.5 rounded-lg overflow-hidden font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-500 hover:scale-[1.02] active:scale-98 shadow-lg shadow-indigo-500/20 transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:scale-100"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={16} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center p-6 space-y-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                    >
                      <CheckCircle2 size={72} className="text-indigo-400" />
                    </motion.div>
                    
                    <div>
                      <h4 className="text-2xl font-display font-bold text-white mb-2">Message Sent!</h4>
                      <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                        Thank you for reaching out, Shivani. Your message has been received, and she will get back to you shortly.
                      </p>
                    </div>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex items-center justify-center px-6 py-2 rounded-lg border border-white/10 hover:border-indigo-500 hover:text-white text-sm font-bold bg-[#0a0f1a]/30 transition-all duration-300 focus:outline-none"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

