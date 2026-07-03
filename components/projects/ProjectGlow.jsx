"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function GlowBackground() {
  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);

  useGSAP(() => {
    gsap.to(one.current, {
      x: 100,
      y: -50,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(two.current, {
      x: -120,
      y: 70,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(three.current, {
      y: -80,
      scale: 1.15,
      duration: 14,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Left */}
      <div
        ref={one}
        className="top-20 left-[-180px] absolute bg-cyan-400/20 blur-[170px] rounded-full w-[500px] h-[500px]"
      />

      {/* Right */}
      <div
        ref={two}
        className="top-40 right-[-220px] absolute bg-violet-500/20 blur-[190px] rounded-full w-[600px] h-[600px]"
      />

      {/* Bottom */}
      <div
        ref={three}
        className="bottom-[-180px] left-1/2 absolute bg-success/15 blur-[200px] rounded-full w-[800px] h-[550px] -translate-x-1/2"
      />
    </div>
  );
}
