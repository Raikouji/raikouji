'use client'

import { useMediaQuery } from '@/hooks/use-media-query'
import { useEffect } from 'react'

import { BREAKPOINTS } from '@/constants'

/**
 * スマホ実機でダブルタップしないとリンク先に飛ばない問題を解決
 */
export const touchDeviceLinkFixer = () => {
	const isDesktop = useMediaQuery(`(min-width: ${BREAKPOINTS.TABLET}px)`)

	useEffect(() => {
		// console.log(isDesktop)
		if (isDesktop) return

		document.addEventListener('touchstart', () => {}, { passive: true })
		// console.log('touchDeviceLinkFixerです')
	}, [isDesktop])
}
