import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/hero/Hero";
import StacksSection from "@/components/stacks/StacksSection";

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <StacksSection />
    </div>
  );
}

export default page;
