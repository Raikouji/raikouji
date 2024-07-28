import { cn } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaSquareInstagram } from 'react-icons/fa6'

export default function Footer() {
	return (
		<footer>
			<div
				className={cn(
					'bg-gray-100 px-8 py-16 text-foreground/80 lg:px-0 ',
					'bg-cover bg-top bg-no-repeat',
					'bg-[url("/images/bg-lotus.png")]',
				)}
			>
				<div className='container flex max-w-screen-xl flex-col-reverse justify-between gap-12 md:flex-row md:items-center'>
					<div className='max-w-xl text-center md:text-left'>
						<address className='flex flex-col gap-2 text-center not-italic'>
							{/*<Logo tagline='タグラインです' taglinePosition='top'>*/}
							{/*  {SITE_TITLE}*/}
							{/*</Logo>*/}
							<div className='shrink-0'>
								{/*<p className='text-xs'>タグライン</p>*/}
								<Link href='/' className='lg:hover:opacity-80'>
									<div className='flex items-center gap-2'>
										<Image
											src='/images/ajisai-site-title.png'
											alt='あじさい寺'
											width={62}
											height={42}
										/>
										<h1 className='flex items-center gap-3 font-serif'>
											<span className='text-sm tracking-widest'>
												曹洞宗 祥雲山
											</span>
											<span className='text-2xl tracking-[.25em]'>頼光寺</span>
										</h1>
									</div>
								</Link>
							</div>
							<div className='text-sm'>
								<p>〒666-0117 兵庫県川西市東畦野 2-17-2</p>
								<p>
									電話: <b className='text-lg'>072-794-1165</b>
								</p>
							</div>
							<ul className='flex justify-center gap-2'>
								<li>
									<a
										href='https://www.instagram.com/hounyoni/'
										target='_blank'
										className='text-3xl text-primary-300 hover:text-primary-400'
										rel='noreferrer'
									>
										<FaSquareInstagram />
									</a>
								</li>
								<li>
									<a
										href='https://www.facebook.com/profile.php?id=100083238883762'
										target='_blank'
										className='text-3xl text-primary-300 hover:text-primary-400'
										rel='noreferrer'
									>
										<FaFacebook />
									</a>
								</li>
							</ul>
							<p>
								<a
									href='https://sotozen-net.or.jp/'
									target='_blank'
									rel='noreferrer'
								>
									<Image
										className='mx-auto hover:opacity-80'
										src='/images/banner-sotozennet.png'
										alt='曹洞宗 Sotozen-net'
										width={180}
										height={48}
										style={{
											width: '100%',
											height: 'auto',
										}}
										priority
									/>
								</a>
							</p>
						</address>
					</div>
					<nav className='flex flex-col gap-8 lg:flex-row lg:gap-12'>
						<ul
							className={cn(
								'flex flex-col lg:block lg:columns-3 lg:gap-12',
								'text-sm leading-tight',
								'list-disc marker:text-primary-200',
								'[&>li>a]:block [&>li>a]:py-3 lg:[&>li>a]:py-2',
								'divide-y divide-dashed divide-primary-200 lg:divide-none',
							)}
						>
							<li>
								<Link href='/' className='lg:hover:text-primary-400'>
									ホーム
								</Link>
							</li>
							<li>
								<Link href='/about' className='lg:hover:text-primary-400'>
									賴光寺の紹介
								</Link>
							</li>
							<li>
								<Link href='/events' className='lg:hover:text-primary-400'>
									行事案内
								</Link>
							</li>
							<li>
								<Link href='/cemetery' className='lg:hover:text-primary-400'>
									お墓(水子供養・永代供養)
								</Link>
							</li>
							<li>
								<Link href='/gallery' className='lg:hover:text-primary-400'>
									ギャラリー
								</Link>
							</li>
							<li>
								<Link href='/access' className='lg:hover:text-primary-400'>
									アクセス
								</Link>
							</li>
							<li>
								<Link href='/links' className='lg:hover:text-primary-400'>
									リンク
								</Link>
							</li>
							<li>
								<Link href='/contact' className='lg:hover:text-primary-400'>
									お問合せ
								</Link>
							</li>
							<li>
								<Link
									href='/privacy-policy'
									className='lg:hover:text-primary-400'
								>
									プライバシーポリシー
								</Link>
							</li>
							<li>
								<Link href='/sitemap' className='lg:hover:text-primary-400'>
									サイトマップ
								</Link>
							</li>
						</ul>
					</nav>
				</div>

				<p className='mt-16 text-center text-xs'>
					Copyright © {new Date().getFullYear()} Raikouji Temple
				</p>
			</div>
		</footer>
	)
}
