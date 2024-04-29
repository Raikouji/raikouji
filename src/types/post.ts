import type { MicroCMSDate, MicroCMSImage } from 'microcms-js-sdk'

// news の型定義
export type Blog = {
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
