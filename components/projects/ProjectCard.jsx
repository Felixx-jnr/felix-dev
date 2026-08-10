"use client";

import { forwardRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import TechBadge from "./TechBadge";

const ProjectCard = forwardRef(({ project, index }, ref) => {
  return (
    <article
      ref={ref}
      className="group relative space-y-6 bg-background/30 hover:shadow-[0_0_60px_rgba(0,245,255,.15)] backdrop-blur-xl p-4 md:p-6 lg:p-8 border border-white/10 hover:border-white/20 rounded-3xl transition-all duration-300"
    >
      {/* Mobile-Only Image (Fallback for small screens) */}
      <div className="lg:hidden relative rounded-2xl w-full aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Title & Live Link */}
      <div className="flex justify-between items-start gap-4">
        <div>
          <span className="font-mono text-success text-xs uppercase tracking-wider">
            Project 0{index + 1}
          </span>
          <h3 className="mt-1 font-heading font-bold text-3xl">
            {project.title}
          </h3>
        </div>

        <Link
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-success/10 p-3 border border-success/30 rounded-full transition shrink-0"
          aria-label={`View live demo of ${project.title}`}
        >
          <FiArrowUpRight
            size={20}
            aria-hidden="true"
          />
        </Link>
      </div>

      {/* Description */}
      <p className="text-foreground-secondary text-base leading-relaxed">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div
        className="flex flex-wrap gap-2 pt-2"
        aria-label={`Technologies used in ${project.title}`}
      >
        {project.stack.map((tech) => (
          <TechBadge
            key={tech}
            tech={tech}
          />
        ))}
      </div>

      {/* Bottom Links */}
      <div className="flex justify-between items-center pt-4 border-white/10 border-t">
        <Link
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-foreground-secondary hover:text-success text-sm transition"
          aria-label={`View source code for ${project.title} on GitHub (opens in a new tab)`}
        >
          <FiGithub
            aria-hidden="true"
            size={18}
          />
          Source Code
        </Link>

        <Link
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-success text-sm hover:underline"
          aria-label={`Visit live demo of ${project.title} (opens in a new tab)`}
        >
          Live Demo →
        </Link>
      </div>
    </article>
  );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
