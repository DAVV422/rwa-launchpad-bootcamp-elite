import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
    resolveAlias: {
      "@stellar/stellar-sdk": "@stellar/stellar-sdk/lib/index.js",
    },
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@stellar/stellar-sdk$": require.resolve("@stellar/stellar-sdk/lib/index.js"),
    };
    return config;
  },
};

export default nextConfig;
