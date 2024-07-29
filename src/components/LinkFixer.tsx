'use client'

/**
 * スマホ実機でダブルタップしないとリンク先に飛ばない問題を解決
 */

import { useEffect } from 'react'

export default function LinkFixer() {
	useEffect(() => {
		document.addEventListener('touchstart', () => {}, { passive: true })
	}, [])

	return null
}
