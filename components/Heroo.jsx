"use client";

import { useRef } from "react";
import Image from "next/image";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .from(".hero-word", {
          opacity: 0,
          y: 120,
          rotateX: -25,
          stagger: 0.14,
          duration: 1.2,
        })

        .from(
          ".hero-content-item",
          {
            opacity: 0,
            y: 30,
            stagger: 0.12,
            duration: 0.7,
          },
          "-=0.5",
        );
    },
    {
      scope: sectionRef,
    },
  );

  function scrollToProjects() {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex justify-center items-center px-4 sm:px-8 w-full min-h-scree overflow-hidden text-foreground"
    >
      {/* Background lighting */}

      <div className="top-[45%] left-1/2 absolute bg-primary/15 blur-[140px] rounded-full w-[420px] sm:w-[600px] h-[420px] sm:h-[600px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="bottom-[-180px] left-1/2 absolute bg-accent/10 blur-[150px] rounded-full w-[700px] h-[320px] -translate-x-1/2 pointer-events-none" />

      {/* Oversized background text */}

      <div
        ref={textRef}
        aria-hidden="true"
        className="z-0 absolute inset-0 flex justify-center items-center overflow-hidden pointer-events-none"
      >
        <div className="flex flex-col justify-center items-center w-full max-w-[1500px] font-heading font-black text-center uppercase leading-[0.72] tracking-[-0.075em]">
          <span className="block text-[24vw] text-foreground/[0.07] sm:text-[18vw] lg:text-[14vw] hero-word">
            Web &
          </span>

          <span
            className="block text-[24vw] sm:text-[18vw] lg:text-[14vw] hero-word"
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.14)",
              color: "transparent",
            }}
          >
            Mobile
          </span>

          <span className="block bg-clip-text bg-gradient-to-r from-primary/20 via-foreground/10 to-accent/20 text-[24vw] text-transparent sm:text-[18vw] lg:text-[14vw] hero-word">
            Developer
          </span>
        </div>
      </div>

      {/* Portrait */}

      <div className="z-10 relative flex justify-center items-end w-full max-w-7xl">
        <div
          // ref={imageRef}
          className="z-20 relative w-[340px] sm:w-[440px] md:w-[520px] lg:w-[580px] h-[520px] md:h-[640px]"
        >
          <div className="bottom-10 left-1/2 absolute bg-black/40 blur-2xl rounded-full h-20 -translate-x-1/2 pointer-events-none" />

          <Image
            src="/me.png"
            alt="Felix, web and mobile developer"
            fill
            priority
            sizes="(max-width: 640px) 340px, (max-width: 768px) 440px, (max-width: 1024px) 520px, 580px"
            className="drop-shadow-[0_20px_60px_rgba(0,0,0,0.4)] object-bottom object-contain"
          />
        </div>
      </div>
      {/* Bottom image blend
      <div className="bottom-0 absolute inset-x-0 bg-gradient-to-t from-background via-background/70 to-transparent h-40 pointer-events-none" /> */}

      {/* Left supporting content */}

      <div
        ref={contentRef}
        className="hidden md:block bottom-24 left-6 xl:left-16 z-30 absolute max-w-[260px]"
      >
        <div className="flex items-center gap-3 hero-content-item">
          <span className="bg-primary w-10 h-px" />

          <span className="font-semibold text-primary text-xs uppercase tracking-[0.28em]">
            Front-end developer
          </span>
        </div>

        <p className="mt-5 text-foreground-secondary text-sm hero-content-item leading-7">
          I create responsive websites and cross-platform mobile experiences
          with modern JavaScript technologies.
        </p>

        <a
          href="#contact"
          className="group inline-flex items-center gap-2 mt-7 font-semibold text-foreground hero-content-item"
        >
          Let&apos;s work together
          <FiArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 duration-300" />
        </a>
      </div>

      {/* Right role indicator */}

      <div className="hidden md:block right-6 xl:right-16 bottom-24 z-30 absolute text-right">
        <p className="text-foreground-muted text-xs uppercase hero-content-item tracking-[0.25em]">
          Based in Nigeria
        </p>

        <p className="mt-3 font-heading font-semibold text-lg hero-content-item">
          Available worldwide
        </p>
      </div>

      {/* Mobile introduction */}

      <div className="md:hidden bottom-8 z-30 absolute inset-x-5 text-center">
        <p className="font-semibold text-primary text-xs uppercase hero-content-item tracking-[0.25em]">
          Web & Mobile Developer
        </p>

        <p className="mx-auto mt-3 max-w-sm text-foreground-secondary text-sm hero-content-item leading-6">
          Building responsive websites and cross-platform mobile applications.
        </p>
      </div>

      {/* Scroll control */}

      <button
        type="button"
        onClick={scrollToProjects}
        aria-label="Scroll to projects"
        className="hidden bottom-8 left-1/2 z-40 absolute lg:flex flex-col items-center gap-2 text-foreground-muted hover:text-primary hero-content-item transition-colors -translate-x-1/2"
      >
        <span className="font-semibold text-[10px] uppercase tracking-[0.25em]">
          Scroll
        </span>

        <FiArrowDown className="animate-bounce" />
      </button>
    </section>
  );
}
