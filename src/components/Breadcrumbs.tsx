'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/cn'
import { FaHome } from 'react-icons/fa'

const items = [
	{ path: '/', name: 'Home' },
	{ path: '/about', name: '頼光寺について' },
	{ path: '/events', name: '行事案内' },
	{ path: '/cemetery', name: '墓地の案内' },
	{ path: '/access', name: 'アクセス' },
	{ path: '/gallery', name: 'ギャラリー' },
	{ path: '/scarlet-seal', name: '御朱印、仏前結婚式' },
	{ path: '/multi-purpose-hall', name: '紫陽閣の貸し出し' },
	{ path: '/news', name: 'お知らせ' },
	{ path: '/links', name: 'リンク' },
	{ path: '/contact', name: 'お問合せ' },
	{ path: '/privacy-policy', name: 'プライバシーポリシー' },
	{ path: '/template', name: 'Template' },
]

export default function Breadcrumbs({
	className,
	...delegated
}: {
	className?: string
}) {
	const pathString = usePathname()
	const pathNames = pathString.split('/').filter((name) => name)

	return (
		<div className={className} {...delegated}>
			<ul
				className={cn(
					'flex text-gray-600 text-sm',
					'[&>li:not(:last-child)]:after:mx-2',
					'[&>li:not(:last-child)]:after:content-["/"]',
					'[&>li:not(:last-child)]:after:text-gray-300',
				)}
			>
				<li>
					<Link href='/' className='hover:text-primary'>
						<FaHome className='inline-block' />
					</Link>
				</li>
				{pathNames.map((name: string, index: number) => {
					const path = `/${pathNames.slice(0, index + 1).join('/')}`
					const item = items.find((item) => item.path === path)

					return (
						<li key={path}>
							<Link href={path} className='underline hover:text-primary'>
								{item ? item.name : name}
							</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
