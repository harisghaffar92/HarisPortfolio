import { isMobileDevice } from '../../utils/frameUtils';

class FramePreloader {
  constructor() {
    this.manifest = null;
    this.frames = [];
    this.imagesCache = [];
    this.loadedCount = 0;
    this.isLoaded = false;
    this.onProgressCallbacks = [];
  }

  async init() {
    try {
      const res = await fetch('/frames/manifest.json');
      if (!res.ok) throw new Error('Manifest not found');
      this.manifest = await res.json();
      
      const isMobile = isMobileDevice();
      this.frames = isMobile ? this.manifest.mobile.frames : this.manifest.desktop.frames;
      this.imagesCache = new Array(this.frames.length).fill(null);

      // Stage 1: Load Critical Hero Frames (first 10 frames)
      const criticalCount = Math.min(10, this.frames.length);
      const criticalPromises = [];

      for (let i = 0; i < criticalCount; i++) {
        criticalPromises.push(this.loadImage(i));
      }

      await Promise.all(criticalPromises);
      this.isLoaded = true;

      // Stage 2: Load remaining frames progressively in background
      this.loadRemainingFrames();
      return this;
    } catch (err) {
      console.warn('Frame preloader initialized with fallback:', err);
      return this;
    }
  }

  loadImage(index) {
    return new Promise((resolve) => {
      if (this.imagesCache[index]) {
        resolve(this.imagesCache[index]);
        return;
      }

      const img = new Image();
      img.src = this.frames[index];

      img.onload = () => {
        this.imagesCache[index] = img;
        this.loadedCount++;
        this.notifyProgress();
        resolve(img);
      };

      img.onerror = () => {
        console.warn(`Failed to load frame ${index}: ${this.frames[index]}`);
        this.loadedCount++;
        this.notifyProgress();
        resolve(null);
      };
    });
  }

  async loadRemainingFrames() {
    const batchSize = 6;
    for (let i = 10; i < this.frames.length; i += batchSize) {
      const batch = [];
      for (let j = i; j < Math.min(i + batchSize, this.frames.length); j++) {
        batch.push(this.loadImage(j));
      }
      await Promise.all(batch);
      await new Promise(r => setTimeout(r, 10));
    }
  }

  onProgress(cb) {
    this.onProgressCallbacks.push(cb);
  }

  notifyProgress() {
    const progress = this.frames.length > 0 ? this.loadedCount / this.frames.length : 1;
    this.onProgressCallbacks.forEach(cb => cb(progress, this.loadedCount, this.frames.length));
  }

  getFrame(index) {
    if (index < 0 || index >= this.imagesCache.length) return null;
    return this.imagesCache[index];
  }

  getTotalFrames() {
    return this.frames.length;
  }
}

export const framePreloader = new FramePreloader();
