"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import FloatingWindow from "./FloatingWindow";
import DesktopWindow from "./DesktopWindow";
import MobileWindow from "./MobileWindow";

gsap.registerPlugin(useGSAP);

export default function HeroRight() {
  const imageRef = useRef(null);
  const glowRef = useRef(null);

  useGSAP(() => {
    // Image reveal
    gsap.from(imageRef.current, {
      opacity: 0,
      y: 70,
      duration: 1.2,
      ease: "power4.out",
    });

    //Glow pulse
    gsap.to(glowRef.current, {
      scale: 1.1,
      opacity: 0.8,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="relative flex justify-center items-center w-[700px] h-[600px]">
      {/* Glow */}
      <div
        ref={glowRef}
        className="absolute bg-success/20 blur-[160px] rounded-full"
      />

      {/* Desktop Preview */}
      <FloatingWindow
        delay={0.2}
        className="-top-8 left-0"
      >
        <DesktopWindow />
      </FloatingWindow>

      {/* Mobile Preview */}
      <FloatingWindow
        delay={0.4}
        className="right-0 bottom-8"
      >
        <MobileWindow />
      </FloatingWindow>

      {/* Profile */}
      <div
        ref={imageRef}
        className="z-20 relative"
      >
        <Image
          src="/me.png"
          alt="Felix"
          width={500}
          height={600}
          priority
          className="w-[500px] object-cover"
        />
      </div>
    </div>
  );
}
