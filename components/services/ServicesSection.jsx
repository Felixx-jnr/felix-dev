"use client";

import ServicesGlow from "./ServicesGlow";
import ServicesHeader from "./ServicesHeader";
import ServicesGrid from "./ServicesGrid";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-36 overflow-hidden"
    >
      <ServicesGlow />

      <div className="z-10 relative mx-auto px-6 md:px-12 max-w-7xl">
        <ServicesHeader />

        <ServicesGrid />
      </div>
    </section>
  );
}
