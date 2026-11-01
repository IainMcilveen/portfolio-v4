<script setup lang="ts">
const canvasRef = ref<HTMLCanvasElement | null>(null);
let cleanup: (() => void) | null = null;

onMounted(() => {
  const canvas = canvasRef.value!;
  const ctx = canvas.getContext("2d")!;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  // Drawing happens in CSS pixels; the backing store is scaled by devicePixelRatio
  // so lines stay sharp on high-DPI screens
  let width = 0;
  let height = 0;

  interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
  }

  const COUNT = 75;
  const MAX_DIST = 160;
  const particles: Particle[] = Array.from({ length: COUNT }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * 0.55,
    vy: (Math.random() - 0.5) * 0.55,
    radius: Math.random() * 1.5 + 0.5,
  }));

  const draw = () => {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < COUNT; i++) {
      const a = particles[i]!;
      for (let j = i + 1; j < COUNT; j++) {
        const b = particles[j]!;
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < MAX_DIST) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(99,179,237,${(1 - d / MAX_DIST) * 0.45})`;
          ctx.lineWidth = 0.7;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    for (const p of particles) {
      ctx.beginPath();
      ctx.fillStyle = "rgba(147,210,255,0.7)";
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  const step = () => {
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
    }
  };

  let animationId = 0;
  const tick = () => {
    step();
    draw();
    animationId = requestAnimationFrame(tick);
  };

  const start = () => {
    cancelAnimationFrame(animationId);
    animationId = 0;
    // Respect the OS "reduce motion" setting by drawing a single still frame
    if (reducedMotion.matches) draw();
    else if (!document.hidden) tick();
  };

  const resize = () => {
    const dpr = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (reducedMotion.matches) draw();
  };

  // Stop animating while the tab is in the background
  const onVisibilityChange = () => {
    if (document.hidden) cancelAnimationFrame(animationId);
    else start();
  };

  resize();
  start();
  window.addEventListener("resize", resize);
  document.addEventListener("visibilitychange", onVisibilityChange);
  reducedMotion.addEventListener("change", start);

  cleanup = () => {
    cancelAnimationFrame(animationId);
    window.removeEventListener("resize", resize);
    document.removeEventListener("visibilitychange", onVisibilityChange);
    reducedMotion.removeEventListener("change", start);
  };
});

onUnmounted(() => cleanup?.());
</script>

<template>
  <canvas ref="canvasRef" class="bg-canvas" />
</template>

<style scoped>
.bg-canvas {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}
</style>
