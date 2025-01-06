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
          destination: "http://localhost:8080/poll/findAll/:path*",
          source: "/poll/findAll/:path*"
        },
        {
          destination: "http://localhost:8080/poll/findByPollIndex/:path*",
          source: "/poll/findByPollIndex/:path*"
        }
      ]
  },
};

export default nextConfig;
