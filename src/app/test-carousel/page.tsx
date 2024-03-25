'use client'

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

const photos = [
  'https://source.unsplash.com/1600x900/?nature,water',
  'https://source.unsplash.com/1600x900/?nature,sky',
  'https://source.unsplash.com/1600x900/?nature,forest',
  'https://source.unsplash.com/1600x900/?nature,tree',
  'https://source.unsplash.com/1600x900/?nature,flower',
]

export default function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  )

  return (
    <div className={`container flex max-w-screen-xl flex-col gap-12`}>
      <Carousel
        plugins={[plugin.current]}
        className='mx-auto w-full max-w-screen-lg'
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent>
          {photos.map((photo, index) => (
            <CarouselItem key={index}>
              <div className='p-1'>
                <Card className='aspect-square flex items-center justify-center border p-6'>
                  <img src={photo} alt='' />
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
