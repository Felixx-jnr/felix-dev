"use client";

import ServicesGlow from "./ServicesGlow";
import ServicesGrid from "./ServicesGrid";
import { FiLayers } from "react-icons/fi";
import Header from "../Header";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-12 overflow-hidden scroll-mt-24"
    >
      <ServicesGlow />

      <div className="z-10 relative mx-auto px-4 md:px-12 max-w-8xl">
        <Header
          icon={<FiLayers className="text-success" />}
          text="Featured"
          header="Services"
          label="What I Offer"
          description="From responsive web applications to cross-platform mobile apps, I build fast, scalable, and engaging digital experiences."
        />

        <ServicesGrid />
      </div>
    </section>
  );
}
