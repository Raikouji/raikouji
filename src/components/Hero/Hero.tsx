import Slider from '@/components/Slider'
import { cn } from '@/utils'
import Image from 'next/image'
import styles from './Hero.module.css'

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
          <Slider images={sliderImages} />
        </div>
        <div className='absolute -bottom-8 w-full'>
          <div className='mx-auto max-w-screen-xl'>
            <div
              className={cn(
                'grid place-content-center',
                'bottom-0 left-0',
                'h-72 w-72 lg:h-96 lg:w-96',
                'bg-primary-700/80 text-center text-white',
              )}
            >
              <div className='flex flex-col gap-3'>
                <p>
                  <Image
                    src='/images/genji-emblem-white.png'
                    alt='源氏の家紋 笹竜胆'
                    className='mx-auto'
                    width={84}
                    height={79}
                  />
                </p>
                <p className='font-serif text-xl lg:text-3xl'>
                  曹洞宗 | 祥雲山
                </p>
                <p className='ml-[0.5em] font-serif text-5xl font-bold tracking-[0.5em] lg:text-6xl'>
                  頼光寺
                </p>
                <p className='-mt-2 text-sm tracking-widest lg:text-base'>
                  <span className='text-primary-300'>Raikouji</span>{' '}
                  <span className='text-indigo-300'>Temple</span>
                </p>
                <p className='font-serif text-xl lg:text-2xl'>
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

export default Hero
