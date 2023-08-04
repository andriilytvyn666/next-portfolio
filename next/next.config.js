// next.config.js
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withContentlayer(nextConfig)
