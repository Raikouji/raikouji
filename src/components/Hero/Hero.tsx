import Image from 'next/image'
import styles from './Hero.module.css'

function Hero() {
  return (
    <div className={styles.wrapper}>
      <div className='aspect-h-3 aspect-w-2 md:aspect-h-9 md:aspect-w-16'>
        <Image
          src='/lorem.jpg'
          alt='Lorem'
          width={2100}
          height={1400}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
    </div>
  )
}

export default Hero
