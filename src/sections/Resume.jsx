import React from 'react';
import { FileText, Download, Eye, CheckCircle2, ShieldCheck } from 'lucide-react';
import { profile } from '../data/profile';

export default function Resume() {
  return (
    <section id="resume" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Official <span className="text-gradient-cyan">Resume</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-sm font-light">
            Comprehensive overview of academic background, technical skills, and project accomplishments.
          </p>
        </div>

        {/* Resume Preview & Actions Box */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 text-center space-y-8 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="max-w-md mx-auto space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center mx-auto">
              <FileText className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white">
              Muhammad Haris Ghaffar — CV
            </h3>
            
            <p className="text-xs text-slate-300 font-mono">
              Full-Stack Developer • AI/ML Enthusiast • BS Computer Science (CGPA 3.44)
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400 pt-2">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-sky-400" /> Verified CV Data</span>
              <span>•</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-sky-400" /> ATS Optimized</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="/resume/Muhammad_Haris_Ghaffar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold text-sm shadow-glowCyan hover:opacity-90 transition-opacity"
            >
              <Eye className="w-4 h-4" />
              <span>View Resume (PDF)</span>
            </a>

            <a
              href="/resume/Muhammad_Haris_Ghaffar_Resume.pdf"
              download="Muhammad_Haris_Ghaffar_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-semibold text-sm backdrop-blur-md transition-colors"
            >
              <Download className="w-4 h-4 text-sky-400" />
              <span>Download Resume</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
