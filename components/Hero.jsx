"use client";

import {
  FiArrowUpRight,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiZap,
} from "react-icons/fi";
import HeroRight from "./HeroRight";
import GlowBackground from "./GlowBackground";
import MountainBackground from "./MountainBackground";
import Particles from "./Particles";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col justify-between px-6 md:px-16 pt-28 pb-12 w-full min-h-screen overflow-hidden text-foreground"
    >
      {/* <div className="backgroundOne">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div> */}

      <MountainBackground />

      <GlowBackground />

      <Particles />

      {/* <div className="backgroundTwo">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div> */}
      {/* Main Grid Content */}

      <div className="z-10 flex lg:flex-row flex-col justify-between items-center my-auto">
        {/* Left Side: Content */}
        <div className="flex flex-col space-y-6 lg:col-span-6">
          <div className="inline-flex items-center gap-2 bg-success/5 px-3 py-2 border border-success/30 rounded-full w-fit font-heading font-semibold text-success text-xs tracking-wider">
            <span className="text-success">
              <FiZap size={24} />
            </span>
            FRONTEND DEVELOPER
          </div>

          <h1 className="font-mono font-extrabold text-foreground text-4xl sm:text-5xl md:text-6xl leading-none tracking-normal">
            I craft digital <br />
            <span className="bg-clip-text bg-gradient-to-r from-success via-success to-primary text-transparent">
              experiences
            </span>{" "}
            <br />
            for web & mobile
          </h1>

          <p className="max-w-md text-foreground text-sm sm:text-base leading-relaxed">
            I build responsive websites and cross-platform mobile applications
            with modern technologies and a focus on clean code and intuitive
            design.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="flex items-center gap-2 bg-gradient-to-r from-30% from-success to-[#2f9655] px-6 py-3 rounded-full font-bold text-black text-sm transition-opacity">
              Explore Projects <FiArrowUpRight size={16} />
            </button>

            <button className="flex items-center gap-2 bg-background/40 hover:bg-success/60 px-6 py-3 border border-success rounded-full font-medium text-success text-sm transition-colors">
              Let's Talk <FiSend size={16} />
            </button>
          </div>

          {/* Social Icons */}
          <div className="pt-6">
            <span className="block mb-3 font-bold text-gray-500 text-xs tracking-wider">
              FIND ME ON
            </span>
            <div className="flex items-center gap-3">
              {[FiGithub, FiLinkedin, FiTwitter, FiInstagram].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="bg-success/20 hover:bg-success/50 p-2.5 border border-success hover:border-success rounded-xl text-success transition-all"
                  >
                    <Icon size={16} />
                  </a>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Right Side: Profile & Orbit Center Placeholder */}
        <HeroRight />
      </div>

      {/* Bottom Row: Scroll Indicator & Metrics Grid */}
      {/* <div className="z-10 items-end gap-6 grid grid-cols-1 md:grid-cols-12 mt-12 pt-6 border-white/5 border-t w-full"> */}
      {/* Scroll down indicator */}
      <div className="hidden md:flex flex-col justify-center items-center md:col-span-3 mx-auto lg:mx-0 w-fit">
        <div className="flex justify-center p-1.5 border-2 border-gray-600 rounded-full w-5 h-9">
          <div className="bg-emerald-400 rounded-full w-1 h-2 animate-bounce" />
        </div>
        <span className="block mt-2 font-bold text-[10px] text-gray-500 text-center tracking-widest">
          SCROLL DOWN
        </span>
      </div>

      {/* Metrics Box */}
      <div className="gap-6 grid grid-cols-2 sm:grid-cols-4 md:col-span-9 bg-gray-900/20 backdrop-blur-sm p-6 md:p-8 border border-white/5 rounded-2xl sm:text-left text-center">
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
      {/* </div> */}
    </section>
  );
}
