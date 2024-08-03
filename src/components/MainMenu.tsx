'use client'

import { useSelectedLayoutSegment } from 'next/navigation'

import MainMenuDesktop from '@/components/MainMenuDesktop'
import MainMenuMobile from '@/components/MainMenuMobile'
import { useMediaQuery } from '@/hooks/use-media-query'

import { BREAKPOINTS, NAVIGATION_ITEMS } from '@/constants'

export default function MainMenu() {
	const isDesktop = useMediaQuery(`(min-width: ${BREAKPOINTS.TABLET}px)`)
	const segment = useSelectedLayoutSegment()
	const items = NAVIGATION_ITEMS

	return isDesktop ? (
		<MainMenuDesktop items={items} segment={segment} />
	) : (
		<MainMenuMobile items={items} segment={segment} />
	)
}
