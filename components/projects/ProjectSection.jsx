"use client";

import ProjectBackground from "./ProjectBackground";
import ProjectsHeader from "./ProjectsHeader";
import ProjectGrid from "./ProjectGrid";
// import ProjectButton from "./ProjectButton";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative px-6 md:px-10 py-12 overflow-hidden"
    >
      <ProjectBackground />

      <div className="z-10 relative mx-auto max-w-8xl">
        <ProjectsHeader />

        <ProjectGrid />

        {/* <ProjectButton /> */}
      </div>
    </section>
  );
}
