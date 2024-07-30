'use client'

import { touchDeviceLinkFixer } from '@/lib/touch-device-link-fixer'
import { motion } from 'framer-motion'
import { ArrowUpToLine } from 'lucide-react'
import { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import VisuallyHidden from '../components/VisuallyHidden'

import type React from 'react'

const variants = {
	hidden: { opacity: 0 },
	enter: { opacity: 1 },
}

export default function Template({ children }: { children: React.ReactNode }) {
	const [isVisible, setIsVisible] = useState(false)

	const scrollToTop = () => {
		scroll.scrollToTop()
	}

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) {
				setIsVisible(true)
			} else {
				setIsVisible(false)
			}
		}

		window.addEventListener('scroll', toggleVisibility)

		return () => {
			window.removeEventListener('scroll', toggleVisibility)
		}
	}, [])

	// スマホ実機でダブルタップしないとリンク先に飛ばない問題を解決
	// touchDeviceLinkFixer()

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
			<button
				type='button'
				className={`fixed bottom-4 right-0 z-50 cursor-pointer bg-primary-400/75 p-3 text-white transition-opacity hover:bg-primary-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
				onClick={scrollToTop}
			>
				<ArrowUpToLine />
				<VisuallyHidden>ページトップへ移動</VisuallyHidden>
			</button>
		</motion.div>
	)
}
