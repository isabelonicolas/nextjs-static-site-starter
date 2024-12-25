import type { NextConfig } from "next";
import dotenv from "dotenv"

dotenv.config({ path: `environments/.env.${process.env.APP_ENV}` })

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
};

export default nextConfig;
