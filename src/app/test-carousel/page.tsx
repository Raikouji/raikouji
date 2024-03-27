'use client'

// TODO:
//  ドットボタン：https://codesandbox.io/p/sandbox/embla-carousel-generator-react-7cgfq9?file=%2Fsrc%2Fjs%2FEmblaCarouselDotButton.tsx%3A16%2C10

import Autoplay from 'embla-carousel-autoplay'
import * as React from 'react'

import Card from '@/components/ui/Card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import { type CarouselApi } from '@/components/ui/carousel'
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

  return (
    <div className={`container mx-auto max-w-screen-lg`}>
      <Carousel
        plugins={[plugin.current]}
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
          {/* div.overflow-hidden > div.flex.-ml-4 */}
          {photos.map(({ url, alt }, index) => (
            <CarouselItem key={index} className='pl-0'>
              {/* min-w-0 shrink-0 grow-0 basis-full, pl-4 */}
              <Card className='flex items-center justify-center'>
                <img src={url} alt={alt} />
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <p className='absolute bottom-2 w-full text-center'>
          {CarouselDotIndicator({ count, current })}
        </p>
        <CarouselPrevious className='left-2' />
        {/* absolute h-8 w-8 rounded-full, -left-12 top-1/2 -translate-y-1/2 */}
        <CarouselNext className='right-2' />
        {/* absolute h-8 w-8 rounded-full, -right-12 top-1/2 -translate-y-1/2 */}
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
