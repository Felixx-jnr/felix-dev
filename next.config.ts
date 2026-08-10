import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [25, 30, 40, 75],
  },
};

export default nextConfig;
