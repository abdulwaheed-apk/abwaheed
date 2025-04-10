/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.microlink.io"], // Microlink Image Preview
  },
  // Explicitly disable experimental features if not needed
  experimental: {
    instrumentationHook: false,
  },
};

// Export just the plain Next.js config without Sentry
export default nextConfig;