import React from 'react';
import { FolderGit2, Github, Layers, ShieldCheck, Cpu, ArrowUpRight, CheckCircle2, Zap } from 'lucide-react';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-cyan">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-sm font-light">
            Real-world full-stack web applications engineered with modern frontend frameworks and robust backend architectures.
          </p>
        </div>

        {/* Projects Showcase Stack */}
        <div className="space-y-16">
          {projects.map((project) => {
            const isCampusConnect = project.id === 'campusconnect';

            return (
              <div
                key={project.id}
                className={`glass-panel rounded-3xl p-6 sm:p-10 border transition-all duration-300 ${
                  isCampusConnect
                    ? 'border-sky-500/30 bg-gradient-to-b from-[#0d1321]/90 via-[#0d1321]/80 to-[#07090e]/95 shadow-glowCyan'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-mono font-semibold">
                        {project.type}
                      </span>
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
                          <Zap className="w-3 h-3" /> Flagship Project
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {project.name}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 font-light max-w-2xl">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 flex-shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-xs font-bold shadow-glowCyan hover:opacity-90 transition-opacity"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Repository</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Tech Pills Row */}
                <div className="flex flex-wrap items-center gap-2 py-6">
                  <span className="text-xs font-mono text-slate-400 mr-2">Technologies:</span>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-sky-300 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Visual Image Banner & Deep Presentation Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2">
                  
                  {/* Left Column: UI Showcase Image & Highlights */}
                  <div className="lg:col-span-6 space-y-6">
                    {project.image && (
                      <div className="relative rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
                        <img
                          src={project.image}
                          alt={`${project.name} UI Showcase`}
                          className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#07090e]/80 via-transparent to-transparent opacity-60" />
                        <div className="absolute bottom-3 left-4 text-[11px] font-mono text-sky-300 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" /> High-Resolution UI Mockup
                        </div>
                      </div>
                    )}

                    {/* Features List */}
                    <div className="glass-panel rounded-2xl p-6 space-y-4">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold pb-2 border-b border-white/10">
                        Key Engineering Highlights
                      </h4>
                      <ul className="space-y-3">
                        {project.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Problem, Solution, Architecture & Metrics */}
                  <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold flex items-center gap-2">
                          <Layers className="w-4 h-4" /> The Problem
                        </h4>
                        <p className="text-sm text-slate-300 leading-relaxed font-normal bg-white/[0.02] p-4 rounded-2xl border border-white/5">
                          {project.problem}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-teal-400 font-semibold flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4" /> Technical Solution
                        </h4>
                        <p className="text-sm text-slate-300 leading-relaxed font-normal bg-white/[0.02] p-4 rounded-2xl border border-white/5">
                          {project.solution}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold flex items-center gap-2">
                          <Cpu className="w-4 h-4" /> System Architecture
                        </h4>
                        <p className="text-sm text-slate-300 leading-relaxed font-normal bg-white/[0.02] p-4 rounded-2xl border border-white/5">
                          {project.architecture}
                        </p>
                      </div>
                    </div>

                    {/* Metrics Banner */}
                    <div className="grid grid-cols-3 gap-3 pt-2">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="bg-white/[0.03] border border-white/5 p-3 rounded-xl text-center space-y-1">
                          <span className="text-[10px] font-mono text-slate-400 uppercase block">
                            {m.label}
                          </span>
                          <span className="text-xs font-bold text-sky-300 block truncate">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
