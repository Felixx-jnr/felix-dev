"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { services } from "./servicesData";
import ServiceCard from "./ServiceCard";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ServicesGrid() {
  const serviceRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".service-card",

        {
          opacity: 0,
          y: 70,
          scale: 0,
          rotate: -4,
        },

        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: 0,
          duration: 0.8,
          stagger: {
            amount: 0.9,
            from: "start",
          },
          ease: "power3.out",
          scrollTrigger: {
            trigger: serviceRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    {
      scope: serviceRef,
    },
  );

  return (
    <div
      ref={serviceRef}
      className="gap-6 xl:gap-4 grid sm:grid-cols-2 xl:grid-cols-4 services"
    >
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
        />
      ))}
    </div>
  );
}
