"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "./projects";
import ProjectCard from "./ProjectCard";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ProjectGrid() {
  const containerRef = useRef(null);
  const pinnedWrapperRef = useRef(null);
  const imagesRef = useRef([]);
  const cardRefs = useRef([]);

  useGSAP(
    () => {
      // Ensure GSAP has updated layout dimensions
      ScrollTrigger.refresh();

      // Only run sticky pin animation on desktop screens (>= 1024px)
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        // 1. PIN THE LEFT IMAGE CONTAINER
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top+=96px", // Pins 96px (top-24) from top of viewport
          end: "bottom bottom", // Keeps pinned until the right content finishes scrolling
          pin: pinnedWrapperRef.current,
          pinSpacing: false, // Prevents GSAP from injecting massive padding
        });

        // 2. SCRUB THE IMAGES AS CARDS SCROLL
        cardRefs.current.forEach((cardEl, index) => {
          if (index === 0) return; // First image is already visible under the stack

          const currentImage = imagesRef.current[index];

          gsap.fromTo(
            currentImage,
            { opacity: 0, scale: 1.08 },
            {
              opacity: 1,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: cardEl,
                start: "top 70%", // Triggers when the card enters the lower half of screen
                end: "top 30%", // Fully revealed by time card hits upper half
                scrub: true,
              },
            },
          );
        });
      });

      return () => mm.revert(); // Cleanup matchMedia on unmount
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative mx-auto px-6 py-12 max-w-7xl"
    >
      <div className="relative flex lg:flex-row flex-col items-start gap-12">
        {/* LEFT COLUMN: Scrolling Cards */}
        <div className="space-y-24 w-full lg:w-1/2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id || index}
              project={project}
              index={index}
              ref={(el) => (cardRefs.current[index] = el)}
            />
          ))}
        </div>
        {/* RIGHT COLUMN: Pinned Images Wrapper */}
        <div className="hidden lg:block w-full lg:w-1/2 shrink-0">
          <div
            ref={pinnedWrapperRef}
            className="relative bg-background/30 shadow-2xl backdrop-blur-xl border border-white/10 rounded-3xl w-full aspect-video overflow-hidden"
          >
            {projects.map((project, index) => (
              <div
                key={project.id || index}
                ref={(el) => (imagesRef.current[index] = el)}
                className="absolute inset-0 w-full h-full"
                style={{ zIndex: index + 1 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-center object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
