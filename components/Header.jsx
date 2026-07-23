"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FiFolder } from "react-icons/fi";

export default function Header({ icon, header, label, description }) {
  return (
    <div className="mx-auto mb-20 max-w-3xl text-center">
      {/* Section Badge */}
      <div className="inline-flex items-center gap-2 bg-success/10 mb-6 px-4 py-2 border border-success/20 rounded-full font-medium text-success text-sm uppercase tracking-widest project-header-item">
        {icon}
        {label}
      </div>

      {/* Heading */}
      <h2 className="font-heading font-bold text-5xl md:text-6xl leading-tight project-header-item">
        Featured{" "}
        <span className="bg-clip-text bg-gradient-to-r from-success via-primary to-accent text-transparent">
          {header}
        </span>
      </h2>

      {/* Description */}
      <p className="mx-auto mt-6 max-w-2xl text-foreground-secondary text-lg leading-8 project-header-item">
        {description}
      </p>

      {/* Decorative Line */}
      <div className="flex justify-center mt-10 project-header-item">
        <div className="relative w-52 h-[2px]">
          {/* Main Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-success to-transparent" />

          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-success to-transparent opacity-80 blur-md" />

          {/* Center Dot */}
          <div className="top-1/2 left-1/2 absolute bg-success shadow-[0_0_20px_#22c55e] rounded-full w-3 h-3 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
    </div>
  );
}
