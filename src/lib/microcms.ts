import type { Blog, Gallery } from '@/types/post'
import { type MicroCMSQueries, createClient } from 'microcms-js-sdk'

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

/**
 * ギャラリー (リスト)
 */

// 一覧を取得
export const getGalleryList = async (queries?: MicroCMSQueries) => {
	return await client.getList<Gallery>({
		customRequestInit: {
			cache: "no-store", // キャッシュを利用せずに常に新しいデータを取得する
		},
		endpoint: 'gallery',
		queries,
	})
}
