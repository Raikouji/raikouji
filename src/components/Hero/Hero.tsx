import { cn } from '@/utils'
import Image from 'next/image'
import styles from './Hero.module.css'

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
          <div className='aspect-h-3 aspect-w-2 md:aspect-h-9 md:aspect-w-16'>
            <Image
              src='/images/main-temple.jpg'
              alt='Lorem'
              width={2100}
              height={1400}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
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
                <p className='text-5xl'>■</p>
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

export default Hero
