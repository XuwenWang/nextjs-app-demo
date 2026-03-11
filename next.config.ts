import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
    /* config options here */
    output: "export",
    basePath: isProd ? "/nextjs" : "", // Replace with your repository name
    assetPrefix: isProd ? "/nextjs/" : "", // Replace with your repository name
    images: {
        unoptimized: true, // Recommended for static export with Next.js Image component
    },
};

export default nextConfig;
