import type { NextConfig } from "next";

// Hosted on Vercel from the domain root, so no basePath.
// NEXT_PUBLIC_BASE_PATH stays defined (empty) because components read it
// to build asset/link URLs.
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
