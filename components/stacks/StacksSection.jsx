"use client";

import StackIntro from "./StackIntro";
import StackGrid from "./StackGrid";
import StacksGlow from "./StacksGlow";
import MountainBackground from "../hero/MountainBackground";
import Header from "../Header";
import { FiFolder } from "react-icons/fi";

export default function StackSection() {
  return (
    <section
      id="skills"
      className="relative flex justify-center md:px-6 lg:px-10 py-10 overflow-hidden"
    >
      <MountainBackground />
      <StacksGlow />

      <div>
        <div className="z-10 relative bg-background/40 backdrop-blur-xl mx-2 p-1 border-white/10 rounded-[20px] overflow-hidden">
          {/* soft border glow */}

          <div className="absolute inset-0 bg-gradient-to-br from-success/5 via-transparent to-accent/5 px-8 rounded-[20px] pointer-events-none" />

          <div className="relative justify-items-center items-center gap-8 lg:gap-14 md:grid grid-cols-[320px_1fr] md:p-4 lg:p-12">
            {/* Left Side */}
            <StackIntro />

            {/* Right Side */}
            <StackGrid />
          </div>
        </div>
      </div>
    </section>
  );
}
