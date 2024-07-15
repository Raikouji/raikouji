// TODO: ダイナミックコンテンツのサイトマップを生成 (p271)

import type { MetadataRoute } from 'next'

const buildUrl = (path: string) => `https://ajisai-raikouji.com${path ?? ''}`

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const now = new Date().toISOString()

	return [
		{
			url: buildUrl('/'),
			lastModified: now,
			changeFrequency: 'daily',
			priority: 1,
		},
		{
			url: buildUrl('/about'),
			lastModified: now,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: buildUrl('/events'),
			lastModified: now,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: buildUrl('/cemetery'),
			lastModified: now,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: buildUrl('/multi-purpose-hall'),
			lastModified: now,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: buildUrl('/scarlet-seal'),
			lastModified: now,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: buildUrl('/access'),
			lastModified: now,
			changeFrequency: 'monthly',
			priority: 0.5,
		},
		{
			url: buildUrl('/contact'),
			lastModified: now,
			changeFrequency: 'monthly',
			priority: 0.5,
		},
		{
			url: buildUrl('/links'),
			lastModified: now,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: buildUrl('/privacy-policy'),
			lastModified: now,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: buildUrl('/news'),
			lastModified: now,
			changeFrequency: 'daily',
			priority: 0.8,
		},
		{
			url: buildUrl('/gallery'),
			lastModified: now,
			changeFrequency: 'weekly',
			priority: 0.8,
		},
	]
}
