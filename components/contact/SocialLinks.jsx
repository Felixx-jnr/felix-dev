"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { socialLinks } from "./contactData";

gsap.registerPlugin(useGSAP);

export default function SocialLinks() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".contact-social-link",
        {
          opacity: 0,
          y: 30,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.12,
          duration: 0.6,
          ease: "back.out(1.8)",
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="flex sm:flex-row flex-col justify-between items-center gap-6 mt-16 py-8 border-white/10 border-y"
    >
      <div className="sm:text-left text-center">
        <span className="block font-semibold text-foreground text-sm uppercase tracking-[0.18em]">
          Find me online
        </span>

        <p className="mt-1 text-foreground-muted text-sm">
          Follow my work and connect with me.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {socialLinks.map((social) => {
          const Icon = social.icon;

          return (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              title={social.label}
              className="group flex justify-center items-center bg-white/5 hover:bg-success/10 opacity-100 border border-white/15 hover:border-success/40 rounded-2xl w-12 h-12 text-white hover:text-success transition-all hover:-translate-y-1 duration-300 contact-social-link shrink-0"
            >
              <Icon
                size={21}
                aria-hidden="true"
                className="block shrink-0"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}
