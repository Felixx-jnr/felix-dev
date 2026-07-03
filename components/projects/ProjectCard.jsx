"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import TechBadge from "./TechBadge";

gsap.registerPlugin(useGSAP);

export default function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const glowRef = useRef(null);
  const arrowRef = useRef(null);

  useGSAP(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 60,
      duration: 0.9,
      ease: "power4.out",
    });
  }, []);

  const handleMove = (e) => {
    const card = cardRef.current;
    const glow = glowRef.current;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;

    const rotateX = ((y - rect.height / 2) / rect.height) * -10;
    const rotateY = ((x - rect.width / 2) / rect.width) * 10;

    gsap.to(card, {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      duration: 0.3,
    });
  };

  const handleEnter = () => {
    gsap.to(glowRef.current, {
      opacity: 1,
      duration: 0.3,
    });

    gsap.to(imageRef.current, {
      scale: 1.08,
      duration: 0.5,
    });

    gsap.to(arrowRef.current, {
      rotate: -45,
      x: 4,
      y: -4,
      duration: 0.35,
    });

    gsap.to(cardRef.current, {
      y: -12,
      duration: 0.35,
    });
  };

  const handleLeave = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      y: 0,
      duration: 0.4,
    });

    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.4,
    });

    gsap.to(glowRef.current, {
      opacity: 0,
      duration: 0.3,
    });

    gsap.to(arrowRef.current, {
      rotate: 0,
      x: 0,
      y: 0,
      duration: 0.35,
    });
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="group relative bg-background/30 hover:shadow-[0_0_60px_rgba(0,245,255,.15)] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden transition-shadow duration-500"
    >
      {/* Mouse Glow */}

      <span
        ref={glowRef}
        className="absolute bg-success/20 opacity-0 blur-[80px] rounded-full w-60 h-60 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      />

      {/* Gradient Border */}

      <div className="absolute inset-0 bg-gradient-to-br from-success/20 via-primary/10 to-accent/20 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500" />

      {/* Image */}

      <div className="relative h-64 overflow-hidden">
        <Image
          ref={imageRef}
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      {/* Content */}

      <div className="z-10 relative space-y-5 p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-heading font-bold text-2xl">{project.title}</h3>

            <p className="mt-2 text-foreground-secondary text-sm leading-7">
              {project.description}
            </p>
          </div>

          <Link
            href={project.live}
            className="hover:bg-success/10 p-3 border border-success/30 rounded-full transition"
          >
            <FiArrowUpRight
              ref={arrowRef}
              size={18}
            />
          </Link>
        </div>

        {/* Tech */}

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <TechBadge
              key={tech}
              tech={tech}
            />
          ))}
        </div>

        {/* Bottom */}

        <div className="flex justify-between items-center pt-2">
          <Link
            href={project.github}
            className="flex items-center gap-2 text-foreground-secondary hover:text-success text-sm transition"
          >
            <FiGithub />
            Source Code
          </Link>

          <Link
            href={project.live}
            className="font-medium text-success"
          >
            Live Demo →
          </Link>
        </div>
      </div>
    </article>
  );
}
