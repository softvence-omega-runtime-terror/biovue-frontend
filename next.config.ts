import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    devtools: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com",
      },
      {
        protocol: "https",
        hostname: "api.dicebear.com",
      },
      {
        protocol: "http",
        hostname: "overapprehensive-optatively-meri.ngrok-free.dev",
      },
      {
        protocol: "https",
        hostname: "overapprehensive-optatively-meri.ngrok-free.dev",
      },
    ],
  },
};

export default nextConfig;