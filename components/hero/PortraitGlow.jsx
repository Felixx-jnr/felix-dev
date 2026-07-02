"use client";

export default function PortraitGlow({ glowRef }) {
  return (
    <>
      {/* Main cyan glow */}
      <div
        ref={glowRef}
        className="z-0 absolute bg-cyan-400/20 blur-[180px] rounded-full w-[650px] h-[650px]"
      />

      {/* Purple glow */}
      <div className="z-0 absolute bg-violet-500/20 blur-[140px] rounded-full w-[420px] h-[420px]" />

      {/* Bottom glow */}
      <div className="bottom-8 z-10 absolute bg-cyan-300/25 blur-[90px] rounded-full w-[500px] h-[120px]" />
    </>
  );
}
