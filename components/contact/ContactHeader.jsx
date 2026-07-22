"use client";

import { useRef } from "react";
import { FiMessageCircle } from "react-icons/fi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function ContactHeader() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".contact-header-item", {
        opacity: 0,
        y: 45,
        duration: 0.9,
        stagger: 0.16,
        ease: "power3.out",
      });
    },
    { scope: containerRef },
  );

  return (
    <header
      ref={containerRef}
      className="mx-auto mb-20 max-w-4xl text-center"
    >
      <div className="inline-flex items-center gap-2 bg-success/10 backdrop-blur-xl px-5 py-2 border border-success/30 rounded-full text-success contact-header-item">
        <FiMessageCircle />

        <span className="font-semibold text-xs uppercase tracking-[0.25em]">
          Let&apos;s Connect
        </span>
      </div>

      <h2 className="mt-8 font-heading font-black text-4xl sm:text-5xl md:text-7xl leading-tight contact-header-item">
        Let&apos;s build something{" "}
        <span className="bg-clip-text bg-gradient-to-r from-success via-primary to-accent text-transparent">
          remarkable.
        </span>
      </h2>

      <p className="mx-auto mt-7 max-w-2xl text-foreground-secondary text-base md:text-lg leading-8 contact-header-item">
        Have a project, opportunity, or idea in mind? Send me a message and
        let&apos;s discuss how we can bring it to life.
      </p>

      <div className="relative mx-auto mt-10 w-52 h-[2px] contact-header-item">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-success to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-success to-transparent opacity-80 blur-md" />
      </div>
    </header>
  );
}
