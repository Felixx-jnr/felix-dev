"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { stacks } from "./stacks";
import StackCard from "./StackCard";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function StackGrid() {
  const gridRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".stack-card",

        {
          opacity: 0,
          y: 70,
          scale: 0.85,
          rotate: -4,
        },

        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: 0,
          duration: 0.8,
          stagger: {
            amount: 0.9,
            from: "start",
          },
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        },
      );
    },
    {
      scope: gridRef,
    },
  );

  return (
    <div
      ref={gridRef}
      className="justify-items-center gap-4 grid grid-cols-3 xs:grid-cols-4 lg:grid-cols-5 max-md:mx-3 py-5"
    >
      {stacks.map((stack) => (
        <StackCard
          key={stack.id}
          stack={stack}
        />
      ))}
    </div>
  );
}
