"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function StackIntro() {
  const introRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".intro",
      {
        opacity: 0,
        y: 70,
        scale: 0.85,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: {
          amount: 0.9,
          from: "start",
        },
        ease: "power3.out",
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      },
    );
  });

  return (
    <div
      ref={introRef}
      className="flex flex-col justify-between max-md:mt-4 h-full"
    >
      <div className="px-2">
        {/* Section Label */}

        <span className="font-semibold text-success text-sm uppercase tracking-[0.25em] intro">
          My Toolbox:
        </span>

        {/* Heading */}

        <h2 className="mt-5 font-black text-4xl lg:text-5xl leading-tight intro">
          Technologies
          <br />
          <span className="bg-clip-text bg-gradient-to-r from-success via-primary to-accent text-transparent intro">
            I Work With
          </span>
        </h2>

        {/* Description */}

        <p className="mt-8 max-md:max-w-[400px] text-foreground-muted leading-8 intro">
          A selection of modern technologies I use to build responsive, scalable
          and beautiful digital products for web and mobile.
        </p>
      </div>
    </div>
  );
}
