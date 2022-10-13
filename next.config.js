/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.postimg.cc']
  },
  env: {
    gtag: process.env.GTAG
  }
}

module.exports = nextConfig
