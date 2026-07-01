import React from "react";
import {
  FiArrowUpRight,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiZap,
} from "react-icons/fi";

const HeroLeft = () => {
  return (
    <div className="flex flex-col space-y-4 lg:col-span-6">
      <div className="inline-flex items-center gap-2 bg-success/5 px-2 py-2 border border-success/30 rounded-full w-fit font-heading font-semibold text-success text-xs tracking-wider">
        <span className="text-success">
          <FiZap size={24} />
        </span>
        FRONTEND DEVELOPER
      </div>

      <h1 className="font-mono font-extrabold text-foreground text-5xl sm:text-6xl lg:text-6xl md:text-7xl leading-none tracking-normal">
        I craft digital <br />
        <span className="bg-clip-text bg-gradient-to-r from-success via-success to-primary text-transparent">
          experiences
        </span>{" "}
        <br />
        for web & mobile
      </h1>

      <p className="max-w-md text-foreground text-sm sm:text-base leading-relaxed">
        I build responsive websites and cross-platform mobile applications with
        modern technologies and a focus on clean code and intuitive design.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 pt-2">
        <button className="flex items-center gap-2 bg-gradient-to-r from-30% from-success to-[#2f9655] px-3 sm:px-6 py-3 rounded-full font-bold text-black text-sm transition-opacity">
          Explore Projects <FiArrowUpRight size={16} />
        </button>

        <button className="flex items-center gap-2 bg-background/40 hover:bg-success/60 px-3 sm:px-6 py-3 border border-success rounded-full font-medium text-success text-sm transition-colors">
          Let's Talk <FiSend size={16} />
        </button>
      </div>

      {/* Social Icons */}
      <div className="pt-2 pb-4">
        <span className="block my-3 font-bold text-gray-500 text-xs tracking-wider">
          FIND ME ON
        </span>
        <div className="flex items-center gap-3">
          {[FiGithub, FiLinkedin, FiTwitter, FiInstagram].map((Icon, idx) => (
            <a
              key={idx}
              href="#"
              className="bg-success/20 hover:bg-success/50 p-2.5 border border-success hover:border-success rounded-xl text-success transition-all"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;
