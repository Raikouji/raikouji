/** @type {import('next').NextConfig} */
const nextConfig = {
  // domains: ['images.microcms-assets.io'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
        port: '',
        pathname: '/assets/**',
      },
    ],
  },
}

/**
 * Webpack Bundle Analyzer (@next/bundle-analyzer)
 */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)
