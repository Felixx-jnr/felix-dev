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

  useGSAP(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.to(cardRef.current, {
      y: -10,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "sine.inOut",
    });
  }, []);

  const handleMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();

    glowRef.current.style.left = `${e.clientX - rect.left}px`;
    glowRef.current.style.top = `${e.clientY - rect.top}px`;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      className="group relative bg-background/40 backdrop-blur-xl p-8 border border-white/10 hover:border-success/40 rounded-3xl overflow-hidden transition-all hover:-translate-y-4 duration-500"
    >
      {/* Cursor Glow */}

      <span
        ref={glowRef}
        className="absolute bg-success/20 opacity-0 group-hover:opacity-100 blur-3xl rounded-full w-52 h-52 transition-opacity -translate-x-1/2 -translate-y-1/2 duration-300 pointer-events-none"
      />

      {/* Gradient Border */}

      <div className="absolute inset-0 bg-gradient-to-br from-success/20 via-primary/10 to-accent/20 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500" />

      <div className="z-10 relative">
        {/* Icon */}

        <div
          className="flex justify-center items-center rounded-2xl w-20 h-20"
          style={{
            background: `${service.color}20`,
          }}
        >
          <Icon
            size={40}
            style={{
              color: service.color,
            }}
          />
        </div>

        {/* Title */}

        <h3 className="mt-8 font-bold text-2xl">{service.title}</h3>

        {/* Description */}

        <p className="mt-5 text-foreground-muted leading-8">
          {service.description}
        </p>

        {/* Learn More */}

        <div className="flex items-center gap-2 mt-10 font-semibold text-success">
          Learn More
          <FiArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </div>

        {/* Bottom Accent */}

        <div
          className="mt-8 rounded-full w-0 group-hover:w-full h-[3px] transition-all duration-500"
          style={{
            background: service.color,
          }}
        />
      </div>
    </div>
  );
}
