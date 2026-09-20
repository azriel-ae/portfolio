import { useEffect, useRef } from 'react';

interface Particle { x: number; y: number; radius: number; speed: number; phase: number; }

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d', { alpha: true });
    if (!context) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile = window.matchMedia('(max-width: 800px)').matches;
    const pointer = { x: 0.5, y: 0.5 };
    const state = { scroll: 0, targetScroll: 0 };
    let width = 0;
    let height = 0;
    let frame = 0;
    let lastTime = 0;
    let particles: Particle[] = [];

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = mobile ? 16 : 32;
      particles = Array.from({ length: count }, (_, index) => ({
        x: (index * 0.6180339887 % 1) * width,
        y: ((index * 0.3819660113 + 0.18) % 1) * height,
        radius: index % 3 === 0 ? 1.7 : 1,
        speed: 0.04 + (index % 5) * 0.012,
        phase: index * 1.7,
      }));
    };

    const onPointerMove = (event: PointerEvent) => {
      if (mobile) return;
      pointer.x = event.clientX / Math.max(width, 1);
      pointer.y = event.clientY / Math.max(height, 1);
    };
    const onScroll = () => { state.targetScroll = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 8); };
    const draw = (time: number) => {
      const delta = Math.min(time - lastTime, 50);
      lastTime = time;
      state.scroll += (state.targetScroll - state.scroll) * 0.018;
      context.clearRect(0, 0, width, height);
      const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#d5ff3f';
      const muted = getComputedStyle(document.documentElement).getPropertyValue('--line').trim() || '#343733';
      const centerX = width * (0.52 + (pointer.x - 0.5) * 0.035);
      const centerY = height * (0.45 + (pointer.y - 0.5) * 0.035) - state.scroll * 15;
      const radius = Math.min(width, height) * (mobile ? 0.37 : 0.46);

      context.save();
      context.translate(centerX, centerY);
      context.rotate(-0.12 + state.scroll * 0.008);
      context.strokeStyle = muted;
      context.globalAlpha = 0.48;
      context.lineWidth = 1;
      context.beginPath();
      context.ellipse(0, 0, radius * 1.18, radius * 0.5, 0, 0, Math.PI * 2);
      context.stroke();
      context.globalAlpha = 0.35;
      context.beginPath();
      context.ellipse(0, 0, radius * 0.8, radius * 1.18, Math.PI / 3, 0, Math.PI * 2);
      context.stroke();
      context.globalAlpha = 0.62;
      context.strokeStyle = accent;
      context.setLineDash([2, 16]);
      context.beginPath();
      context.arc(0, 0, radius * 0.98, 0.3 + state.scroll * 0.02, Math.PI * 1.7 + state.scroll * 0.02);
      context.stroke();
      context.restore();

      particles.forEach((particle) => {
        particle.y -= particle.speed * delta * (1 + state.scroll * 0.04);
        if (particle.y < -8) particle.y = height + 8;
        const driftX = Math.sin(time * 0.00025 + particle.phase) * (mobile ? 5 : 12) + (pointer.x - 0.5) * 12;
        const driftY = Math.cos(time * 0.00021 + particle.phase) * (mobile ? 3 : 8);
        context.fillStyle = accent;
        context.globalAlpha = 0.16 + (particle.radius > 1 ? 0.18 : 0);
        context.beginPath();
        context.arc(particle.x + driftX, particle.y + driftY, particle.radius, 0, Math.PI * 2);
        context.fill();
      });
      context.globalAlpha = 1;
      if (!reduceMotion) frame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    if (reduceMotion) draw(0); else frame = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return <canvas ref={canvasRef} className="animated-background" aria-hidden="true" />;
}
