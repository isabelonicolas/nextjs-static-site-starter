/** @type {import('next').NextConfig} */
import dotenv from "dotenv"

dotenv.config({ path: `environments/.env.${process.env.APP_ENV}` })

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  unoptimized: true,
}

export default nextConfig
