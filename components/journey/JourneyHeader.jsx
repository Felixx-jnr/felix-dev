"use client";

import { FiZap } from "react-icons/fi";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function JourneyHeader() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(container.current.children, {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <div
      ref={container}
      className="mb-28 text-center"
    >
      <div className="inline-flex items-center gap-2 bg-success/10 backdrop-blur-xl px-5 py-2 border border-success/30 rounded-full">
        <FiZap className="text-success" />

        <span className="font-semibold text-success text-xs uppercase tracking-[0.25em]">
          My Journey
        </span>
      </div>

      <h2 className="mt-8 font-black text-5xl md:text-7xl">
        The{" "}
        <span className="bg-clip-text bg-gradient-to-r from-success via-primary to-accent text-transparent">
          Road So Far
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-foreground-muted text-lg leading-8">
        Every project, every challenge, and every technology has shaped the
        developer I am today.
      </p>
    </div>
  );
}
