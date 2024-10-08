'use client'

import { useEffect, useState } from 'react'

import VisuallyHidden from '@/components/VisuallyHidden'
import { ArrowUpToLine } from 'lucide-react'
import { animateScroll as scroll } from 'react-scroll'

export default function ScrollToTopButton() {
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

	return (
		<button
			type='button'
			className={`fixed bottom-4 right-0 z-50 cursor-pointer bg-primary-400/75 p-3 text-white transition-opacity hover:bg-primary-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
			onClick={scrollToTop}
		>
			<ArrowUpToLine />
			<VisuallyHidden>ページトップへ移動</VisuallyHidden>
		</button>
	)
}
