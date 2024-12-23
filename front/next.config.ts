import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
      return [
        {
          destination: "http://localhost:8080/ping/:path*",
          source: "/ping/:path*"
        }
      ]
  },
};

export default nextConfig;
