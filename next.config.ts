import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lelzvrzlzgfkkfxvwtvf.supabase.co",
      },
    ],
  },
};

export default nextConfig;