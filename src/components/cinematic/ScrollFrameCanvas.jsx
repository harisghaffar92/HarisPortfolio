import React, { useRef, useEffect } from 'react';
import { drawImageCover } from '../../utils/frameUtils';
import { useScrollFrames } from './useScrollFrames';

export default function ScrollFrameCanvas({ scrollProgress }) {
  const canvasRef = useRef(null);
  const { currentFrameImg, isReady, reducedMotion } = useScrollFrames(scrollProgress);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;

    const render = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      // Reset transform matrix to exact DPR scale (prevents compounding scale bug)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      
      if (currentFrameImg) {
        drawImageCover(ctx, currentFrameImg, width, height);
      }
    };

    animationFrameId = requestAnimationFrame(render);

    const handleResize = () => {
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [currentFrameImg]);

  // Dynamically calculate background opacity based on scroll (100% clear at top, smoothly pushed back on scroll)
  const overlayOpacity = Math.min(scrollProgress * 0.5, 0.4);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#07090e]">
      {/* Sticky Fullscreen HTML5 Frame Canvas - Crisp, Sharp, NO BLUR */}
      <canvas
        ref={canvasRef}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isReady ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ filter: 'none' }}
      />

      {/* Dynamic Smooth Vignette Overlay - Very subtle to maintain crystal clear background clarity */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#07090e]/20 via-transparent to-[#07090e]/80 transition-opacity duration-300" 
        style={{ opacity: 0.6 + overlayOpacity }}
      />
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#07090e]/15 to-[#07090e]/75 transition-opacity duration-300"
        style={{ opacity: 0.5 + overlayOpacity }}
      />
      
      {/* Warm Ambient Glow Accents (Matching Reference Aesthetic) */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[700px] h-[700px] bg-amber-500/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-sky-500/15 rounded-full blur-[140px] pointer-events-none" />
    </div>
  );
}
