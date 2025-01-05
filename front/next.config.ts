import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
      return [
        {
          destination: "http://localhost:8080/ping/:path*",
          source: "/ping/:path*"
        },
        {
          destination: "http://localhost:8080/poll/createPoll/:path*",
          source: "/poll/createPoll/:path*"
        },
        {
          destination: "http://localhost:8080/poll/:path*",
          source: "/poll/:path*"
        }
      ]
  },
};

export default nextConfig;
