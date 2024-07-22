import { Button } from '@/components/ui/button'
import { format, parseISO } from 'date-fns'
import parse from 'html-react-parser'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { generateMetadata, getBlogDetail, getBlogList } from '@/lib/microcms'
import { outputMetadata } from '@/utils'

import ArticleWrapper from '@/components/ArticleWrapper'
import Link from 'next/link'
import { IoArrowUndoSharp } from 'react-icons/io5'

const headerImage = '/images/ajisai4.jpg'

// generateMetadata({
// 	params: { id: 'dummy' },
// 	searchParams: { dk: 'dummy' },
// })

export async function generateStaticParams() {
	const { contents } = await getBlogList()

	const paths = contents.map((post) => {
		return {
			postId: post.id,
		}
	})

	return [...paths]
}

type Props = {
	params: {
		id: string
		// searchParams: { dk?: string }
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
