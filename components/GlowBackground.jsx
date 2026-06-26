"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function GlowBackground() {
  const glow1 = useRef(null);
  const glow2 = useRef(null);

  useGSAP(() => {
    gsap.to(glow1.current, {
      scale: 1.15,
      opacity: 0.8,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(glow2.current, {
      scale: 0.9,
      opacity: 0.5,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });

  return (
    <>
      <div
        ref={glow1}
        className="top-1/2 left-1/2 absolute bg-cyan-400/20 blur-[180px] rounded-full w-[650px] h-[650px] -translate-x-1/2 -translate-y-1/2"
      />

      <div
        ref={glow2}
        className="top-1/2 left-1/2 absolute bg-violet-500/20 blur-[160px] rounded-full w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
}
