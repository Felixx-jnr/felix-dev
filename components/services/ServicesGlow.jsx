"use client";

export default function ServicesGlow() {
  return (
    <>
      <div className="top-0 left-0 absolute bg-success/15 blur-[170px] rounded-full w-[450px] h-[450px] animate-glow-left pointer-events-none [will-change:transform]" />

      <div className="right-0 bottom-0 absolute bg-primary/15 blur-[170px] rounded-full w-[450px] h-[450px] animate-glow-right pointer-events-none [will-change:transform]" />
    </>
  );
}
