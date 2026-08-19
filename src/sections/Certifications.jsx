import React from 'react';
import { Award, Terminal, Sparkles, FileSpreadsheet, CheckCircle2, ExternalLink, ShieldCheck, Key } from 'lucide-react';
import { certifications } from '../data/certifications';

const certIconMap = {
  Terminal: Terminal,
  Sparkles: Sparkles,
  FileSpreadsheet: FileSpreadsheet,
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient-cyan">Certifications</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-sm font-light">
            Verified course completions and specializations with official Credential IDs from Google, Coursera, and Kaggle.
          </p>
        </div>

        {/* Certifications Grid with Real Images & Credential Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert) => {
            const IconComp = certIconMap[cert.icon] || Award;
            return (
              <div
                key={cert.id}
                className="glass-panel glass-panel-hover rounded-3xl p-6 flex flex-col justify-between space-y-6 border border-white/10 overflow-hidden group"
              >
                <div className="space-y-4">
                  
                  {/* Real Certificate Image Preview */}
                  {cert.image && (
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-sky-500/40 transition-colors bg-[#07090e]">
                      <img
                        src={cert.image}
                        alt={`${cert.title} Real Certificate`}
                        className="w-full h-48 object-contain p-1 transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3">
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/90 text-white font-bold backdrop-blur-md shadow-md">
                          <CheckCircle2 className="w-3 h-3" /> Verified
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Header Row */}
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex-shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-sky-300 uppercase">
                          {cert.issuer}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">
                          • {cert.issueDate}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white leading-snug mt-0.5">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {cert.description}
                  </p>

                  {/* Credential ID Badge */}
                  {cert.credentialId && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-mono">
                      <Key className="w-3.5 h-3.5 text-amber-400" />
                      <span>ID: <strong className="text-amber-300">{cert.credentialId}</strong></span>
                    </div>
                  )}
                </div>

                {/* Bottom Actions Row */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-xs font-bold shadow-glowCyan hover:opacity-90 transition-opacity"
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3 h-3 opacity-80" />
                  </a>

                  <a
                    href={cert.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-semibold backdrop-blur-md transition-colors"
                  >
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
