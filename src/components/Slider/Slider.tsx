'use client'

import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import Image from 'next/image'

type Image = {
  src: string
  alt?: string
}

type Images = Image[]

function Slider({ images }: { images: Images }) {
  const emblaOptions: EmblaOptionsType = { loop: true }
  const autoplayOptions = {
    delay: 8000,
    stopOnMouseEnter: true,
  }

  const [emblaRef] = useEmblaCarousel(emblaOptions, [Autoplay(autoplayOptions)])

  return (
    <div
      className='embla aspect-h-3 aspect-w-2 overflow-hidden md:aspect-h-9 md:aspect-w-16'
      ref={emblaRef}
    >
      <div className='embla__container flex'>
        {images.map(({ src, alt = '' }, index) => (
          <div className='embla__slide min-w-0 flex-[0_0_100%]' key={index}>
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

export default Slider
