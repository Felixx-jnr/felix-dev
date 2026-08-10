"use client";

import { useRef, useEffect } from "react";

export default function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particles = [];

    // Optimize Context State: Set static shadow styles outside the draw loop once
    ctx.fillStyle = "rgba(139, 92, 246, 0.8)"; // Note: opacity fixed (0.8 instead of 8)
    ctx.shadowBlur = 18;
    ctx.shadowColor = "#00f5ff";

    const initParticles = (width, height) => {
      particles = [];
      const particleCount = Math.min(180, Math.floor((width * height) / 8000));

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 2 + 1,
          dx: (Math.random() - 0.5) * 0.25,
          dy: (Math.random() - 0.5) * 0.25,
        });
      }
    };

    // Use ResizeObserver to eliminate layout thrashing / forced reflows
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        // Read dimensions asynchronously from entry contentBox
        const width = entry.contentRect.width;
        const height = entry.contentRect.height;

        if (width === 0 || height === 0) return;

        // Apply device pixel ratio for crisp rendering on Retina displays
        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);

        // Re-apply static context state after canvas resize reset
        ctx.fillStyle = "rgba(139, 92, 246, 0.8)";
        ctx.shadowBlur = 18;
        ctx.shadowColor = "#00f5ff";

        initParticles(width, height);
      }
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    function animate() {
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);

      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      // Cancel the animation frame loop & disconnect observer
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="z-0 absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
