import Image from 'next/image'

import Breadcrumbs from '@/components/Breadcrumbs'
import ImageAboveHeading from '@/components/ImageAboveHeading'
import { Button } from '@/components/ui/button'
import { SITE_TITLE, SITE_URL } from '@/constants'
import type { Metadata } from 'next'

// for metadata
const pageTitle = 'アクセス'
const pageDescription = '頼光寺へのアクセスです。駐車場情報も。'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: SITE_URL,
    siteName: SITE_TITLE,
    images: [
      {
        url: `${SITE_URL}/og.png`,
        width: 800,
        height: 600,
      },
      {
        url: `${SITE_URL}/og-alt.png`,
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
}

export default function Page() {
  return (
    <div className='container max-w-screen-xl'>
      <main>
        <div className='full-width relative'>
          <div className='aspect-h-3 aspect-w-2 relative md:aspect-h-2 md:aspect-w-16'>
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
          <div className='absolute left-auto top-1/2 mx-auto block w-screen max-w-screen-xl bg-amber-200'>
            <h1 className='bg-secondary-dark text-secondary-light'>アクセス</h1>
          </div>
        </div>

        <div className='my-12 flex flex-col gap-12'>
          <Breadcrumbs />

          <section>
            <div className='mx-auto flex max-w-screen-md flex-col gap-10'>
              <h2 className='text-center'>電車でのアクセス</h2>
              <p className='text-center'>能勢電鉄「畦野駅」より徒歩5分です。</p>
              <h3 className='text-center'>畦野駅からの道順</h3>
              <ol className='flex flex-col gap-6'>
                <li className='text-center after:text-2xl after:text-primary-400 after:content-["▼"]'>
                  <div className='flex gap-3 md:gap-4 lg:gap-8'>
                    <p className='order-1 w-1/2 text-left md:w-2/3'>
                      1.
                      ★★ダミーコピーです。改札を出たら、右側にある階段を降ります。ダミーコピーです手はおっかさの。
                    </p>
                    <img
                      className='w-1/2 md:w-1/3'
                      src='https://picsum.photos/id/2/384/256.webp'
                      alt=''
                    />
                  </div>
                </li>
                <li className='text-center after:text-2xl after:text-primary-400 after:content-["▼"]'>
                  <div className='flex gap-3 md:gap-4 lg:gap-8'>
                    <p className='order-1 w-1/2 text-left md:w-2/3'>
                      1.
                      ★★ダミーコピーです。改札を出たら、右側にある階段を降ります。ダミーコピーです手はおっかさの。
                    </p>
                    <img
                      className='w-1/2 md:w-1/3'
                      src='https://picsum.photos/id/2/384/256.webp'
                      alt=''
                    />
                  </div>
                </li>
                <li className='text-center after:text-2xl after:text-primary-400 after:content-["▼"]'>
                  <div className='flex gap-3 md:gap-4 lg:gap-8'>
                    <p className='order-1 w-1/2 text-left md:w-2/3'>
                      1.
                      ★★ダミーコピーです。改札を出たら、右側にある階段を降ります。ダミーコピーです手はおっかさの。
                    </p>
                    <img
                      className='w-1/2 md:w-1/3'
                      src='https://picsum.photos/id/2/384/256.webp'
                      alt=''
                    />
                  </div>
                </li>
                <li className='text-center after:text-2xl after:text-primary-400 after:content-["▼"]'>
                  <div className='flex gap-3 md:gap-4 lg:gap-8'>
                    <p className='order-1 w-1/2 text-left md:w-2/3'>
                      1.
                      ★★ダミーコピーです。改札を出たら、右側にある階段を降ります。ダミーコピーです手はおっかさの。
                    </p>
                    <img
                      className='w-1/2 md:w-1/3'
                      src='https://picsum.photos/id/2/384/256.webp'
                      alt=''
                    />
                  </div>
                </li>
              </ol>
            </div>
          </section>

          <hr className='line-with-three-dots' />

          <section>
            <div className='mx-auto max-w-screen-md'>
              <h2 className='text-center'>車でのアクセス</h2>
              <p className='mt-4'>
                国道173号線
                「東畦野」交差点を東に折れ(池田方面から来られる方は右折)、５分以内の場所にあります。表駐車場をご利用の方は東に折れてすぐの高架に乗らず側道へ進んでください。
              </p>
              <div className='bg-tertiary-100 mt-6 rounded-xl p-6 shadow-lg lg:p-8'>
                <p className='text-center'>
                  <ImageAboveHeading imageName='frog' />
                </p>
                <h3 className='text-tertiary-dark mt-2 text-center'>
                  駐車場について
                </h3>
                <p className='mt-3 text-center'>
                  表の駐車場には★★台、裏の駐車場には★★台が駐車していただけます。
                </p>
                <div className='mt-3 flex flex-col items-center justify-center gap-4 text-center md:flex-row md:gap-8'>
                  <figure>
                    <img src='https://picsum.photos/id/2/384/256.webp' alt='' />
                    <figcaption className='mt-2'>下の駐車場</figcaption>
                  </figure>
                  <figure>
                    <img src='https://picsum.photos/id/3/384/256.webp' alt='' />
                    <figcaption className='mt-2'>上の駐車場</figcaption>
                  </figure>
                </div>
                <div className='mt-6'>
                  <h4>カーナビで来られる方へ</h4>
                  <p className='mt-3'>
                    カーナビで頼光寺やその住所を目的地に設定すると、若干遠回りで道順もわかりづらい裏駐車場に案内されてしまうことがあります。下記の地図などで、近場の道順をご確認されておくことをおすすめします。
                  </p>
                  <p className='mt-3'>
                    Google
                    マップの場合は「賴光寺参拝者駐車場」を目的地にセットしていただくと、表の駐車場に案内されます。
                  </p>
                </div>
                <div className='mt-6'>
                  <h4>
                    足の不自由な方がおられる場合は、裏の駐車場をご利用ください
                  </h4>
                  <p className='mt-3'>
                    表の駐車場に停められた場合、境内に入るまでに急斜面の階段がございます。なので、車椅子の方、足の不自由な方は、段差なく境内に入れる裏の駐車場をご利用ください。
                  </p>
                </div>
              </div>

              <h3 className='mt-8 text-center'>近場の詳細地図</h3>
              <p className='mt-4'>
                <img
                  src='https://picsum.photos/id/2/600/400.webp'
                  alt=''
                  className='mx-auto w-fit'
                />
              </p>
              <p className='mt-4 text-center'>
                <Button>近場の詳細地図 印刷用 (PDF)</Button>
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
