'use client'

// TODO:
// - 画像サイズを指定して表示、object-fit 設定
// - Fade を embla-carousel 本体のものに変更
// - ドットボタンをクリックで当該スライドに移動
// https://codesandbox.io/p/sandbox/embla-carousel-generator-react-7cgfq9?file=%2Fsrc%2Fjs%2FEmblaCarouselDotButton.tsx%3A16%2C10

import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import Image from 'next/image'
import * as React from 'react'

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'

import type { CarouselApi } from '@/components/ui/carousel'
import { range } from '@/utils'

const photos = [
	{ url: 'https://source.unsplash.com/1600x900/?nature,water', alt: 'aaaa' },
	{ url: 'https://source.unsplash.com/1600x900/?nature,sky', alt: 'bbbb' },
	{ url: 'https://source.unsplash.com/1600x900/?nature,forest', alt: 'cccc' },
	{ url: 'https://source.unsplash.com/1600x900/?nature,tree', alt: 'dddd' },
	{ url: 'https://source.unsplash.com/1600x900/?nature,flower', alt: 'eeee' },
]

export default function CarouselPlugin() {
	const [api, setApi] = React.useState<CarouselApi>()
	const [current, setCurrent] = React.useState(0)
	const [count, setCount] = React.useState(0)

	React.useEffect(() => {
		if (!api) {
			return
		}

		setCount(api.scrollSnapList().length)
		setCurrent(api.selectedScrollSnap() + 1)

		api.on('select', () => {
			setCurrent(api.selectedScrollSnap() + 1)
		})
	}, [api])

	const plugin = React.useRef(
		Autoplay({ delay: 4000, stopOnInteraction: true }),
	)

	const fade = React.useRef(Fade())

	return (
		<div className={'container mx-auto max-w-screen-lg'}>
			<Carousel
				plugins={[plugin.current, fade.current]}
				className='w-full overflow-hidden' // relative
				onMouseEnter={plugin.current.stop}
				onMouseLeave={plugin.current.reset}
				opts={{
					align: 'start',
					loop: true,
				}}
				setApi={setApi}
			>
				<CarouselContent className='&>ml-0'>
					{photos.map(({ url, alt }) => (
						<CarouselItem
							key={crypto.randomUUID()}
							className='pl-0'
							// style={{
							//   opacity: fade.current ? fade.current.opacity(index) : 1,
							// }}
						>
							<p className='flex items-center justify-center'>
								<Image
									src={url}
									alt={alt}
									width={180}
									height={48}
									style={{
										width: '100%',
										height: 'auto',
									}}
								/>
							</p>
						</CarouselItem>
					))}
				</CarouselContent>
				<div className='absolute bottom-2 w-full text-center'>
					{CarouselDotIndicator({ count, current })}
				</div>
				<CarouselPrevious className='left-2' />
				<CarouselNext className='right-2' />
			</Carousel>
		</div>
	)
}

function CarouselDotIndicator({
	count,
	current,
}: {
	count: number
	current: number
}) {
	return (
		<div className='flex justify-center gap-2'>
			{range(count).map((num) => (
				<span
					key={num}
					className={`${num === current - 1 ? 'bg-primary-500' : 'bg-primary-200'} inline-block h-2 w-2 rounded-full opacity-60`}
				/>
			))}
		</div>
	)
}
