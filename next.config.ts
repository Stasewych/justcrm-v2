import type { NextConfig } from "next";

// Served at the apex of www.justsolution.org (custom domain), no basePath needed.
const nextConfig: NextConfig = {
  output: "export",
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
