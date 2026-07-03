"use client";

import ProjectGlow from "./ProjectGlow";
import MountainBackground from "../hero/MountainBackground";
import Particles from "../hero/Particles";

export default function ProjectBackground() {
  return (
    <>
      {/* Animated Glows */}
      <ProjectGlow />

      {/* Bottom Neon Waves */}
      <MountainBackground />

      {/* Floating Particles */}
      <Particles />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,.35)_100%)]" />

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/70 pointer-events-none" />
    </>
  );
}
