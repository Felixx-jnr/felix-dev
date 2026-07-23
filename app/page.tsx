import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/hero/Hero";
import StacksSection from "@/components/stacks/StacksSection";
import ProjectSection from "@/components/projects/ProjectSection";
import JourneySection from "@/components/journey/JourneySection";
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
      {/* <ContactSection /> */}
    </div>
  );
}

export default page;
