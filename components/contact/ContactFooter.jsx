"use client";

import { FiArrowUp } from "react-icons/fi";

export default function ContactFooter() {
  const currentYear = new Date().getFullYear();

  function scrollToTop() {
    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <footer className="flex md:flex-row flex-col justify-between items-center gap-6 pt-10 text-foreground-muted text-sm">
      <div className="md:text-left text-center">
        <p>© {currentYear} Felix. All rights reserved.</p>

        <p className="mt-2 text-xs">
          Designed and developed with Next.js, Tailwind CSS and GSAP.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <span className="hidden sm:block text-xs uppercase tracking-[0.15em]">
          Back to top
        </span>

        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="group flex justify-center items-center bg-success/10 hover:bg-success border border-success/30 rounded-full w-12 h-12 text-success hover:text-black transition-all hover:-translate-y-1 duration-300"
        >
          <FiArrowUp className="transition-transform group-hover:-translate-y-1 duration-300" />
        </button>
      </div>
    </footer>
  );
}
