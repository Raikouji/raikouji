'use client'

import { useState } from 'react'
import type React from 'react'

import ScrollToTopButton from '@/components/ScrollToTopButton'
import { touchDeviceLinkFixer } from '@/lib/touch-device-link-fixer'
import { motion } from 'framer-motion'

const variants = {
	hidden: { opacity: 0 },
	enter: { opacity: 1 },
}

export default function Template({ children }: { children: React.ReactNode }) {
	// スマホ実機でダブルタップしないとリンク先に飛ばない問題を解決
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
			<ScrollToTopButton />
		</motion.div>
	)
}
