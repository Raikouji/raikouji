import type { Metadata } from 'next'
import type React from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'

import GetScrollBarWidth from '@/components/GetScrollBarWidth'
import ScrollToTopButton from '@/components/ScrollToTopButton'

import { BASE_URL, SITE_DESCRIPTION, SITE_TITLE } from '@/constants'
import './globals.css'

export const metadata: Metadata = {
	metadataBase: new URL(BASE_URL),
	title: {
		template: `%s | ${SITE_TITLE}`,
		default: SITE_TITLE,
	},
	description: SITE_DESCRIPTION,
	openGraph: {
		type: 'website',
		locale: 'ja_JP',
		url: BASE_URL,
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		images: [
			{
				url: '/og.jpg',
				width: 1200,
				height: 630,
				alt: SITE_TITLE,
			},
			{
				url: '/og-alt.jpg',
				width: 800,
				height: 420,
				alt: SITE_TITLE,
			},
		],
	},
	alternates: {
		canonical: BASE_URL,
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<GetScrollBarWidth>
			<html lang='ja' className='font-sans'>
				<body className='relative antialiased'>
					<Header />
					{children}
					<Footer />
					<ScrollToTopButton />
				</body>
			</html>
		</GetScrollBarWidth>
	)
}
