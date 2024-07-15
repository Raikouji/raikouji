import { getBlogList } from '@/lib/microcms'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'

export default async function NewsList({
	className,
	...delegated
}: {
	className?: string
}) {
	const { contents } = await getBlogList()

	if (!contents || contents.length === 0) {
		return <p>No contents</p>
	}

	return (
		<ul className={className} {...delegated}>
			{contents.map((post) => {
				const date = parseISO(post.publishedAt as string)
				return (
					<Link
						key={post.id}
						href={`/news/${post.id}`}
						className='border-b border-dashed border-b-secondary-200 py-2 hover:opacity-80'
					>
						<li className='flex flex-row gap-1'>
							<span className='block shrink-0 basis-16 pt-0.5 text-sm'>
								{format(date, 'MM月dd日')}
							</span>
							<p className='basis-auto text-base text-primary-dark underline'>
								{post.title}
							</p>
						</li>
					</Link>
				)
			})}
		</ul>
	)
}
