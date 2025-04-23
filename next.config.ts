import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['vdtech.vercel.app']
  }
};

export default nextConfig;
