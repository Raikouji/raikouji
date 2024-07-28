'use client'

// embla-carousel: @ref https://github.com/shadcn-ui/ui/issues/2281
// type CarouselApi = UseEmblaCarouselType[1];
// type CarouselPlugin = UseCarouselParameters[1];

import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]

type ImageType = {
	src: string
	alt?: string
}

type Images = ImageType[]

export default function Slider({ images }: { images: Images }) {
	const emblaOptions: CarouselOptions = { loop: true }
	const autoplayOptions = {
		delay: 9000,
		stopOnMouseEnter: true,
	}

	const [emblaRef] = useEmblaCarousel(emblaOptions, [
		Autoplay(autoplayOptions),
		Fade(),
	])

	return (
		<div
			className='embla aspect-h-4 aspect-w-3 overflow-hidden md:aspect-h-9 md:aspect-w-16'
			ref={emblaRef}
		>
			<div className='embla__container flex'>
				{images.map(({ src, alt = '' }, index) => (
					<div
						className='embla__slide min-w-0 flex-[0_0_100%]'
						key={crypto.randomUUID()}
					>
						<Image
							src={src}
							alt={alt}
							width={2100}
							height={1400}
							style={{ objectFit: 'cover' }}
							priority={index === 0} // 1枚目だけ優先読み込み
						/>
					</div>
				))}
			</div>
		</div>
	)
}
