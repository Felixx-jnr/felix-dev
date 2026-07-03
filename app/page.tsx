import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/hero/Hero";
import StacksSection from "@/components/stacks/StacksSection";
import ProjectSection from "@/components/projects/ProjectSection";

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <StacksSection />
      <ProjectSection />
    </div>
  );
}

export default page;
