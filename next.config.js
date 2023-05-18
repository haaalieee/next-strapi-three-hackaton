/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["https://main-web-ar.netlify.app/"],
    unoptimized: true
  }
}

module.exports = nextConfig
