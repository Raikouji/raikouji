import Link from 'next/link'
import { notFound } from 'next/navigation'

import ArticleWrapper from '@/components/ArticleWrapper'
import { Button } from '@/components/ui/button'
import { BASE_URL } from '@/constants'
import { getBlogDetail, getBlogList } from '@/lib/microcms' // generateMetadata
import { format, parseISO } from 'date-fns'
import parse from 'html-react-parser'
import type { Metadata } from 'next'
import { IoArrowUndoSharp } from 'react-icons/io5'

const headerImage = '/images/ajisai4.jpg'

type Props = {
	params: {
		id: string
		searchParams: { dk?: string }
	}
}

// TODO: 動作しない
export async function generateStaticParams() {
	const { contents } = await getBlogList()

	const paths = contents.map((post) => {
		return {
			postId: post.id,
		}
	})

	return [...paths]
}

export async function generateMetadata({
	params: { id, searchParams },
}: Props): Promise<Metadata> {
	const post = await getBlogDetail(id, {
		draftKey: searchParams.dk ?? undefined,
	})

	!post && notFound()

	return {
		title: post.title,
		description: post?.description ?? '',
		openGraph: {
			type: 'website',
			locale: 'ja_JP',
			url: `${BASE_URL}/news/${post.id}`,
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
	}
}

export default async function StaticDetailPage({
	params: { id },
	// searchParams,
}: Props) {
	const post = await getBlogDetail(id)

	if (!post) {
		notFound()
	}

	return (
		<ArticleWrapper pageTitle='お知らせ' headerImage={headerImage}>
			<div className='mx-auto max-w-screen-sm prose'>
				<h1 className='text-2xl my-0'>{post.title}</h1>
				<p className='mt-2 text-sm text-gray-500'>
					{format(parseISO(post.publishedAt as string), 'yyyy年MM月dd日')}
				</p>

				{parse(post.content)}
				<p className='mt-8 flex justify-center gap-2'>
					<Button variant='outline' asChild>
						<Link href='/news'>
							<IoArrowUndoSharp className='mr-2 opacity-50' /> 一覧に戻る
						</Link>
					</Button>
					<Button variant='outline' asChild>
						<Link href='/'>
							<IoArrowUndoSharp className='mr-2 opacity-50' /> トップに戻る
						</Link>
					</Button>
				</p>
			</div>
		</ArticleWrapper>
	)
}
