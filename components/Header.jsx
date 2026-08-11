"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Header({ icon, header, label, description, text }) {
  const headerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      });

      tl.from(".badge", {
        x: -50,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      })
        .from(
          ".title",
          {
            x: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .from(
          ".description",
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        );
    },
    { scope: headerRef },
  );

  return (
    <div
      ref={headerRef}
      className="mb-10 text-center header"
    >
      <div className="inline-flex items-center gap-2 bg-success/10 backdrop-blur-xl px-5 py-2 border border-success/30 rounded-full text-success badge">
        {icon}

        <span className="font-semibold text-success text-xs uppercase tracking-[0.25em]">
          {label}
        </span>
      </div>

      <h2 className="mt-8 font-black text-5xl md:text-7xl title">
        {text}
        <span className="bg-clip-text bg-gradient-to-r from-success via-primary to-accent text-transparent">
          {" "}
          {header}
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-foreground-muted text-lg leading-8 description">
        {description}
      </p>
    </div>
  );
}
