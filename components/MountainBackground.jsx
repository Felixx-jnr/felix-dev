"use client";

import Image from "next/image";

export default function MountainBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Mountains */}
      <Image
        src="/bb.png"
        alt="mountains"
        fill
        priority
        className="opacity-30 dark:opacity-40 object-bottom object-cover select-none"
      />

      {/* Fade into background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
    </div>
  );
}
