"use client";

import {
  FiCircle,
  FiSearch,
  FiLock,
  FiCode,
  FiLayers,
  FiGrid,
} from "react-icons/fi";

export default function DesktopWindow() {
  return (
    <div className="bg-white/5 shadow-[0_20px_60px_rgba(0,245,255,.15)] backdrop-blur-2xl border border-white/10 rounded-3xl w-[290px] overflow-hidden">
      {/* Browser Header */}

      <div className="flex items-center gap-3 px-4 border-white/10 border-b h-11">
        <div className="flex gap-1.5">
          <div className="bg-red-400 rounded-full w-3 h-3" />
          <div className="bg-yellow-400 rounded-full w-3 h-3" />
          <div className="bg-green-400 rounded-full w-3 h-3" />
        </div>

        <div className="flex flex-1 items-center gap-2 bg-background/60 ml-3 px-3 rounded-full h-7 text-foreground-muted text-xs">
          <FiLock size={11} />
          <span>felix.dev</span>
        </div>
      </div>

      {/* Hero */}

      <div className="p-5">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-bold text-foreground text-sm">FELIX</h3>

            <p className="text-[10px] text-foreground-muted">
              Frontend Developer
            </p>
          </div>

          <div className="flex justify-center items-center bg-success/20 rounded-xl w-10 h-10 text-success">
            <FiCode size={18} />
          </div>
        </div>

        {/* Hero Image */}

        <div className="bg-gradient-to-br from-success/20 to-primary/20 mt-5 rounded-2xl h-28" />

        {/* Text */}

        <div className="space-y-2 mt-5">
          <div className="bg-success rounded-full w-28 h-2" />

          <div className="bg-white/10 rounded-full w-full h-2" />

          <div className="bg-white/10 rounded-full w-4/5 h-2" />
        </div>

        {/* Stats */}

        <div className="gap-3 grid grid-cols-3 mt-6">
          <div className="bg-success/10 p-3 rounded-xl text-center">
            <h4 className="font-bold text-success text-sm">15+</h4>

            <p className="text-[9px] text-foreground-muted">Projects</p>
          </div>

          <div className="bg-primary/10 p-3 rounded-xl text-center">
            <h4 className="font-bold text-primary text-sm">2+</h4>

            <p className="text-[9px] text-foreground-muted">Years</p>
          </div>

          <div className="bg-accent/10 p-3 rounded-xl text-center">
            <h4 className="font-bold text-accent text-sm">100%</h4>

            <p className="text-[9px] text-foreground-muted">Happy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
