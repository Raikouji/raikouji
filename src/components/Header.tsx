// TODO: サイトタイトルをコンポーネントにする (Logo.tsx 途中まで作成)
import MainNavigation from '@/components/MainNavigation'
import MainMenu from '@/components/main-menu'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
	return (
		<>
			<header className='container flex max-w-screen-xl justify-between py-4 lg:items-center'>
				<div className='shrink-0'>
					{/*<p className='text-xs'>タグライン</p>*/}
					<Link href='/' className='lg:hover:opacity-80'>
						<div className='flex items-center gap-2'>
							<Image
								src='/images/ajisai-site-title.png'
								alt='あじさい寺'
								width={77}
								height={52}
								sizes='(max-width: 640px) 77px, 52px'
								style={{
									width: '77px',
									height: 'auto',
								}}
								priority
							/>
							<h1 className='-ml-10 flex items-center gap-1 font-serif'>
								<span className='tracking-widest'>曹洞宗 祥雲山</span>
								<span className='text-3xl tracking-[.2em]'>頼光寺</span>
							</h1>
						</div>
					</Link>
				</div>
				<MainMenu />
				<MainNavigation />
			</header>
		</>
	)
}

export default Header
