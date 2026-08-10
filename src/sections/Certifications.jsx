import React from 'react';
import { Award, Terminal, Sparkles, FileSpreadsheet, CheckCircle2 } from 'lucide-react';
import { certifications } from '../data/certifications';

const certIconMap = {
  Terminal: Terminal,
  Sparkles: Sparkles,
  FileSpreadsheet: FileSpreadsheet,
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient-cyan">Certifications</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-sm font-light">
            Verified course completions and specializations across programming, artificial intelligence, and analytical tools.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => {
            const IconComp = certIconMap[cert.icon] || Award;
            return (
              <div
                key={cert.id}
                className="glass-panel glass-panel-hover rounded-3xl p-6 flex flex-col justify-between space-y-6 border border-white/10"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-3 h-3" /> Verified
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      {cert.issuer}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1 leading-snug">
                      {cert.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Domain</span>
                  <span className="text-sky-300 font-semibold">{cert.category}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
