import PageHeader from '@/components/PageHeader'
import Breadcrumbs from '@/components/breadcrumbs'
import { cn, outputMetadata } from '@/utils'
import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './not-found.module.css'

// for metadata
const pageTitle = '404 Not found'
const pageDescription = '子ページのディスクリプションです'

export const metadata: Metadata = outputMetadata({
	title: pageTitle,
	description: pageDescription,
})

function NotFound() {
	return (
		<div className={cn(styles.wrapper, 'container max-w-screen-xl')}>
			<main>
				<PageHeader fullWidth>{pageTitle}</PageHeader>
				<Breadcrumbs className='mt-2' />

				<section className='my-16 flex flex-col gap-4 text-center'>
					<h1>404 Not Found</h1>
					<p>
						このページは存在しません。
						<br />
						URLをご確認の上、再度お試しください。
					</p>
					<p>
						<Link href='/' className='text-primary hover:underline'>
							» トップページへ
						</Link>
					</p>
				</section>
			</main>
		</div>
	)
}

export default NotFound
