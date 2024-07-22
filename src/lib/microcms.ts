import type { Blog, Gallery } from '@/types/post'
import { outputMetadata } from '@/utils'
import { type MicroCMSQueries, createClient } from 'microcms-js-sdk'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
	throw new Error('MICROCMS_SERVICE_DOMAIN is required')
}

if (!process.env.MICROCMS_API_KEY) {
	throw new Error('MICROCMS_API_KEY is required')
}

// API取得用のクライアントを作成
export const client = createClient({
	serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
	apiKey: process.env.MICROCMS_API_KEY,
	retry: true,
})

/**
 * 基本設定 (紫陽花の開花状況など。オブジェクト)
 */
export const getBasicInformation = async () => {
	return await client.get({
		endpoint: 'ajisai',
	})
}

/**
 * 新着情報 (リスト)
 */

// 一覧を取得
export const getBlogList = async (queries?: MicroCMSQueries) => {
	// await new Promise((resolve) => setTimeout(resolve, 3000)) // 確認用の遅延処理
	return await client.getList<Blog>({
		endpoint: 'blog',
		queries,
	})
}

// 詳細を取得
export const getBlogDetail = async (
	contentId: string,
	queries?: MicroCMSQueries,
) => {
	return await client.getListDetail<Blog>({
		endpoint: 'blog',
		contentId,
		queries,
	})
}

// メタデータを取得
export const generateMetadata = async ({
	params,
	searchParams,
}: {
	params: { id: string }
	searchParams: { dk?: string }
}): Promise<Metadata> => {
	try {
		const post = await getBlogDetail(params.id as string, {
			draftKey: searchParams.dk ?? undefined,
		})

		if (!post) {
			notFound()
		}

		return outputMetadata({
			title: post.title,
			description: post?.description ?? '',
			openGraph: {
				type: 'website',
				locale: 'ja_JP',
				url: `https://ajisai-raikouji.com/news/${post.id}`,
				siteName: '頼光寺',
				title: post.title,
				description: post?.description ?? '頼光寺からのお知らせ',
				images: [
					{
						url: post?.eyecatch?.url ?? '/og.jpg',
						width: 1200,
						height: 630,
						alt: post.title,
					},
				],
			},
		})
	} catch (error) {
		console.error('Error generating metadata:', error)
		notFound()
	}
}

/**
 * ギャラリー (リスト)
 */

// 一覧を取得
export const getGalleryList = async (queries?: MicroCMSQueries) => {
	return await client.getList<Gallery>({
		// customRequestInit: {
		// 	cache: "no-store", // キャッシュを利用せずに常に新しいデータを取得する
		// },
		endpoint: 'gallery',
		queries,
	})
}
