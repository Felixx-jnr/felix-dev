import React from "react";
import Navbar from "@/components/Navbar";
import StacksSection from "@/components/stacks/StacksSection";
import ProjectSection from "@/components/projects/ProjectSection";
import ServicesSection from "@/components/services/ServicesSection";
import ContactSection from "@/components/contact/ContactSection";
import Heroo from "@/components/Heroo";

function page() {
  return (
    <div>
      <Navbar />

      <Heroo />

      <StacksSection />

      <ProjectSection />

      <ServicesSection />
      <ContactSection />
    </div>
  );
}

export default page;
