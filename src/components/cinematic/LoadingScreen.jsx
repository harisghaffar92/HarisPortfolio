import React, { useState, useEffect } from 'react';
import { Code2, Cpu, Sparkles, Terminal } from 'lucide-react';

export default function LoadingScreen({ loadProgress, isReady }) {
  const [displayProgress, setDisplayProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Calculate target percentage (at least show progress up to hero ready)
    const target = Math.min(Math.round(loadProgress * 100), 100);
    
    // Smooth progress counter animation
    const interval = setInterval(() => {
      setDisplayProgress((prev) => {
        if (prev < target) return prev + 1;
        if (isReady && prev < 100) return prev + 2;
        return prev;
      });
    }, 15);

    return () => clearInterval(interval);
  }, [loadProgress, isReady]);

  useEffect(() => {
    if (isReady && displayProgress >= 90) {
      const timer = setTimeout(() => {
        setDisplayProgress(100);
        setTimeout(() => {
          setHidden(true);
        }, 400);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isReady, displayProgress]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#07090e] transition-all duration-700 ${
        displayProgress === 100 && isReady ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-md w-full px-6 text-center space-y-8">
        
        {/* Brand Icon */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 via-sky-500 to-indigo-600 p-[1px] mx-auto animate-pulse-glow">
          <div className="w-full h-full bg-[#07090e] rounded-[15px] flex items-center justify-center">
            <Code2 className="w-8 h-8 text-sky-400 animate-bounce" />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold tracking-widest text-white uppercase font-sans">
            MUHAMMAD HARIS GHAFFAR
          </h2>
          <p className="text-xs font-mono text-amber-400 flex items-center justify-center gap-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>INITIALIZING CINEMATIC ENGINE...</span>
          </p>
        </div>

        {/* Progress Bar Container */}
        <div className="space-y-3">
          <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden p-[1px] border border-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-500 via-sky-400 to-indigo-500 transition-all duration-200 ease-out shadow-glowCyan"
              style={{ width: `${displayProgress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>Loading video frames</span>
            </span>
            <span className="font-bold text-sky-300">{displayProgress}%</span>
          </div>
        </div>

        {/* Status text */}
        <div className="text-[11px] font-mono text-slate-400">
          Full-Stack & AI Developer Portfolio • {isReady ? 'Ready' : 'Connecting'}
        </div>

      </div>
    </div>
  );
}
