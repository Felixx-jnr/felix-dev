"use client";

import HeroRight from "@/components/hero/HeroRight";
import HeroLeft from "@/components/hero/HeroLeft";
import GlowBackground from "@/components/hero/GlowBackground";
import MountainBackground from "@/components/hero/MountainBackground";
import Particles from "@/components/hero/Particles";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-between px-6 md:px-8 lg:px-10 pt-28 pb-12 w-full overflow-hidden text-foreground"
    >
      <MountainBackground />

      <GlowBackground />

      <Particles />

      <div className="z-10 flex lg:flex-row flex-col-reverse lg:items-center gap-6 my-auto lg:px-10">
        {/* Left Side: Content */}
        <div className="flex-1 shrink-0">
          <HeroLeft />
        </div>

        <div className="flex flex-1 justify-center max-sm:mb-20">
          <HeroRight />
        </div>
      </div>

      {/* Metrics Box */}
      <div className="z-10 gap-6 grid grid-cols-2 sm:grid-cols-4 md:col-span-9 bg-background/20 backdrop-blur-md p-6 md:p-8 border border-white/20 rounded-2xl sm:text-left text-center">
        {[
          {
            value: "15+",
            label: "Projects Completed",
            color: "text-purple-400",
          },
          {
            value: "2+",
            label: "Years Experience",
            color: "text-emerald-400",
          },
          { value: "10+", label: "Happy Clients", color: "text-cyan-400" },
          {
            value: "100%",
            label: "Client Satisfaction",
            color: "text-yellow-400",
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="space-y-1"
          >
            <h3 className={`text-2xl md:text-3xl font-black ${stat.color}`}>
              {stat.value}
            </h3>
            <p className="text-gray-400 text-xs leading-tight">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
