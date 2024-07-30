import { cn } from '@/utils'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function MainMenuMobile({
	items,
	segment,
}: {
	items: {
		title: string
		href: string
		subMenu?: { title: string; href: string }[]
	}[]
	segment: string | null
}) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
	// const [activeMenu, setActiveMenu] = React.useState('')
	return (
		<>
			<div className='z-30 grid place-content-center'>
				<button
					type='button'
					onClick={() => {
						setIsMobileMenuOpen(!isMobileMenuOpen)
					}}
					className='px-2 py-1 text-3xl leading-none text-foreground/60'
				>
					{isMobileMenuOpen ? <X /> : <Menu />}
				</button>
			</div>

			{isMobileMenuOpen && (
				<nav
					className={cn(
						'animate-fade-in',
						'absolute inset-0 z-20 h-dvh bg-[#fbf8ed] bg-washi',
						'grid place-content-center p-8',
					)}
				>
					<ul
						className={cn(
							'flex flex-col',
							'[&>li:not(:last-child)]:border-b' +
								' [&>li:not(:last-child)]:border-b-primary-300',
						)}
					>
						{items.map((item) => {
							const isActive = item.href === segment

							return (
								<li
									key={crypto.randomUUID()}
									className={cn(
										isActive ? 'text-primary-700' : undefined,
										'font-bold w-full text-center [&>a]:block [&>a]:p-4 [&>a]:active:bg-primary-100',
									)}
									// TODO:
									// onClick={() => setActiveMenu(item.href)}
									// onKeyUp={() => setActiveMenu(item.href)}
									// onMouseOver={() => setActiveMenu(item.href)}
									// onMouseOut={() => setActiveMenu('')}
									// onFocus={() => setActiveMenu(item.href)}
									// onBlur={() => setActiveMenu('')}
								>
									<Link
										href={item.href}
										className={cn(
											segment === item.href && 'font-bold',
											'text-foreground/70 tracking-widest hover:text-foreground',
											'hover:border-b hover:border-b-primary-400',
											'transition-all lg:ease-out',
										)}
										onClick={() => setIsMobileMenuOpen(false)}
									>
										{item.title}
									</Link>
									{item.subMenu && (
										<ul className='mb-2'>
											{/*<ul*/}
											{/*	className={cn(*/}
											{/*		'mb-2',*/}
											{/*		activeMenu !== item.href && 'block', // hidden TODO: 開閉メニューに*/}
											{/*	)}*/}
											{/*>*/}
											{item.subMenu.map((subItem) => {
												const isActive = subItem.href === segment

												return (
													<li
														key={crypto.randomUUID()}
														className={
															isActive
																? 'bg-primary-50 font-bold'
																: 'font-normal'
														}
													>
														<Link
															href={subItem.href}
															className={cn(
																'block px-3 py-2 text-foreground/80',
																'transition-all ease-out',
															)}
															onClick={() => setIsMobileMenuOpen(false)}
														>
															{subItem.title}
														</Link>
													</li>
												)
											})}
										</ul>
									)}
								</li>
							)
						})}
					</ul>
				</nav>
			)}
		</>
	)
}
