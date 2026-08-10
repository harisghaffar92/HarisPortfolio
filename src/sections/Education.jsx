import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin } from 'lucide-react';
import { education } from '../data/certifications';

export default function Education() {
  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient-cyan">Coursework</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-sm font-light">
            Formal Computer Science foundation establishing strong mathematical, algorithmic, and software design principles.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 space-y-8">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-gradient-to-tr from-sky-500/20 to-indigo-500/20 border border-sky-500/30 text-sky-400">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-white">{education.degree}</h3>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 mt-1">
                  <span className="font-semibold text-sky-300">{education.institution}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-slate-400" /> {education.location}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start sm:items-end gap-1">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-mono font-semibold">
                <Calendar className="w-3.5 h-3.5" />
                <span>{education.duration}</span>
              </div>
              <div className="text-xs font-mono text-slate-300 mt-1">
                CGPA: <span className="text-sky-300 font-bold">{education.cgpa}</span>
              </div>
            </div>
          </div>

          {/* Key Coursework Grid */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-sky-400" /> Core Computer Science Curriculum
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {education.courses.map((course, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-sky-500/30 text-xs font-medium text-slate-200 flex items-center gap-2.5 transition-colors"
                >
                  <Award className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
