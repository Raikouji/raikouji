import type { ReactNode } from 'react'

import Breadcrumbs from '@/components/Breadcrumbs'
import PageHeader from '@/components/PageHeader'
import { cn } from '@/lib/cn'

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
