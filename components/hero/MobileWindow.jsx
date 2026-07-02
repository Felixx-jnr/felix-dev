"use client";

import { FiHome, FiUser, FiGrid, FiCode, FiArrowRight } from "react-icons/fi";

export default function MobileWindow() {
  return (
    <div
      className="bg-white/5 shadow-[0_20px_60px_rgba(0,245,255,.15)] backdrop-blur-2xl border border-white/10 rounded-[32px] w-[190px] overflow-hidden"
    >
      {/* Dynamic Island */}

      <div className="flex justify-center py-3">
        <div className="bg-black/80 rounded-full w-20 h-5" />
      </div>

      {/* Screen */}

      <div className="px-4 pb-5">
        {/* Profile */}

        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center bg-gradient-to-br from-success/30 to-primary/30 rounded-full w-14 h-14">
            <FiCode
              size={22}
              className="text-success"
            />
          </div>

          <h3 className="mt-3 font-bold text-foreground text-sm">Felix</h3>

          <p className="text-[10px] text-foreground-muted">
            Frontend Developer
          </p>
        </div>

        {/* Hero Card */}

        <div className="bg-gradient-to-br from-success/15 to-primary/20 mt-5 p-4 rounded-2xl">
          <div className="bg-success rounded-full w-16 h-2" />

          <div className="bg-white/10 mt-3 rounded-full w-full h-2" />

          <div className="bg-white/10 mt-2 rounded-full w-4/5 h-2" />

          <button className="flex items-center gap-1 bg-success mt-4 px-3 py-2 rounded-full font-semibold text-[10px] text-black">
            View
            <FiArrowRight size={12} />
          </button>
        </div>

        {/* Stats */}

        <div className="gap-2 grid grid-cols-2 mt-4">
          <div className="bg-success/10 p-3 rounded-xl text-center">
            <h4 className="font-bold text-success text-sm">15+</h4>

            <p className="text-[9px] text-foreground-muted">Projects</p>
          </div>

          <div className="bg-primary/10 p-3 rounded-xl text-center">
            <h4 className="font-bold text-primary text-sm">2+</h4>

            <p className="text-[9px] text-foreground-muted">Years</p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}

      <div className="flex justify-around items-center border-white/10 border-t h-14 text-foreground-muted">
        <FiHome
          size={18}
          className="text-success"
        />

        <FiGrid size={18} />

        <FiUser size={18} />
      </div>
    </div>
  );
}
