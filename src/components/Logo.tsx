// TODO: 未使用。完成後、Header のものと差し替える
import Link from 'next/link'
import type React from 'react'

import { cn } from '@/lib/cn'

export default function Logo({
	tagline,
	taglinePosition = 'bottom',
	className,
	children,
	...delegated
}: {
	tagline?: string
	taglinePosition?: 'top' | 'bottom' | 'right'
	className?: string
	children: React.ReactNode
}) {
	let flexClass: string | undefined

	if (tagline) {
		flexClass = 'flex flex-col'
		if (taglinePosition === 'right') {
			flexClass = 'flex flex-row gap-3'
		}
	}

	return (
		<div className={cn('site-logo', flexClass, className)} {...delegated}>
			{tagline && taglinePosition === 'top' && <Tagline tagline={tagline} />}
			<h1 className='text-xl font-bold'>
				<Link href='/'>{children}</Link>
			</h1>
			{tagline && taglinePosition !== 'top' && <Tagline tagline={tagline} />}
		</div>
	)
}

function Tagline({ tagline }: { tagline: string }) {
	return <p className='text-xs'>{tagline}</p>
}
