import Link from 'next/link'

import { cn } from '@/lib/cn'
import { getBlogList } from '@/lib/microcms'
import { format, parseISO } from 'date-fns'

export default async function NewsList({
	className,
	...delegated
}: {
	className?: string
}) {
	const { contents } = await getBlogList()

	if (!contents || contents.length === 0) {
		return <p>お知らせはありません</p>
	}

	// 投稿を年別にグループ化し、各年の投稿を日時降順で並び替え
	const postsByYear = contents.reduce(
		(acc, post) => {
			const year = format(parseISO(post.publishedAt as string), 'yyyy')
			if (!acc[year]) {
				acc[year] = []
			}
			acc[year].push(post)
			acc[year].sort(
				(a, b) =>
					parseISO(b.publishedAt || new Date().toISOString()).getTime() -
					parseISO(a.publishedAt || new Date().toISOString()).getTime(),
			)
			return acc
		},
		{} as Record<string, typeof contents>,
	)

	return (
		<div className={cn('flex flex-col gap-4', { className })} {...delegated}>
			{Object.entries(postsByYear)
				.sort(
					([yearA], [yearB]) => Number.parseInt(yearB) - Number.parseInt(yearA),
				) // 年を降順に並べ替え
				.map(([year, posts]) => (
					<section key={year}>
						<h2 className='text-base border-b-2 border-primary-400/50'>
							{year}年
						</h2>
						<ul>
							{posts.map((post) => (
								<Link key={post.id} href={`/news/${post.id}`}>
									<li className='flex flex-row gap-1 border-b border-dashed border-b-secondary-200 py-2 hover:opacity-80'>
										<span className='block shrink-0 basis-16 pt-0.5 text-sm'>
											{format(parseISO(post.publishedAt as string), 'MM月dd日')}
										</span>
										<p className='basis-auto text-base text-primary-dark underline'>
											{post.title}
										</p>
									</li>
								</Link>
							))}
						</ul>
					</section>
				))}
		</div>
	)
}
