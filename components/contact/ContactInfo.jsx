"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { contactDetails } from "./contactData";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ContactInfo() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".contact-heading", {
        opacity: 0,
        y: 80,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
      }).fromTo(
        ".contact-info-item",
        {
          opacity: 0,
          x: -80,
          scale: 0.95,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=0.1",
      );
    },
    {
      scope: containerRef,
    },
  );

  return (
    <div
      ref={containerRef}
      className="relative bg-background/35 backdrop-blur-2xl p-6 md:p-8 border border-white/10 rounded-[32px] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-success/10 via-transparent to-primary/10 pointer-events-none" />

      <div className="z-10 relative">
        <span className="font-semibold text-success text-sm uppercase tracking-[0.2em] contact-heading header">
          Contact Details
        </span>

        <h3 className="mt-4 font-heading font-bold text-3xl contact-heading label">
          Start a conversation
        </h3>

        <p className="mt-4 text-foreground-muted leading-7 contact-heading desc">
          I&apos;m open to freelance projects, remote opportunities, contract
          work, and meaningful collaborations.
        </p>

        <div className="space-y-4 mt-10">
          {contactDetails.map((detail) => {
            const Icon = detail.icon;

            const content = (
              <>
                <div className="flex flex-none justify-center items-center bg-success/10 border border-success/20 rounded-2xl w-12 h-12 text-success group-hover:scale-110 duration-300">
                  <Icon size={20} />
                </div>

                <div className="min-w-0">
                  <span className="block text-foreground-muted text-xs uppercase tracking-[0.15em]">
                    {detail.label}
                  </span>

                  <span className="block mt-1 font-medium text-foreground break-words">
                    {detail.value}
                  </span>
                </div>
              </>
            );

            if (detail.href) {
              return (
                <a
                  key={detail.id}
                  href={detail.href}
                  className="group flex items-center gap-4 bg-white/[0.025] hover:bg-success/[0.07] p-4 border border-white/10 hover:border-success/30 rounded-2xl transition-all duration-300 contact-info-item"
                >
                  {content}
                </a>
              );
            }

            return (
              <div
                key={detail.id}
                className="group flex items-center gap-4 bg-white/[0.025] p-4 border border-white/10 rounded-2xl contact-info-item"
              >
                {content}
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-3 mt-10 contact-info-item">
          <span className="relative flex w-3 h-3">
            <span className="inline-flex absolute bg-success opacity-75 rounded-full w-full h-full animate-ping" />
            <span className="inline-flex relative bg-success rounded-full w-3 h-3" />
          </span>

          <span className="text-foreground-secondary text-sm">
            Currently available for new opportunities
          </span>
        </div>
      </div>
    </div>
  );
}
