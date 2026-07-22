"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function ContactGlow() {
  const cyanGlowRef = useRef(null);
  const purpleGlowRef = useRef(null);
  const greenGlowRef = useRef(null);

  useGSAP(() => {
    gsap.to(cyanGlowRef.current, {
      x: 90,
      y: -50,
      scale: 1.15,
      duration: 9,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(purpleGlowRef.current, {
      x: -80,
      y: 60,
      scale: 1.2,
      duration: 11,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(greenGlowRef.current, {
      y: -50,
      scale: 1.12,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        ref={cyanGlowRef}
        className="-top-24 -left-40 absolute bg-primary/20 blur-[160px] rounded-full w-[520px] h-[520px]"
      />

      <div
        ref={purpleGlowRef}
        className="right-[-180px] bottom-20 absolute bg-accent/20 blur-[180px] rounded-full w-[580px] h-[580px]"
      />

      <div
        ref={greenGlowRef}
        className="bottom-[-220px] left-1/2 absolute bg-success/15 blur-[180px] rounded-full w-[750px] h-[420px] -translate-x-1/2"
      />

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
    </div>
  );
}
