import parse from 'html-react-parser'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getBlogDetail, getBlogList } from '@/lib/microcms'
import { outputMetadata } from '@/utils'

import ArticleWrapper from '@/components/ArticleWrapper'
import TocLink, { TocLinkItem } from '@/components/TocLink'

// for metadata
const pageTitle = '★★★★★★★★'
const pageDescription = '★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★'

export const metadata: Metadata = outputMetadata({
	title: pageTitle,
	description: pageDescription,
})

export async function generateStaticParams() {
	const { contents } = await getBlogList()

	const paths = contents.map((post) => {
		return {
			postId: post.id,
		}
	})

	return [...paths]
}

export default async function StaticDetailPage({
	params: { id },
}: {
	params: { id: string }
}) {
	const post = await getBlogDetail(id)

	if (!post) {
		notFound()
	}

	return (
		<ArticleWrapper pageTitle='お知らせ'>
			<h2>{post.title}</h2>
			<p>更新日: {new Date().toLocaleString()}</p>
			{parse(post.content)}
			<p>
				<a className='underline' href='../examples/microcms'>
					« 一覧に戻る
				</a>
			</p>
		</ArticleWrapper>
	)
}
