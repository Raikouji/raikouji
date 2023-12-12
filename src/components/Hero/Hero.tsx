import { cn } from '@/utils'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import Image from 'next/image'
import styles from './Hero.module.css'

const carouselImages = [
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

function Hero() {
  return (
    <div
      className={cn(
        'full-width relative pl-4',
        'bg-[length:329px_269px] bg-left bg-no-repeat',
        'bg-[url("/images/illust-ajisai-blue.png")]',
        styles.wrapper,
      )}
    >
      <div className={cn('relative')}>
        <div className='ml-auto mr-0 w-3/4'>
          <Carousel />
        </div>
        <div className='absolute -bottom-8 w-full'>
          <div className='mx-auto max-w-screen-xl'>
            <div
              className={cn(
                'grid place-content-center',
                'bottom-0 left-0 h-96 w-96 bg-primary-700/90',
                'bottom-0 left-0 h-96 w-96',
                'bg-primary-700/80 text-center text-white',
              )}
            >
              <div className='flex flex-col gap-3'>
                <p className='text-5xl'>
                  <Image
                    src='/images/genji-emblem-white.png'
                    alt='源氏の家紋 笹竜胆'
                    className='mx-auto'
                    width={84}
                    height={79}
                  />
                </p>
                <p className='font-serif text-3xl'>曹洞宗 | 祥雲山</p>
                <p className='ml-[0.5em] font-serif text-6xl font-bold tracking-[0.5em]'>
                  頼光寺
                </p>
                <p className='tracking-widest'>
                  <span className='text-primary-300'>Raikouji</span>{' '}
                  <span className='text-indigo-300'>Temple</span>
                </p>
                <p className='font-serif text-2xl'>〜 あじさい寺 〜</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Carousel() {
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
        {carouselImages.map(({ src, alt }, index) => (
          <div className='embla__slide min-w-0 flex-[0_0_100%]' key={index}>
            <Image
              src={src}
              alt={alt}
              width={2100}
              height={1400}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero
