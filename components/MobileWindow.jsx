"use client";

import { FiSmartphone, FiHome, FiUser } from "react-icons/fi";

export default function MobileWindow() {
  return (
    <div className="bg-[#999]/10 backdrop-blur-md rounded-[28px] w-[170px] overflow-hidden">
      {/* Notch */}

      <div className="flex justify-center py-3">
        <div className="bg-black rounded-full w-16 h-2" />
      </div>

      {/* Screen */}

      <div className="space-y-4 px-4 pb-5">
        <div className="bg-success rounded-xl h-24" />

        <div className="space-y-2">
          <div className="bg-primary/20 rounded-full h-3" />

          <div className="bg-primary/20 rounded-full h-3" />
        </div>

        <div className="gap-2 grid grid-cols-2">
          <div className="bg-success/20 rounded-xl h-16" />

          <div className="bg-primary/20 rounded-xl h-16" />
        </div>
      </div>

      {/* Bottom */}

      <div className="flex justify-around py-4 border-white/10 border-t">
        <FiHome />

        <FiSmartphone />

        <FiUser />
      </div>
    </div>
  );
}
