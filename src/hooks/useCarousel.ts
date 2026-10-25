import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Menyediakan ref untuk track carousel beserta handler keyboard
 * (ArrowLeft/ArrowRight), tombol prev/next, dan status apakah track
 * masih bisa digeser ke kiri/kanan.
 */
export function useCarousel<T extends HTMLElement>() {
  const trackRef = useRef<T | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const step = useCallback((): number => {
    const track = trackRef.current;
    if (!track) return 0;
    const item = track.querySelector<HTMLElement>('.carousel-item');
    if (!item) return track.clientWidth * 0.8;
    const style = getComputedStyle(track);
    const gap = parseFloat(style.columnGap || style.gap || '20');
    return item.getBoundingClientRect().width + gap;
  }, []);

  const updateEdges = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setCanPrev(track.scrollLeft > 4);
    setCanNext(track.scrollLeft < max - 4);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateEdges();
    track.addEventListener('scroll', updateEdges, { passive: true });
    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(updateEdges) : null;
    observer?.observe(track);
    window.addEventListener('resize', updateEdges);
    return () => {
      track.removeEventListener('scroll', updateEdges);
      observer?.disconnect();
      window.removeEventListener('resize', updateEdges);
    };
  }, [updateEdges]);

  const scrollPrev = useCallback(() => {
    trackRef.current?.scrollBy({ left: -step(), behavior: 'smooth' });
  }, [step]);

  const scrollNext = useCallback(() => {
    trackRef.current?.scrollBy({ left: step(), behavior: 'smooth' });
  }, [step]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'ArrowRight') {
        scrollNext();
        e.preventDefault();
      }
      if (e.key === 'ArrowLeft') {
        scrollPrev();
        e.preventDefault();
      }
    },
    [scrollNext, scrollPrev]
  );

  return { trackRef, handleKeyDown, scrollPrev, scrollNext, canPrev, canNext };
}
