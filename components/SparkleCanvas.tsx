"use client";

import { useEffect, useRef } from "react";

// ── Tuning knobs ──────────────────────────────────────────────
const MAX_PARTICLES = 120; // hard cap
const SPAWN_RATE = 3; // particles per mousemove event
const MIN_SIZE = 2; // px radius
const MAX_SIZE = 5;
const MIN_LIFE = 0.4; // seconds
const MAX_LIFE = 0.9;
const DRIFT_SPEED = 28; // max px/s horizontal drift
const FALL_SPEED = 18; // px/s downward gravity
const COLORS = [
  "rgba(255,130,180,A)", // soft pink
  "rgba(255,80,150,A)", // hot pink
  "rgba(255,170,200,A)", // blush
  "rgba(255,200,220,A)", // pale rose
  "rgba(255,105,165,A)", // medium pink
];
// ──────────────────────────────────────────────────────────────

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  life: number;
  maxLife: number;
  color: string;
  shape: "star" | "circle" | "diamond";
}

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function pickColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function pickShape(): Particle["shape"] {
  const r = Math.random();
  if (r < 0.5) return "star";
  if (r < 0.8) return "diamond";
  return "circle";
}

function drawStar(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
  rot: number,
) {
  const spikes = 4;
  const inner = r * 0.4;
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(rot);
  ctx.beginPath();
  for (let i = 0; i < spikes * 2; i++) {
    const radius = i % 2 === 0 ? r : inner;
    const angle = (Math.PI / spikes) * i - Math.PI / 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawDiamond(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
  rot: number,
) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(rot);
  ctx.beginPath();
  ctx.moveTo(0, -r);
  ctx.lineTo(r * 0.6, 0);
  ctx.lineTo(0, r);
  ctx.lineTo(-r * 0.6, 0);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

export default function SparkleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return;

    // Disable / reduce on touch devices
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = window.devicePixelRatio || 1;
    let particles: Particle[] = [];
    let animId = 0;
    let lastTime = 0;

    function resize() {
      dpr = window.devicePixelRatio || 1;
      canvas!.width = window.innerWidth * dpr;
      canvas!.height = window.innerHeight * dpr;
      canvas!.style.width = `${window.innerWidth}px`;
      canvas!.style.height = `${window.innerHeight}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    window.addEventListener("resize", resize);

    function spawnAt(x: number, y: number) {
      for (let i = 0; i < SPAWN_RATE; i++) {
        if (particles.length >= MAX_PARTICLES) {
          // Recycle oldest
          particles.shift();
        }
        const life = rand(MIN_LIFE, MAX_LIFE);
        particles.push({
          x: x + rand(-4, 4),
          y: y + rand(-4, 4),
          vx: rand(-DRIFT_SPEED, DRIFT_SPEED),
          vy: rand(-FALL_SPEED * 1.5, -FALL_SPEED * 0.2),
          size: rand(MIN_SIZE, MAX_SIZE),
          rotation: rand(0, Math.PI * 2),
          rotationSpeed: rand(-3, 3),
          life,
          maxLife: life,
          color: pickColor(),
          shape: pickShape(),
        });
      }
    }

    function onPointerMove(e: PointerEvent) {
      // Ignore touch events that slip through
      if (e.pointerType === "touch") return;
      spawnAt(e.clientX, e.clientY);
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    function animate(time: number) {
      animId = requestAnimationFrame(animate);
      const dt = lastTime ? (time - lastTime) / 1000 : 0.016;
      lastTime = time;

      ctx!.clearRect(0, 0, window.innerWidth, window.innerHeight);

      particles = particles.filter((p) => {
        p.life -= dt;
        if (p.life <= 0) return false;

        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.vy += FALL_SPEED * dt; // gravity
        p.rotation += p.rotationSpeed * dt;

        const progress = 1 - p.life / p.maxLife;
        // Ease out opacity: fully visible for first 30%, then fade
        const alpha =
          progress < 0.3 ? 1 : 1 - (progress - 0.3) / 0.7;
        const scale = 1 - progress * 0.4; // shrink slightly
        const r = p.size * scale;

        const fillColor = p.color.replace("A", alpha.toFixed(2));
        ctx!.fillStyle = fillColor;

        // Subtle glow
        if (alpha > 0.4) {
          ctx!.shadowColor = fillColor;
          ctx!.shadowBlur = r * 2.5;
        } else {
          ctx!.shadowColor = "transparent";
          ctx!.shadowBlur = 0;
        }

        if (p.shape === "star") {
          drawStar(ctx!, p.x, p.y, r, p.rotation);
        } else if (p.shape === "diamond") {
          drawDiamond(ctx!, p.x, p.y, r, p.rotation);
        } else {
          ctx!.beginPath();
          ctx!.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx!.fill();
        }

        ctx!.shadowColor = "transparent";
        ctx!.shadowBlur = 0;

        return true;
      });
    }

    animId = requestAnimationFrame(animate);

    // Listen for reduced-motion changes
    function onMotionChange(e: MediaQueryListEvent) {
      if (e.matches) {
        cancelAnimationFrame(animId);
        particles = [];
        ctx!.clearRect(0, 0, window.innerWidth, window.innerHeight);
      } else {
        animId = requestAnimationFrame(animate);
      }
    }
    motionQuery.addEventListener("change", onMotionChange);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      motionQuery.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
}
