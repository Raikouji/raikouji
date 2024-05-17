import type { MicroCMSDate, MicroCMSImage } from 'microcms-js-sdk'

// basicInformation (ajisai) の型定義
export type BasicInformation = {
  isActive: boolean
  flowerState?: string
  flowerPhoto?: MicroCMSImage[]
} & MicroCMSDate

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
