import { cn } from '@/utils'
import type React from 'react'

function TocLink({
	className,
	children,
	...delegated
}: {
	className?: string
	children: React.ReactNode
}) {
	return (
		<ul
			className={cn(
				'mt-8 flex flex-wrap justify-center text-sm leading-7',
				'[&>li>a]:text-foreground/70',
				'[&>li:after]:text-foreground/30',
				'[&>li:not(:last-child):after]:mx-3 [&>li:not(:last-child):after]:content-["|"] ',
				className,
			)}
			{...delegated}
		>
			{children}
		</ul>
	)
}

export function TocLinkItem({
	id,
	className,
	children,
	...delegated
}: {
	id: string
	className?: string
	children: string
}) {
	return (
		<li key={id} className={className} {...delegated}>
			<a className='hover:text-primary-400' href={`#${id}`}>
				{children}
			</a>
		</li>
	)
}

export default TocLink
