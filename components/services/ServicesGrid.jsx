"use client";

import { services } from "./servicesData";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {
  return (
    <div className="gap-8 grid md:grid-cols-2 xl:grid-cols-4">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
        />
      ))}
    </div>
  );
}
