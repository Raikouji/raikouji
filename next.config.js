/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.microcms-assets.io',
				port: '',
				pathname: '/assets/**',
			},
			{
				protocol: 'https',
				hostname: '**.unsplash.com',
				port: '',
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
