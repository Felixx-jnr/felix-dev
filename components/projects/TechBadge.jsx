"use client";

export default function TechBadge({ tech }) {
  return (
    <span className="bg-background-secondary/40 hover:bg-success/10 hover:shadow-[0_0_18px_rgba(0,245,255,.2)] backdrop-blur-md px-3 py-1.5 border border-white/10 hover:border-success/40 rounded-full font-medium text-foreground-secondary hover:text-success text-xs transition-all duration-300">
      {tech}
    </span>
  );
}
