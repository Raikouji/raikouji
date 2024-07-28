import PageHeader from '@/components/PageHeader'
import Breadcrumbs from '@/components/breadcrumbs'
import { cn } from '@/utils'
import type { ReactNode } from 'react'

function ArticleWrapper({
	pageTitle,
	headerImage,
	className,
	children,
	...delegated
}: {
	pageTitle: string
	headerImage?: string
	className?: string
	children: ReactNode
}) {
	return (
		<div className='container max-w-screen-xl px-8 lg:px-2' {...delegated}>
			<main>
				<PageHeader fullWidth image={headerImage}>
					{pageTitle}
				</PageHeader>
				<Breadcrumbs className='mt-2' />
				<div className={cn('my-12 flex flex-col gap-12', className)}>
					{children}
				</div>
			</main>
		</div>
	)
}

export default ArticleWrapper
