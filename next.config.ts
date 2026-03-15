import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
        protocol: "http",
        hostname: "103.174.189.183",
      },
      {
        protocol: "http",
        hostname: "a45b-160-187-108-68.ngrok-free.app",
      },
      {
        protocol: "https",
        hostname: "biovue-ai.onrender.com",
      },
    ],
  },
};

export default nextConfig;