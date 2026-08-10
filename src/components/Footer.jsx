import React from 'react';
import { ArrowUp, Code2, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 z-10 bg-[#07090e]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <span className="text-sm font-bold text-white block">
              Muhammad Haris Ghaffar
            </span>
            <span className="text-[11px] font-mono text-slate-400 block">
              Full-Stack & AI/ML Developer
            </span>
          </div>
        </div>

        {/* Center: Copyright */}
        <div className="text-xs text-slate-400 text-center font-mono">
          © {new Date().getFullYear()} Muhammad Haris Ghaffar. All rights reserved.
        </div>

        {/* Right: Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-sky-300 transition-colors"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}
