import type {
  MicroCMSDate,
  MicroCMSImage,
  MicroCMSQueries,
} from 'microcms-js-sdk'

import { createClient } from 'microcms-js-sdk'

// news の型定義
export type News = {
  id: string
  title: string
  content: string
  eyecatch?: MicroCMSImage
} & MicroCMSDate

// gallery の型定義
export type Gallery = {
  id: string
  caption?: string
  category: string[]
  isDisplayOnHome: boolean
  photo: MicroCMSImage
} & MicroCMSDate

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
})

/**
 * 新着情報の一覧を取得
 * @param queries
 */
export const getList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<News>({
    endpoint: 'news',
    queries,
  })

  // データの取得が目視しやすいよう明示的に遅延効果を追加
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return listData
}

/**
 * 新着情報の詳細を取得
 * @param contentId
 * @param queries
 */
export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  const detailData = await client.getListDetail<News>({
    endpoint: 'news',
    contentId,
    queries,
  })

  // データの取得が目視しやすいよう明示的に遅延効果を追加
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return detailData
}

/**
 * ギャラリーの写真一覧を取得
 * @param queries
 */
export const getGalleryPhotos = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Gallery>({
    endpoint: 'gallery',
    queries,
  })

  // データの取得が目視しやすいよう明示的に遅延効果を追加
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return listData
}
