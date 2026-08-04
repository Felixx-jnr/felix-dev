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
      ScrollTrigger.refresh();

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const lastCard = cardRefs.current[cardRefs.current.length - 1];

        // 1. PIN UNTIL THE LAST CARD REACHES THE ALIGNED POSITION
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top+=96px", // Pins 96px from top
          // End pinning when the top of the LAST card matches the top of the pinned container
          endTrigger: lastCard,
          end: "top top+=96px",
          pin: pinnedWrapperRef.current,
          pinSpacing: false,
        });

        // 2. SCRUB IMAGES AS CARDS SCROLL
        cardRefs.current.forEach((cardEl, index) => {
          if (index === 0) return;

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
                start: "top 70%",
                end: "top 30%",
                scrub: true,
              },
            },
          );
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative mx-auto md:px-6 py-4 lg:py-12 max-w-7xl"
    >
      <div className="relative flex lg:flex-row flex-col items-start gap-12">
        {/* LEFT COLUMN: Scrolling Cards */}

        <div className="space-y-10 lg:space-y-24 lg:pb-[10vh] w-full lg:w-1/2">
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
