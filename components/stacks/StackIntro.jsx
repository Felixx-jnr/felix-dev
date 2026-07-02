"use client";

import { FiArrowUpRight } from "react-icons/fi";

export default function StackIntro() {
  return (
    <div className="flex flex-col justify-between max-md:mt-4 h-full">
      <div className="max-sm:pl-4">
        {/* Section Label */}

        <span className="font-semibold text-success text-sm uppercase tracking-[0.25em]">
          My Toolbox:
        </span>

        {/* Heading */}

        <h2 className="mt-5 font-black text-4xl lg:text-5xl leading-tight">
          Technologies
          <br />
          <span className="bg-clip-text bg-gradient-to-r from-success via-primary to-accent text-transparent">
            I Work With
          </span>
        </h2>

        {/* Description */}

        <p className="mt-8 max-w-[280px] text-foreground-muted leading-8">
          A selection of modern technologies I use to build responsive, scalable
          and beautiful digital products for web and mobile.
        </p>
      </div>
    </div>
  );
}
