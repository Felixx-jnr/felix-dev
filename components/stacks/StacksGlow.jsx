"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function StacksGlow() {
  const glowOne = useRef(null);
  const glowTwo = useRef(null);
  const glowThree = useRef(null);

  useGSAP(() => {
    gsap.to(glowOne.current, {
      x: 80,
      y: -40,
      scale: 1.2,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(glowTwo.current, {
      x: -60,
      y: 60,
      scale: 1.15,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(glowThree.current, {
      y: -80,
      scale: 1.3,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });

  return (
    <div className="-z-10 absolute inset-0 overflow-hidden pointer-events-none r">
      {/* Cyan */}
      <div
        ref={glowOne}
        className="top-24 left-20 absolute bg-primary/40 blur-[180px] rounded-full w-[420px] h-[420px]"
      />

      {/* Purple */}
      <div
        ref={glowTwo}
        className="top-1/2 right-10 absolute bg-accent/40 blur-[200px] rounded-full w-[500px] h-[500px]"
      />

      {/* Green */}
      <div
        ref={glowThree}
        className="bottom-0 left-1/2 absolute bg-success/40 blur-[180px] rounded-full w-[650px] h-[300px] -translate-x-1/2"
      />
    </div>
  );
}
