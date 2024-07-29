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
	const [activeMenu, setActiveMenu] = React.useState('')
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
						'absolute inset-4 z-20 h-[95vh] ',
						'flex justify-center p-8',
						'bg-white opacity-95 shadow-lg',
						'transition-opacity duration-300 ease-out',
					)}
				>
					<ul
						className={cn(
							'flex flex-col bg-white',
							'[&>li:not(:last-child)]:border-b' +
								' [&>li:not(:last-child)]:border-b-gray-200',
						)}
					>
						{items.map((item) => {
							const isActive = item.href === segment

							return (
								<li
									key={crypto.randomUUID()}
									className={cn(
										isActive ? 'font-bold' : undefined,
										'w-full text-center [&>a]:block [&>a]:p-4 [&>a]:active:bg-primary-100',
									)}
									onClick={() => setActiveMenu(item.href)}
									onKeyUp={() => setActiveMenu(item.href)}
									// onMouseOver={() => setActiveMenu(item.href)}
									// onMouseOut={() => setActiveMenu('')}
									// onFocus={() => setActiveMenu(item.href)}
									onBlur={() => setActiveMenu('')}
								>
									<Link
										href={`/${item.href}`}
										className={cn(
											segment === item.href && 'font-bold',
											'text-foreground/80 hover:text-foreground',
											'hover:border-b hover:border-b-primary-400',
											'transition-all lg:ease-out',
										)}
										onClick={() => setIsMobileMenuOpen(false)}
									>
										{item.title}
									</Link>
									{item.subMenu && (
										<ul
											className={cn(
												'lg:absolute lg:left-0 lg:top-full lg:z-10',
												'lg:w-48 lg:rounded-lg lg:bg-primary-100 lg:p-2 lg:shadow-lg',
												'lg:transition-all lg:duration-300 lg:ease-out',
												activeMenu !== item.href && 'hidden',
											)}
										>
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
															href={`/${subItem.href}`}
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
