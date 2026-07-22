"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function ServicesGlow() {
  const leftGlow = useRef(null);
  const rightGlow = useRef(null);

  useGSAP(() => {
    gsap.to(leftGlow.current, {
      x: 80,
      y: -40,
      repeat: -1,
      yoyo: true,
      duration: 8,
      ease: "sine.inOut",
    });

    gsap.to(rightGlow.current, {
      x: -80,
      y: 50,
      repeat: -1,
      yoyo: true,
      duration: 10,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <>
      <div
        ref={leftGlow}
        className="top-0 left-0 absolute bg-success/15 blur-[170px] rounded-full w-[450px] h-[450px]"
      />

      <div
        ref={rightGlow}
        className="right-0 bottom-0 absolute bg-primary/15 blur-[170px] rounded-full w-[450px] h-[450px]"
      />
    </>
  );
}
