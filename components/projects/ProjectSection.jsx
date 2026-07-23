"use client";

import ProjectBackground from "./ProjectBackground";
import ProjectGrid from "./ProjectGrid";
import Header from "../Header";
import { FiFolder } from "react-icons/fi";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative px-6 md:px-10 py-12 overflow-hidden"
    >
      <ProjectBackground />

      <div className="z-10 relative mx-auto max-w-8xl">
        <Header
          icon={<FiFolder />}
          header="Projects"
          label="Projects"
          description="A collection of applications I've designed and built, focused on performance, scalability, and creating exceptional user experiences across web and mobile platforms."
        />

        <ProjectGrid />

        {/* <ProjectButton /> */}
      </div>
    </section>
  );
}
