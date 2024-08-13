import { BASE_URL, SITE_TITLE } from '@/constants'

/**
 * Meta タグ
 */
type Metadata = {
	title: string
	description: string
	openGraph?: {
		title: string
		description: string
		url: string
		siteName: string
		images: {
			url: string
			width: number
			height: number
			alt?: string
		}[]
		locale: string
		type: string
	}
}

export const getMetadata = ({ title, description, openGraph }: Metadata) => {
	return {
		title: title,
		description: description,
		openGraph: {
			title: title,
			description: description,
			url: BASE_URL,
			siteName: SITE_TITLE,
			images: [
				{
					url: `${BASE_URL}/og.png`,
					width: 800,
					height: 600,
				},
				{
					url: `${BASE_URL}/og-alt.png`,
					width: 1800,
					height: 1600,
					alt: `${SITE_TITLE} post image`,
				},
			],
			locale: 'ja_JP',
			type: 'website',
		},
	}
}
