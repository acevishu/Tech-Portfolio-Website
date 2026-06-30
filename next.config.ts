import type { NextConfig } from "next";

const repo = "Tech-Portfolio-Website";
const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? `/${repo}` : "",
  assetPrefix: isGithubPages ? `/${repo}/` : "",
};

export default nextConfig;