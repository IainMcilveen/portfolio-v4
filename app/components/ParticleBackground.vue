<script setup lang="ts">
const canvasRef = ref<HTMLCanvasElement | null>(null);
let animationId = 0;
let resizeHandler: (() => void) | null = null;

onMounted(() => {
  const canvas = canvasRef.value!;
  const ctx = canvas.getContext("2d")!;

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resizeHandler = resize;
  resize();
  window.addEventListener("resize", resize);

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
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.55,
    vy: (Math.random() - 0.5) * 0.55,
    radius: Math.random() * 1.5 + 0.5,
  }));

  const tick = () => {
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

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
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
    }

    animationId = requestAnimationFrame(tick);
  };
  tick();
});

onUnmounted(() => {
  cancelAnimationFrame(animationId);
  if (resizeHandler) window.removeEventListener("resize", resizeHandler);
});
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
