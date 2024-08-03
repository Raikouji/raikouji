import Link from 'next/link'

import { MobileMenuProvider, useMobileMenu } from '@/context/MobileMenuContext'
import { cn } from '@/lib/cn'
import { Menu, X } from 'lucide-react'

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
	return (
		<MobileMenuProvider>
			<MainMenuMobileContent items={items} segment={segment} />
		</MobileMenuProvider>
	)
}

function MainMenuMobileContent({
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
	const [isOpen, setIsOpen] = useMobileMenu()
	// const [activeMenu, setActiveMenu] = React.useState('')
	return (
		<>
			<div className='z-30 grid place-content-center'>
				<button
					type='button'
					onClick={() => {
						setIsOpen(!isOpen)
					}}
					className='px-2 py-1 text-foreground/60'
				>
					{isOpen ? <X /> : <Menu />}
				</button>
			</div>

			{isOpen && (
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
									<a
										href={item.href}
										className={cn(
											segment === item.href && 'font-bold',
											'text-foreground/70 tracking-widest hover:text-foreground',
											'hover:border-b hover:border-b-primary-400',
											'transition-all lg:ease-out',
										)}
										onClick={() => setIsOpen(false)} // TODO: template.tsx で
									>
										{item.title}
									</a>
									{item.subMenu && (
										<ul className='mb-2'>
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
														<a
															href={subItem.href}
															className={cn(
																'block px-3 py-2 text-foreground/80',
																'transition-all ease-out',
															)}
															onClick={() => setIsOpen(false)} // TODO: template.tsx で
														>
															{subItem.title}
														</a>
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
