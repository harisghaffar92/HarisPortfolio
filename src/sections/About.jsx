import React from 'react';
import { User, Code2, Cpu, GraduationCap, Compass, CheckCircle2 } from 'lucide-react';
import { profile } from '../data/profile';

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Technical Identity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-cyan">Haris</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-sm font-light">
            Computer Science Graduate & Full-Stack Web Builder with a passion for practical engineering.
          </p>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Bio Card */}
          <div className="md:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Full-Stack & Systems Mindset</h3>
                  <p className="text-xs text-slate-400 font-mono">BS Computer Science Graduate</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                I approach software development with a hands-on, practical engineering philosophy. Rather than relying on theoretical concepts alone, I build complete, production-grade applications that solve real user problems.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                My core expertise lies in architecting full-stack web applications using <strong className="text-sky-300">React</strong> for responsive frontends and <strong className="text-sky-300">Django REST Framework</strong> or <strong className="text-sky-300">Node.js</strong> for secure backend APIs. I am also actively deepening my capabilities in <strong className="text-indigo-300">AI/ML</strong> and LLM prompting.
              </p>
            </div>

            {/* Quick Principles List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>Clean, Scalable Code</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>REST API Architecture</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>Role-Based Auth & Security</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>Continuous Technical Curiosity</span>
              </div>
            </div>
          </div>

          {/* Quick Snapshot Side Cards */}
          <div className="md:col-span-5 flex flex-col gap-4">
            
            <div className="glass-panel glass-panel-hover rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">University of Sahiwal</h4>
                  <p className="text-xs text-slate-400">BS Computer Science (2022 — 2026)</p>
                </div>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-white/5 text-xs">
                <span className="text-slate-400">Academic Distinction</span>
                <span className="font-mono text-sky-300 font-semibold">CGPA: {profile.cgpa}</span>
              </div>
            </div>

            <div className="glass-panel glass-panel-hover rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">AI & Emerging Tech Focus</h4>
                  <p className="text-xs text-slate-400">Prompt Engineering & Automation</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Exploring practical AI integrations, prompt optimization, and leveraging LLMs to augment software productivity.
              </p>
            </div>

            <div className="glass-panel glass-panel-hover rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Current Focus</h4>
                  <p className="text-xs text-slate-400">Backend Architecture</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Expanding expertise in full-stack JavaScript, asynchronous state management, and modern Web APIs.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
