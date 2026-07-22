"use client";

import { useRef } from "react";
import { FiLayers } from "react-icons/fi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function ServicesHeader() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(container.current.children, {
      opacity: 0,
      y: 40,
      stagger: 0.18,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div
      ref={container}
      className="mb-20 text-center"
    >
      <div className="inline-flex items-center gap-2 bg-success/10 backdrop-blur-xl px-5 py-2 border border-success/30 rounded-full">
        <FiLayers className="text-success" />

        <span className="font-semibold text-success text-xs uppercase tracking-[0.25em]">
          What I Offer
        </span>
      </div>

      <h2 className="mt-8 font-black text-5xl md:text-7xl">
        Services That
        <span className="bg-clip-text bg-gradient-to-r from-success via-primary to-accent text-transparent">
          {" "}
          Deliver Results
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-foreground-muted text-lg leading-8">
        From responsive web applications to cross-platform mobile apps, I build
        fast, scalable, and engaging digital experiences.
      </p>
    </div>
  );
}
