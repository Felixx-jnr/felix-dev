"use client";

import { useRef } from "react";

export default function StackCard({ stack }) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  const Icon = stack.icon;

  function handleMove(e) {
    const card = cardRef.current;
    const glow = glowRef.current;

    if (!card || !glow) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;
  }

  function handleLeave() {
    if (glowRef.current) {
      glowRef.current.style.opacity = 0;
    }
  }

  function handleEnter() {
    if (glowRef.current) {
      glowRef.current.style.opacity = 1;
    }
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="group relative flex items-center hover:shadow-[0_0_40px_rgba(0,245,255,.12)] backdrop-blur-xl border-white/10 hover:border-success/40 rounded-3xl overflow-hidden transition-all hover:-translate-y-3 animate-[float_5s_ease-in-out_infinite] duration-500"
      style={{
        animationDelay: `${stack.id * 0.15}s`,
      }}
    >
      {/* Mouse Glow */}
      {/* <span
        ref={glowRef}
        className="absolute bg-success/25 opacity-0 blur-3xl rounded-full w-44 h-44 transition-opacity -translate-x-1/2 -translate-y-1/2 duration-300 pointer-events-none"
      /> */}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-success to-accent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500" />

      {/* Content */}
      <div className="z-10 relative">
        {/* Icon */}
        <div className="flex justify-center items-center rounded-2xl w-20 h-20 group-hover:scale-110 transition-transform duration-300">
          <Icon
            size={48}
            style={{ color: stack.color }}
          />
        </div>
      </div>
    </div>
  );
}
