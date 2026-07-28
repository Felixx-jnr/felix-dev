"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FiArrowUpRight } from "react-icons/fi";

gsap.registerPlugin(useGSAP);

export default function ServiceCard({ service }) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  const Icon = service.icon;

  useGSAP(() => {});

  const handleMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();

    glowRef.current.style.left = `${e.clientX - rect.left}px`;
    glowRef.current.style.top = `${e.clientY - rect.top}px`;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      className="group relative bg-background/40 backdrop-blur-xl p-4 border border-white/10 hover:border-success/40 rounded-3xl overflow-hidden transition-all hover:-translate-y-4 duration-500 service-card"
    >
      {/* Cursor Glow */}

      <span
        ref={glowRef}
        className="absolute bg-success/20 opacity-0 group-hover:opacity-100 blur-3xl rounded-full transition-opacity -translate-x-1/2 -translate-y-1/2 duration-300 pointer-events-none"
      />

      {/* Gradient Border */}

      <div className="absolute inset-0 bg-gradient-to-br from-success/20 via-primary/10 to-accent/20 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500" />

      <div className="z-10 relative">
        {/* Icon */}

        <div className="flex flex-col justify-center items-center gap-2">
          <Icon
            size={30}
            style={{
              color: service.color,
            }}
          />
          {/* Title */}

          <h3 className="font-semibold text-lg">{service.title}</h3>
        </div>

        {/* Description */}

        <p className="mt-2 text-foreground-muted">{service.description}</p>

        {/* Bottom Accent */}

        <div
          className="mt-4 rounded-full w-0 group-hover:w-full h-[3px] transition-all duration-500"
          style={{
            background: service.color,
          }}
        />
      </div>
    </div>
  );
}
