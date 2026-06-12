import React from 'react';
import { BarChart, GitBranch, Zap } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function GitHubStats() {
  const profileUrl = 'https://github.com/shiva-18-cs';
  const username = 'shiva-18-cs';

  const statsCardUrl = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight`;
  const topLangsCardUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight`;
  const streakCardUrl = `https://streak-stats.demolab.com/?user=${username}&theme=tokyonight`;

  return (
    <section id="github" className="relative min-h-screen py-24 px-6 md:px-12 flex items-center overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-xs font-mono tracking-widest text-indigo-400 mb-2">07 / Open Source Contributions</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white">
            GitHub Statistics
          </h3>
          <div className="h-[2px] w-20 bg-gradient-to-r from-indigo-500 to-violet-500 mt-4 mx-auto"></div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Stats Summary */}
          <div className="rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] p-6 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center space-x-2 text-indigo-400 mb-4">
                <BarChart size={20} />
                <span className="text-xs font-mono tracking-wider font-bold">Contribution Summary</span>
              </div>
              <div className="w-full flex items-center justify-center p-2 rounded-xl bg-black/20 border border-white/[0.06]">
                <img
                  src={statsCardUrl}
                  alt={`${username} GitHub Stats`}
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="text-xs text-slate-500 font-mono mt-4">
              Real-time snapshot of commits, pull requests, issues, and stars.
            </p>
          </div>

          {/* Card 2: Top Languages */}
          <div className="rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] p-6 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center space-x-2 text-violet-400 mb-4">
                <GitBranch size={20} />
                <span className="text-xs font-mono tracking-wider font-bold">Language Breakdown</span>
              </div>
              <div className="w-full flex items-center justify-center p-2 rounded-xl bg-black/20 border border-white/[0.06]">
                <img
                  src={topLangsCardUrl}
                  alt={`${username} Top Languages`}
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="text-xs text-slate-500 font-mono mt-4">
              Breakdown of languages used across repositories.
            </p>
          </div>

          {/* Card 3: Streak Stats */}
          <div className="rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] p-6 flex flex-col justify-between shadow-lg md:col-span-2 lg:col-span-1">
            <div>
              <div className="flex items-center space-x-2 text-pink-400 mb-4">
                <Zap size={20} />
                <span className="text-xs font-mono tracking-wider font-bold">Developer Streak</span>
              </div>
              <div className="w-full flex items-center justify-center p-2 rounded-xl bg-black/20 border border-white/[0.06]">
                <img
                  src={streakCardUrl}
                  alt={`${username} Streak Stats`}
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="text-xs text-slate-500 font-mono mt-4">
              Continuous contributions, total active days, and best streak metrics.
            </p>
          </div>

        </div>

        {/* Call to Action Button */}
        <div className="mt-12 text-center">
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-500 hover:scale-105 active:scale-95 shadow-lg shadow-indigo-500/20 transition-all duration-300 focus:outline-none"
          >
            <GithubIcon size={20} className="mr-2" />
            <span>Follow @shiva-18-cs on GitHub</span>
          </a>
        </div>

      </div>
    </section>
  );
}
