/**
 * Draws an Image onto an HTML5 Canvas using 'cover' mode (like CSS object-fit: cover)
 */
export function drawImageCover(ctx, img, canvasWidth, canvasHeight) {
  if (!img || !img.complete || img.naturalWidth === 0) return;

  const imgWidth = img.naturalWidth;
  const imgHeight = img.naturalHeight;
  const imgAspect = imgWidth / imgHeight;
  const canvasAspect = canvasWidth / canvasHeight;

  let drawWidth = canvasWidth;
  let drawHeight = canvasHeight;
  let offsetX = 0;
  let offsetY = 0;

  if (canvasAspect > imgAspect) {
    drawHeight = canvasWidth / imgAspect;
    offsetY = (canvasHeight - drawHeight) / 2;
  } else {
    drawWidth = canvasHeight * imgAspect;
    offsetX = (canvasWidth - drawWidth) / 2;
  }

  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
}

/**
 * Detects if the current device is mobile or tablet
 */
export function isMobileDevice() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * Checks reduced motion preference
 */
export function prefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
