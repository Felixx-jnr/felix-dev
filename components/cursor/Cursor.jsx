"use client";

import { useEffect, useRef } from "react";
import "./cursor.css";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    window.addEventListener("mousemove", move);

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;

      glowRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        className="cursor-glow"
      />
      <div
        ref={ringRef}
        className="cursor-ring"
      />
      <div
        ref={dotRef}
        className="cursor-dot"
      />
    </>
  );
}
