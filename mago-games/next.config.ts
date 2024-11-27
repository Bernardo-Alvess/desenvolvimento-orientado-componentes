import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    domains: ['shared.cloudflare.steamstatic.com', 'cdn.akamai.steamstatic.com'], // Add more domains as needed
  },
}

export default nextConfig;
