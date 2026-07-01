"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function FloatingWindow({
  children,
  className = "",
  delay = 0,
}) {
  const cardRef = useRef(null);

  useGSAP(() => {
    const card = cardRef.current;

    // Entry animation
    gsap.from(card, {
      opacity: 0,
      y: 60,
      scale: 0.9,
      duration: 1,
      delay,
      ease: "power3.out",
    });

    // Floating
    gsap.to(card, {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  const handleEnter = () => {
    gsap.to(cardRef.current, {
      scale: 1.04,
      rotate: 2,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.to(cardRef.current, {
      scale: 1,
      rotate: 0,
      duration: 0.3,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`
        absolute
        backdrop-blur-3xl
        rounded-3xl
        border
        
        border-white/10
        overflow-hidden
        
        ${className}
      `}
    >
      {children}
    </div>
  );
}
