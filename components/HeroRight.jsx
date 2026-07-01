"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import FloatingWindow from "./FloatingWindow";
import DesktopWindow from "./DesktopWindow";
import MobileWindow from "./MobileWindow";
import PortraitGlow from "./PortraitGlow";

gsap.registerPlugin(useGSAP);

export default function HeroRight() {
  const imageRef = useRef(null);
  const glowRef = useRef(null);

  useGSAP(() => {
    gsap.from(imageRef.current, {
      opacity: 0,
      y: 80,
      duration: 1.3,
      ease: "power4.out",
    });

    gsap.to(glowRef.current, {
      scale: 1.15,
      opacity: 0.9,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="relative flex justify-center items-center">
      {/* Cyan glow */}
      <PortraitGlow glowRef={glowRef} />

      {/* Floating Windows */}
      <FloatingWindow
        delay={0.2}
        className="-top-8 left-0"
      >
        <DesktopWindow />
      </FloatingWindow>

      <FloatingWindow
        delay={0.4}
        className="right-0 bottom-8"
      >
        <MobileWindow />
      </FloatingWindow>

      {/* Portrait */}
      <div
        ref={imageRef}
        className="z-20 relative w-full h-full"
      >
        <Image
          src="/me.png"
          alt="Felix"
          width="550"
          height="700"
          priority
          className="profile-image"
        />
      </div>
    </div>
  );
}
