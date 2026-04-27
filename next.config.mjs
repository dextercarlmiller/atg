import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

// Set up Cloudflare dev platform in development
if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

export default nextConfig;
