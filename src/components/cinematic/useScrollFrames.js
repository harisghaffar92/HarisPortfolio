import { useState, useEffect } from 'react';
import { framePreloader } from './FramePreloader';
import { prefersReducedMotion } from '../../utils/frameUtils';

export function useScrollFrames(scrollProgress) {
  const [currentFrameImg, setCurrentFrameImg] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());

    framePreloader.onProgress((progress) => {
      setLoadProgress(progress);
    });

    framePreloader.init().then(() => {
      setIsReady(true);
      const initialImg = framePreloader.getFrame(0);
      if (initialImg) setCurrentFrameImg(initialImg);
    });
  }, []);

  useEffect(() => {
    if (!isReady || reducedMotion) return;

    const total = framePreloader.getTotalFrames();
    if (total === 0) return;

    // Map scrollProgress [0, 1] to frame index [0, total - 1]
    const targetIndex = Math.min(
      Math.floor(scrollProgress * total),
      total - 1
    );

    // Get loaded image or nearest available preloaded frame
    let img = framePreloader.getFrame(targetIndex);
    if (!img) {
      // Find nearest loaded frame as fallback
      for (let offset = 1; offset < total; offset++) {
        if (targetIndex - offset >= 0 && framePreloader.getFrame(targetIndex - offset)) {
          img = framePreloader.getFrame(targetIndex - offset);
          break;
        }
        if (targetIndex + offset < total && framePreloader.getFrame(targetIndex + offset)) {
          img = framePreloader.getFrame(targetIndex + offset);
          break;
        }
      }
    }

    if (img) {
      setCurrentFrameImg(img);
    }
  }, [scrollProgress, isReady, reducedMotion]);

  return { currentFrameImg, isReady, loadProgress, reducedMotion };
}
