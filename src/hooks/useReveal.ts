import { useEffect, useRef, useState } from 'react';

/**
 * Menambahkan efek "reveal" (fade + slide in) ketika elemen masuk viewport,
 * menggantikan class .reveal / .reveal.in yang dulunya diatur lewat vanilla JS.
 */
export function useReveal<T extends HTMLElement>(threshold = 0.1) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, className: `reveal${visible ? ' in' : ''}` };
}
