import React from 'react';
import { Code, Layout, Server, Database, Wrench, Cpu, CheckCircle2 } from 'lucide-react';
import { skillCategories } from '../data/skills';

const categoryIconMap = {
  Code: Code,
  Layout: Layout,
  Server: Server,
  Database: Database,
  Wrench: Wrench,
  Cpu: Cpu,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient-cyan">Technologies</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-sm font-light">
            Core technologies and tools I actively utilize to engineer end-to-end software applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const IconComponent = categoryIconMap[cat.icon] || Code;
            return (
              <div
                key={cat.category}
                className="glass-panel glass-panel-hover rounded-3xl p-6 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                    <div className="p-2.5 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-wide">
                      {cat.category}
                    </h3>
                  </div>

                  {/* Skills Items */}
                  <div className="space-y-3 pt-1">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-sky-500/30 transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                          <span className="text-sm font-semibold text-slate-200">
                            {skill.name}
                          </span>
                        </div>

                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-400">
                          {skill.badge}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-[11px] font-mono text-slate-400 italic">
                  Verified Practical Implementation
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
