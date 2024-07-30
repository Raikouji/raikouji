'use client'

import type React from 'react'
import { useEffect } from 'react'

import { MobileMenuProvider, useMobileMenu } from '@/context/MobileMenuContext'
import { touchDeviceLinkFixer } from '@/lib/touch-device-link-fixer'
import { motion } from 'framer-motion'

const variants = {
	hidden: { opacity: 0 },
	enter: { opacity: 1 },
}

export default function Template({ children }: { children: React.ReactNode }) {
	touchDeviceLinkFixer()

	return (
		<MobileMenuProvider>
			<InnerTemplate>{children}</InnerTemplate>
		</MobileMenuProvider>
	)
}

function InnerTemplate({ children }: { children: React.ReactNode }) {
	const [, setIsOpen] = useMobileMenu()

	useEffect(() => {
		setIsOpen(false)
	}, [setIsOpen])

	return (
		<motion.div
			className='site-wrapper'
			variants={variants}
			initial='hidden'
			animate='enter'
			transition={{
				duration: 2,
			}}
		>
			{children}
		</motion.div>
	)
}
