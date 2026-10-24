import { useCallback, useRef } from 'react';

/**
 * Menyediakan ref untuk track carousel beserta handler keyboard
 * (ArrowLeft/ArrowRight) agar bisa digeser tanpa mouse, menggantikan
 * logic initCarousel() dari versi vanilla JS.
 */
export function useCarousel<T extends HTMLElement>() {
  const trackRef = useRef<T | null>(null);

  const step = useCallback((): number => {
    const track = trackRef.current;
    if (!track) return 0;
    const item = track.querySelector<HTMLElement>('.carousel-item');
    if (!item) return track.clientWidth * 0.8;
    const style = getComputedStyle(track);
    const gap = parseFloat(style.columnGap || style.gap || '20');
    return item.getBoundingClientRect().width + gap;
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const track = trackRef.current;
      if (!track) return;
      if (e.key === 'ArrowRight') {
        track.scrollBy({ left: step(), behavior: 'smooth' });
        e.preventDefault();
      }
      if (e.key === 'ArrowLeft') {
        track.scrollBy({ left: -step(), behavior: 'smooth' });
        e.preventDefault();
      }
    },
    [step]
  );

  return { trackRef, handleKeyDown };
}
