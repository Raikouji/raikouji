import type { Metadata } from 'next'
import Link from 'next/link'

import ArticleWrapper from '@/components/ArticleWrapper'
import NewsList from '@/components/NewsList'
import { Button } from '@/components/ui/button'
import { getMetadata } from '@/lib/get-metadata'
import { IoArrowUndoSharp } from 'react-icons/io5'

const pageTitle = 'お知らせ'
const pageDescription = '頼光寺のお知らせの一覧です。'
const headerImage = '/images/temple-and-ajisai.jpg'

export const metadata: Metadata = getMetadata({
	title: pageTitle,
	description: pageDescription,
})

export default function Page() {
	return (
		<ArticleWrapper pageTitle={pageTitle} headerImage={headerImage}>
			<div className='mx-auto w-full max-w-screen-sm'>
				<main>
					<div className='flex flex-col gap-12 px-8 pb-12 lg:px-2'>
						<NewsList className='mt-4 flex flex-col' />
					</div>
					<p className='text-center'>
						<Button variant='outline' asChild>
							<Link href='/'>
								<IoArrowUndoSharp className='mr-2 opacity-50' /> トップに戻る
							</Link>
						</Button>
					</p>
				</main>
			</div>
		</ArticleWrapper>
	)
}
