"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FiFolder } from "react-icons/fi";

gsap.registerPlugin(useGSAP);

export default function ProjectsHeader() {
  const headerRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-header-item", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={headerRef}
      className="mx-auto mb-20 max-w-3xl text-center"
    >
      {/* Section Badge */}
      <div className="inline-flex items-center gap-2 bg-success/10 mb-6 px-4 py-2 border border-success/20 rounded-full font-medium text-success text-sm uppercase tracking-widest project-header-item">
        <FiFolder />
        My Work
      </div>

      {/* Heading */}
      <h2 className="font-heading font-bold text-5xl md:text-6xl leading-tight project-header-item">
        Featured{" "}
        <span className="bg-clip-text bg-gradient-to-r from-success via-primary to-accent text-transparent">
          Projects
        </span>
      </h2>

      {/* Description */}
      <p className="mx-auto mt-6 max-w-2xl text-foreground-secondary text-lg leading-8 project-header-item">
        A collection of applications I've designed and built, focused on
        performance, scalability, and creating exceptional user experiences
        across web and mobile platforms.
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
