import { cn } from '@/lib/cn'
import type React from 'react'

import styles from './Card.module.css'

function Card({
	children,
	className,
	...delegated
}: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<div className={cn(styles.wrapper, className)} {...delegated}>
			{children}
		</div>
	)
}

export default Card
