import type React from 'react'

import ArticleWrapper from '@/components/ArticleWrapper'
import ImageAboveHeading from '@/components/ImageAboveHeading'
import { cn } from '@/lib/cn'
import { getMetadata } from '@/lib/get-metadata'

import type { Metadata } from 'next'

const pageTitle = 'サイトマップ'
const pageDescription = '頼光寺のサイトマップです。'
const headerImage = '/images/lotus2.jpg'

export const metadata: Metadata = getMetadata({
	title: pageTitle,
	description: pageDescription,
})

const pageList = [
	{
		title: 'ホーム',
		url: '/',
	},
	{
		title: 'ごあいさつ・沿革',
		url: '/greeting',
	},
	{
		title: '頼光寺について',
		url: '/about',
	},
	{
		title: '御朱印、仏前結婚式',
		url: '/scared-seal',
	},
	{
		title: 'ギャラリー',
		url: '/gallery',
	},
	{
		title: '紫陽閣(多目的ホール)の貸し出し',
		url: '/multi-purpose-hall',
	},
	{
		title: '行事案内',
		url: '/events',
	},
	{
		title: '墓地の案内 (水子供養・永代供養)',
		url: '/cemetery',
	},
	{
		title: 'アクセス',
		url: '/access',
	},
	{
		title: 'リンク',
		url: '/links',
	},
	{
		title: 'プライバシーポリシー',
		url: '/privacy-policy',
	},
	{
		title: 'お知らせ',
		url: '/news',
	},
	{
		title: 'お問合せ',
		url: '/contact',
	},
]

function Sitemap({
	links,
	className,
}: {
	links: { title: string; url: string }[]
	className?: string
}) {
	return (
		<ul
			className={cn(
				'list-inside list-disc md:grid md:grid-cols-2 md:gap-x-4',
				className,
			)}
		>
			{links.map(({ title, url }) => (
				<li
					key={crypto.randomUUID()}
					className='border-b-1 border-b border-dotted border-b-gray-300 px-4 py-2 md:py-4'
				>
					<a href={url} className='text-primary-700 hover:text-primary-400'>
						{title}
					</a>
				</li>
			))}
		</ul>
	)
}

export default function Page() {
	return (
		<ArticleWrapper pageTitle={pageTitle} headerImage={headerImage}>
			<div className=' flex flex-col gap-12 lg:flex-row lg:gap-20'>
				<section className='mx-auto max-w-screen-lg'>
					<Sitemap links={pageList} className='my-8 font-bold' />
				</section>
			</div>
		</ArticleWrapper>
	)
}
