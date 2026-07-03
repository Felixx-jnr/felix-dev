"use client";

import { projects } from "./projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  return (
    <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}
