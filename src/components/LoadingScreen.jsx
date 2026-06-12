import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  /* Fast progress — finishes in roughly 1 second */
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return Math.min(prev + Math.floor(Math.random() * 18) + 12, 100);
      });
    }, 80);
    return () => clearInterval(timer);
  }, []);

  /* Trigger onComplete shortly after reaching 100% */
  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(onComplete, 400);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  const loadingText =
    progress < 40
      ? 'Initializing...'
      : progress < 80
        ? 'Loading assets...'
        : 'Almost ready...';

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center"
        style={{ backgroundColor: '#0a0f1a' }}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
      >
        <div className="flex flex-col items-center w-full max-w-xs px-6">
          {/* SS Monogram */}
          <motion.div
            className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
            style={{
              border: '1.5px solid rgba(99,102,241,0.3)',
              backgroundColor: '#0a0f1a',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '1.25rem',
              color: '#818cf8',
            }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            SS
          </motion.div>

          {/* Name */}
          <h1
            className="text-xl mb-6 tracking-wide"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              color: '#f1f5f9',
            }}
          >
            Shivani Suryawanshi
          </h1>

          {/* Progress bar */}
          <div
            className="w-full rounded-full overflow-hidden mb-4"
            style={{
              height: '4px',
              backgroundColor: 'rgba(255,255,255,0.06)',
            }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
              }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.08, ease: 'linear' }}
            />
          </div>

          {/* Loading text */}
          <p
            className="text-xs tracking-wider"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: '#64748b',
            }}
          >
            {loadingText}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
