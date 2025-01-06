import { withSentryConfig } from '@sentry/nextjs';

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

export default withSentryConfig(
    nextConfig,
    {
      org: "abwaheed",
      project: "javascript-nextjs",
      sentryUrl: "https://sentry.io/",
      silent: !process.env.CI,
      widenClientFileUpload: true,
      reactComponentAnnotation: { enabled: true },
      tunnelRoute: "/monitoring",
      hideSourceMaps: true,
      disableLogger: true,
      automaticVercelMonitors: true,
    },
    // Optional: Disable Sentry build-time instrumentation
    { dryRun: process.env.NODE_ENV !== "production" }
);
