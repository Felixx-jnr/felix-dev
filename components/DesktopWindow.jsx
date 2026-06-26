"use client";

import { FiCircle, FiSearch, FiLayout } from "react-icons/fi";

export default function DesktopWindow() {
  return (
    <div className="w-[260px]">
      {/* Browser */}

      <div className="flex items-center gap-2 bg-background-secondary px-4 h-10">
        <FiCircle className="text-red-400" />
        <FiCircle className="text-yellow-400" />
        <FiCircle className="text-green-400" />

        <div className="flex flex-1 items-center bg-background ml-4 px-3 rounded-full h-7 text-xs">
          <FiSearch />

          <span className="opacity-60 ml-2">portfolio.dev</span>
        </div>
      </div>

      {/* Website */}

      <div className="space-y-4 p-5">
        <div className="bg-success rounded-full w-28 h-4" />

        <div className="bg-primary/30 rounded-full w-full h-3" />

        <div className="bg-primary/20 rounded-full w-4/5 h-3" />

        <div className="gap-3 grid grid-cols-2 mt-5">
          <div className="bg-success/20 rounded-xl h-24" />

          <div className="bg-primary/20 rounded-xl h-24" />
        </div>

        <div className="flex justify-between items-center mt-4">
          <FiLayout
            className="text-success"
            size={20}
          />

          <div className="bg-accent rounded-full w-10 h-10" />
        </div>
      </div>
    </div>
  );
}
