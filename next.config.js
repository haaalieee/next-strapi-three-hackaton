/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["main-web-ar.netlify.app"],
    unoptimized: true
  }
}

module.exports = nextConfig
