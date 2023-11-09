import Image from 'next/image'
import styles from './Hero.module.css'

function Hero() {
  return (
    <div className={`full-width ${styles.wrapper}`}>
      <div className='relative'>
        <div className='aspect-h-3 aspect-w-2 relative md:aspect-h-9 md:aspect-w-16'>
          <Image
            src='/images/lorem.jpg'
            alt='Lorem'
            width={2100}
            height={1400}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        <div className='absolute top-1/2 block w-1/2 bg-amber-200'>
          <p>あああああ</p>
        </div>
      </div>

      <div className='mx-auto flex max-w-screen-lg border border-red-400'>
        <div className='z-10 h-[400px] w-[400px] bg-amber-200 opacity-80'>
          名前
        </div>
        <div className='left-1/2 w-3/4 -translate-x-1/2'>
          <div className='aspect-h-3 aspect-w-2 relative md:aspect-h-9 md:aspect-w-16'>
            <Image
              src='/images/lorem.jpg'
              alt='Lorem'
              width={2100}
              height={1400}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
