'use client'

import { useMediaQuery } from '@/hooks/use-media-query'

export default function MainMenu() {
	const isDesktop = useMediaQuery('(min-width: 768px)')
	return isDesktop ? <div>desktop</div> : <div>mobile</div>
}
