import { cn } from '@/utils'
import Link from 'next/link'
import type React from 'react'
import styles from './Logo.module.css'

function Logo({
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
		<div
			className={cn('site-logo', styles.wrapper, flexClass, className)}
			{...delegated}
		>
			{tagline && taglinePosition === 'top' && <Tagline tagline={tagline} />}
			<h1 className='text-xl font-bold'>
				<Link href='/' className={styles.wrapper}>
					{children}
				</Link>
			</h1>
			{tagline && taglinePosition !== 'top' && <Tagline tagline={tagline} />}
		</div>
	)
}

function Tagline({ tagline }: { tagline: string }) {
	return <p className='text-xs'>{tagline}</p>
}

export default Logo
