/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

/**
 * Webpack Bundle Analyzer (@next/bundle-analyzer)
 */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({})
