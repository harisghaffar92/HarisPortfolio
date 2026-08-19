import React from 'react';
import { ArrowUpRight, FileText, Mail, Sparkles, Terminal, CheckCircle2, Code2, ShieldCheck, Zap } from 'lucide-react';
import { profile } from '../data/profile';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl w-full mx-auto space-y-12">
        
        {/* Top Studio Brand Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-sky-500 to-indigo-600 p-[1px]">
              <div className="w-full h-full bg-[#07090e] rounded-[11px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-sky-400" />
              </div>
            </div>
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-white uppercase block">
                MUHAMMAD HARIS GHAFFAR
              </span>
              <span className="text-[10px] font-mono text-amber-400 block">
                PORTFOLIO • 2026
              </span>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>AVAILABLE FOR FULL-STACK & AI PROJECTS</span>
          </div>
        </div>

        {/* Reference-Inspired Dual Split Hero Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          
          {/* Left Column: Bold Graphic Headline & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Role Pills */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-wider">
                <Terminal className="w-3.5 h-3.5" />
                {profile.primaryRole}
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-mono uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                {profile.secondaryRole}
              </span>
            </div>

            {/* Giant Hero Typography */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white uppercase leading-none">
                CREATE<span className="text-amber-500">.</span><br />
                <span className="text-gradient-cyan">ENGINEER.</span><br />
                SOLVE<span className="text-sky-400">.</span>
              </h1>
              <p className="text-slate-300 max-w-lg text-base sm:text-lg font-light pt-4 leading-relaxed">
                Designing software that inspires. Architecting full-stack systems that scale.
              </p>
            </div>

            {/* Primary Action Button & Secondary Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="group flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-sky-500 to-indigo-600 text-white font-extrabold text-sm uppercase tracking-wider shadow-glowCyan hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>VIEW WORK</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <a
                href="#resume"
                className="flex items-center gap-2 px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-semibold text-sm backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>RESUME</span>
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-semibold text-sm backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>CONTACT</span>
              </a>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-6 flex flex-wrap items-center gap-3 border-t border-white/10 max-w-md">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-lg bg-sky-500/15 border border-sky-500/30 text-sky-300 text-xs font-mono font-bold">
                  React
                </span>
                <span className="px-3 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold">
                  Django
                </span>
                <span className="px-3 py-1 rounded-lg bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold">
                  AI & LLMs
                </span>
              </div>
              <div className="text-xs text-slate-300 font-light">
                <strong className="text-white font-semibold">Practical Software Builder</strong>
                <span className="block text-slate-400 text-[11px]">BS Computer Science • CGPA 3.44</span>
              </div>
            </div>

          </div>

          {/* Right Column: Reference-Inspired Floating Card */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 space-y-6 border border-white/15 shadow-2xl bg-[#0d1321]/75 backdrop-blur-xl relative overflow-hidden group hover:border-sky-500/40 transition-all duration-300">
              
              {/* Card Top Label */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="text-xs font-mono font-semibold text-amber-300 uppercase">
                    AVAILABLE FOR
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  Full-Stack Projects
                </span>
              </div>

              {/* Title */}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white leading-snug">
                  Building Practical & Intelligent Software Solutions
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Focused on production-ready React web portals, Django REST API backends, relational databases, and AI prompt engineering.
                </p>
              </div>

              {/* Technical Features Checklist */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span>Role-Based Auth & JWT Token Security</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span>Decoupled REST API Architecture</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>AI Prompt Engineering & LLM Workflows</span>
                </div>
              </div>

              {/* Client/Recruiter Testimonial / Quote Block */}
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
                <div className="text-amber-400 text-lg font-serif">“</div>
                <p className="text-xs text-slate-300 italic leading-relaxed">
                  Haris approaches web engineering with clear architectural thinking, robust backend models, and polished React interfaces.
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px]">
                  <span className="font-bold text-white">MUHAMMAD HARIS GHAFFAR</span>
                  <span className="text-sky-300 font-mono">University of Sahiwal</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
