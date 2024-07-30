'use client'

import type React from 'react'

import { touchDeviceLinkFixer } from '@/lib/touch-device-link-fixer'
import { motion } from 'framer-motion'

const variants = {
	hidden: { opacity: 0 },
	enter: { opacity: 1 },
}

export default function Template({ children }: { children: React.ReactNode }) {
	touchDeviceLinkFixer()

	return (
		<motion.div
			className='site-wrapper'
			variants={variants}
			initial='hidden'
			animate='enter'
			transition={{
				type: 'linear',
				duration: 2,
			}}
		>
			{children}
		</motion.div>
	)
}
