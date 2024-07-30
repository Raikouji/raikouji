import Image from 'next/image'

import Slider from '@/components/Slider'
import { cn } from '@/lib/cn'

const sliderImages = [
	{
		src: '/images/main-temple.jpg',
		alt: '本堂',
	},
	{
		src: '/images/light-up.jpg',
		alt: 'ライトアップ',
	},
	{
		src: '/images/statue-priest.jpg',
		alt: '僧侶の像',
	},
]

export default function Hero() {
	return (
		<div
			className={cn(
				'full-width relative lg:pl-4',
				'bg-[length:295px_200px] lg:bg-[length:329px_269px] bg-right-bottom lg:bg-left bg-no-repeat',
				'bg-[url("/images/illust-ajisai-blue.png")]',
			)}
		>
			<div className={cn('relative')}>
				<div className='ml-auto mr-0 w-11/12 lg:w-3/4'>
					<Slider images={sliderImages} />
				</div>
				<div className='absolute bottom-8 w-full lg:-bottom-8'>
					<div className='mx-auto max-w-screen-xl'>
						<div
							className={cn(
								'grid place-content-center',
								'bottom-0 left-0',
								'h-60 w-60 lg:h-96 lg:w-96',
								'bg-primary-700/80 text-center text-white',
							)}
						>
							<div className='flex flex-col gap-1 lg:gap-3'>
								<p>
									<Image
										src='/images/genji-emblem-white.png'
										alt='源氏の家紋 笹竜胆'
										className='mx-auto'
										width={84}
										height={79}
									/>
								</p>
								<p className='font-serif text-lg lg:text-3xl'>
									曹洞宗 | 祥雲山
								</p>
								<p className='ml-[0.5em] font-serif text-4xl font-bold tracking-[0.4em] lg:text-6xl'>
									頼光寺
								</p>
								<p className='-mt-2 text-xs tracking-widest lg:text-base'>
									<span className='text-primary-300'>Raikouji</span>{' '}
									<span className='text-indigo-300'>Temple</span>
								</p>
								<p className='font-serif text-lg lg:text-2xl'>
									〜 あじさい寺 〜
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
