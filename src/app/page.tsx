'use client'

import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'
import ImageAboveHeading from '@/components/ImageAboveHeading'
import { Button } from '@/components/ui/button'
import { cn } from '@/utils'
import { motion, useScroll } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import styles from './homepage.module.css'

const photos = [
  {
    src: '/images/lorem.jpg',
    width: 900,
    height: 600,
    alt: '代替テキスト1',
  },
  {
    src: '/images/dummy-01.jpg',
    width: 900,
    height: 600,
    alt: '代替テキスト2',
  },
  { src: '/images/dummy-02.jpg', width: 600, height: 900 },
  {
    src: '/images/dummy-03.jpg',
    width: 900,
    height: 600,
    alt: '代替テキスト4',
  },
  {
    src: '/images/dummy-02.jpg',
    width: 600,
    height: 900,
    alt: '代替テキスト5',
  },
  { src: '/images/lorem.jpg', width: 900, height: 600 },
  {
    src: '/images/dummy-01.jpg',
    width: 900,
    height: 600,
    alt: '代替テキスト7',
  },
  {
    src: '/images/dummy-03.jpg',
    width: 900,
    height: 600,
    alt: '代替テキスト8',
  },
]

export default function Home() {
  const motionContainerRef = useRef(null)
  const { scrollYProgress } = useScroll()

  return (
    <div
      className={`${styles.wrapper} container flex max-w-screen-xl flex-col gap-12`}
    >
      <motion.div
        className='full-width sticky left-0 top-0 z-50 h-1 bg-primary'
        style={{
          scaleX: scrollYProgress,
        }}
      />
      <main>
        <div className='flex flex-col gap-12 pb-12'>
          <Hero />

          <div className='text-center'>
            <p className='font-bold'>
              祥雲山 頼光寺※ は、紀元1000年頃に源氏一族によって創立されました。
              <br />
              初夏には境内にたくさんのあじさいが咲き乱れ、
              <br />
              地域の人々に「あじさい寺」として親しまれています。
            </p>
            <p className='mt-1'>
              <small>※ 正式には「賴光寺」と書きます</small>
            </p>
          </div>

          <div
            className={cn(
              'relative mx-auto max-w-screen-md p-8',
              'bg-[url("/images/bg-paper.png")] bg-cover bg-top',
              'rounded-xl shadow-lg',
            )}
          >
            <h2
              className={cn(
                'absolute -left-6 top-3',
                'border-t-4 border-gray-800 bg-primary-dark px-2 py-3 shadow-lg',
                'text-lg tracking-widest text-white ',
              )}
              style={{ writingMode: 'vertical-rl' }}
            >
              お知らせ
            </h2>
            <div className='flex flex-col gap-8 lg:flex-row'>
              <div className='lg:order-1 lg:w-2/3'>
                <h3 className='text-xl'>
                  <a href='#' className='text-primary-dark underline'>
                    0月00日に「●●●●●●●●●●」を開催します
                  </a>
                </h3>
                <p className='mt-2'>
                  ここに開花情報等を載せます。ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た。
                </p>
                <div className='mt-4 border border-primary p-4'>
                  <h3 className='text-xl'>あじさいの開花状況 (2023-06-17)</h3>
                  <p className='mt-2'>
                    ここに開花情報等を載せます。ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た。
                  </p>
                </div>
              </div>
              <div className='lg:w-1/3'>
                <Image
                  src='/images/ajisai2.jpg'
                  width={900}
                  height={600}
                  alt='あじさい'
                />
              </div>
            </div>
          </div>

          <section className='pb-16'>
            <div
              className={cn(
                'full-width relative pr-4',
                'bg-[length:396.5px_178px] bg-right-top bg-no-repeat',
                'bg-[url("/images/illust-2-color-ajisai.png")]',
                styles.wrapper,
              )}
            >
              <div className={cn('relative')}>
                <div className='w-3/4'>
                  <div className='aspect-h-3 aspect-w-2 md:aspect-h-9 md:aspect-w-16'>
                    <Image
                      src='/images/ajisai.jpg'
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
                        'grid place-content-center p-4 lg:p-8',
                        'ml-auto w-1/2',
                        'bg-white/90 text-center shadow-lg',
                      )}
                    >
                      <div className='flex flex-col gap-3'>
                        <p className='text-center'>
                          <ImageAboveHeading />
                        </p>
                        <h2>頼光寺について</h2>
                        <p>
                          祥雲山
                          頼光寺は紀元1000年頃に源氏の一族によって創立、真言律宗の寺院として始まりました。
                          その後数々の戦火により衰退したものの二度の再興を経て、1804年に尼寺となりました。
                          尼僧たちの坐禅道場として活用されたりしましたが、1875年には維持が困難となり、
                          法常寺に合併しました。その後、旧信徒たちの支援により建物や什物は引き継がれ、
                          現在では曹洞宗に属し、地域の人々に「あじさい寺」として親しまれています。
                        </p>
                        <p>
                          <Button asChild>
                            <Link href='about'>住職ご挨拶・頼光寺の沿革</Link>
                          </Button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='py-4'>
            <div className='flex flex-wrap justify-center gap-6'>
              <figure className='relative w-48 shadow-[3px_5px_4px_0_rgba(0,0,0,0.2)]'>
                <a href='#' className='hover:opacity-90'>
                  <div className='aspect-h-3 aspect-w-2'>
                    <Image
                      className={'h-full w-full object-cover object-center'}
                      src='/images/light-up.jpg'
                      alt='Lorem'
                      width={2100}
                      height={1400}
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      priority
                    />
                  </div>
                  <figcaption
                    className='absolute -top-2 left-1 border-t-4 border-primary bg-white px-2 py-3 tracking-widest shadow-lg'
                    style={{ writingMode: 'vertical-rl' }}
                  >
                    年間行事
                  </figcaption>
                </a>
              </figure>
              <figure className='relative w-48 shadow-[3px_5px_4px_0_rgba(0,0,0,0.2)]'>
                <a href='#' className='hover:opacity-90'>
                  <div className='aspect-h-3 aspect-w-2'>
                    <Image
                      className={'h-full w-full object-cover object-center'}
                      src='/images/zazen.jpg'
                      alt='Lorem'
                      width={2100}
                      height={1400}
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      priority
                    />
                  </div>
                  <figcaption
                    className='absolute -top-2 left-1 border-t-4 border-primary bg-white px-2 py-3 tracking-widest shadow-lg'
                    style={{ writingMode: 'vertical-rl' }}
                  >
                    座禅会・写経会
                  </figcaption>
                </a>
              </figure>
              <figure className='relative w-48 shadow-[3px_5px_4px_0_rgba(0,0,0,0.2)]'>
                <a href='#' className='hover:opacity-90'>
                  <div className='aspect-h-3 aspect-w-2'>
                    <Image
                      className={'h-full w-full object-cover object-center'}
                      src='/images/ajisai.jpg'
                      alt='Lorem'
                      width={2100}
                      height={1400}
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      priority
                    />
                  </div>
                  <figcaption
                    className='absolute -top-2 left-1 border-t-4 border-primary bg-white px-2 py-3 tracking-widest shadow-lg'
                    style={{ writingMode: 'vertical-rl' }}
                  >
                    墓地のご案内
                  </figcaption>
                </a>
              </figure>
              <figure className='relative w-48 shadow-[3px_5px_4px_0_rgba(0,0,0,0.2)]'>
                <a href='#' className='hover:opacity-90'>
                  <div className='aspect-h-3 aspect-w-2'>
                    <Image
                      className={'h-full w-full object-cover object-center'}
                      src='/images/ajisai.jpg'
                      alt='Lorem'
                      width={2100}
                      height={1400}
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      priority
                    />
                  </div>
                  <figcaption
                    className='absolute -top-2 left-1 border-t-4 border-primary bg-white px-2 py-3 tracking-widest shadow-lg'
                    style={{ writingMode: 'vertical-rl' }}
                  >
                    御朱印
                  </figcaption>
                </a>
              </figure>
              <figure className='relative w-48 shadow-[3px_5px_4px_0_rgba(0,0,0,0.2)]'>
                <a href='#' className='hover:opacity-90'>
                  <div className='aspect-h-3 aspect-w-2'>
                    <Image
                      className={'h-full w-full object-cover object-center'}
                      src='/images/bridal.jpg'
                      alt='Lorem'
                      width={2100}
                      height={1400}
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      priority
                    />
                  </div>
                  <figcaption
                    className='absolute -top-2 left-1 border-t-4 border-primary bg-white px-2 py-3 tracking-widest shadow-lg'
                    style={{ writingMode: 'vertical-rl' }}
                  >
                    仏前結婚式
                  </figcaption>
                </a>
              </figure>
            </div>
          </section>

          <div
            className={cn(
              'full-width bg-gray-800 px-8 py-12 text-white',
              'bg-contain bg-bottom bg-no-repeat',
              'bg-[url("/images/bg-lotus-pale.png")]',
            )}
          >
            <section className='mx-auto flex max-w-screen-xl flex-col gap-12 lg:flex-row lg:items-center'>
              <div className='flex flex-col gap-12 text-center lg:w-72'>
                <h2
                  className='mx-auto border-t-4 border-primary pt-3 tracking-[0.35em]'
                  style={{ writingMode: 'vertical-rl' }}
                >
                  頼光寺の風景
                </h2>
                <p>
                  境内にはゆかりある墓地が点在し、300株以上のあじさいをはじめ様々な植物が植っています。初夏のあじさいの季節が見どころで、毎年多くの方にご参拝いただいております。
                </p>
              </div>
              <div className='flex-grow'>
                <Gallery photos={photos} />
                <p className='mt-8 text-center'>
                  <Button asChild>
                    <Link href='gallery'>ギャラリーを見る</Link>
                  </Button>
                </p>
              </div>
            </section>
          </div>

          <section className='py-12'>
            <div className='mx-auto max-w-screen-md'>
              <p className='text-center'>
                <ImageAboveHeading />
              </p>
              <h2 className='mt-3 text-center'>アクセス</h2>
              <p className='mt-3'>
                能勢電鉄「畦野駅」から徒歩５分。お車なら国道173号線
                「東畦野」交差点から５分以内の場所にあります。
                駐車場も完備。大阪や神戸からでもアクセスしやすい立地です。
              </p>

              <p className='mt-4 text-center'>
                <Button asChild>
                  <Link href='access'>アクセス</Link>
                </Button>
              </p>
            </div>
            <div className='relative mt-12 h-0 overflow-hidden pb-[61.804697%]'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6545.583216547808!2d135.41242965476988!3d34.88657891179472!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000f7d363fc0129%3A0x931d2d3f56786ea7!2z6LO05YWJ5a-6!5e0!3m2!1sja!2sjp!4v1700881280115!5m2!1sja!2sjp'
                allowFullScreen={false}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                className='absolute left-0 top-0 h-full w-full border-none'
              ></iframe>
            </div>
          </section>
        </div>
      </main>
      <div ref={motionContainerRef}>
        <p>
          Framer Motion スクロールで表示テスト：この親要素に ref
          を設定しており、これが画面内に入った時にアニメーションが発火
        </p>
        <motion.div
          className='translate-y-24 text-4xl font-bold text-tertiary'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{
            root: motionContainerRef,
            // once: true,
          }}
          animate={{ y: 0 }}
          transition={{ duration: 2 }}
          // margin={'0px -20px 0px 100px'}
          // amount={100} // 交差量
        >
          祥雲山。
          頼光寺は紀元1000年頃に源氏の一族によって創立、真言律宗の寺院として始まりました
          その後数々の戦火により衰退したものの二度の再興を経て、1804年に尼寺となりました。
          尼僧たちの坐禅道場として活用されたりしましたが、1875年には維持が困難となり、法常寺に合併しました。
          その後、旧信徒たちの支援により建物や什物は引き継がれ、現在では曹洞宗に属し、
          地域の人々に「あじさい寺」として親しまれています
        </motion.div>
      </div>
    </div>
  )
}
