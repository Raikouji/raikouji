import ArticleWrapper from '@/components/ArticleWrapper'
import NewsList from '@/components/NewsList'
import { Button, buttonVariants } from '@/components/ui/button'
import { outputMetadata } from '@/utils'
import type { Metadata } from 'next'
import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'

// for metadata
const pageTitle = 'お知らせ'
const pageDescription = '頼光寺からのお知らせです。'

export const metadata: Metadata = outputMetadata({
	title: pageTitle,
	description: pageDescription,
})

export default function Page() {
	return (
		<ArticleWrapper pageTitle={pageTitle}>
			<div className='mx-auto max-w-screen-sm'>
				<p className='text-center font-bold'>
					頼光寺では季節ごとの仏事、また、毎月の行事（早朝坐禅会、写経会、檀家様向け月例会）を開催しています。皆様の参加をお待ちしております。
				</p>

				<main>
					<div className='flex flex-col gap-12 px-8 pb-12 lg:px-2'>
						<NewsList className='mt-4 flex flex-col' />
					</div>
					<p className='text-center'>
						<Button asChild>
							<Link href='/'>
								トップページに戻る{' '}
								<FaArrowRightLong className='ml-2 opacity-50' />
							</Link>
						</Button>
					</p>
				</main>
			</div>
		</ArticleWrapper>
	)
}
