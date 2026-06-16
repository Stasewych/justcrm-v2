import type { NextConfig } from "next";

// Hosted on Vercel from the domain root, so no basePath.
// NEXT_PUBLIC_BASE_PATH stays defined (empty) because components read it
// to build asset/link URLs.
const nextConfig: NextConfig = {
  // No `output: "export"`: Vercel builds Next natively (pages stay SSG/static)
  // and serves clean URLs without the `Content-Disposition: inline; filename`
  // header that made pages download instead of render. Static export was only
  // needed for dumb static hosts; on Vercel it breaks page delivery.
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
