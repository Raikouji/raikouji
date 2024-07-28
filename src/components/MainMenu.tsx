'use client'

import MainMenuDesktop from '@/components/MainMenuDesktop'
import MainMenuMobile from '@/components/MainMenuMobile'
import { useMediaQuery } from '@/hooks/use-media-query'
import { useSelectedLayoutSegment } from 'next/navigation'

export default function MainMenu() {
	const items = [
		{ href: '/', title: 'Home' },
		{
			href: 'about',
			title: '頼光寺について',
			subMenu: [
				{ href: '/about', title: 'ごあいさつ・沿革' },
				{ href: '/gallery', title: 'ギャラリー' },
				{ href: '/scarlet-seal', title: '御朱印、仏前結婚式' },
				{ href: '/multi-purpose-hall', title: '紫陽閣の貸し出し' },
			],
		},
		{ href: '/events', title: '行事案内' },
		{ href: '/cemetery', title: '墓地の案内' },
		{ href: '/access', title: 'アクセス' },
		{
			href: '/contact',
			title: 'お問合せ',
		},
	]
	const isDesktop = useMediaQuery('(min-width: 768px)')
	const segment = useSelectedLayoutSegment()

	return isDesktop ? (
		<MainMenuDesktop items={items} segment={segment} />
	) : (
		<MainMenuMobile items={items} segment={segment} />
	)
}
