'use client'

import type { ElementType, ReactElement } from 'react'

import { cn } from '@/lib/cn'
import { motion } from 'framer-motion'

export default function FadeIn({
	tag = 'div',
	className,
	children,
	...delegated
}: {
	tag?: ElementType
	className?: string
	children: ReactElement
}) {
	const MotionTag = motion[tag as keyof typeof motion]

	return (
		<MotionTag
			className={cn('translate-y-24', className)}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{
				amount: 'all' /* root: motionContainerRef */,
				once: true,
			}}
			animate={{ y: 0 }}
			transition={{ duration: 2 }}
			// margin={'0px -20px 0px 100px'}
			// amount={100} // 交差量
			{...delegated}
		>
			{children}
		</MotionTag>
	)
}
