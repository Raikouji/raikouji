import Breadcrumbs from '@/components/Breadcrumbs'
import ImageAboveHeading from '@/components/ImageAboveHeading'
import PageHeader from '@/components/PageHeader'
import { Button } from '@/components/ui/button'
import { cn, outputMetadata } from '@/utils'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

// for metadata
const pageTitle = 'アクセス'
const pageDescription = '頼光寺へのアクセスです。駐車場情報も。'

export const metadata: Metadata = outputMetadata({
  title: pageTitle,
  description: pageDescription,
})

export default function Page() {
  return (
    <div className='container max-w-screen-xl'>
      <main>
        <PageHeader fullWidth>{pageTitle}</PageHeader>
        <Breadcrumbs className='mt-2' />

        <div className='flex flex-col'>
          <section className='py-16'>
            <div className='mx-auto max-w-screen-lg'>
              <p className='text-center'>
                <ImageAboveHeading />
              </p>
              <h2 className='mt-4 text-center'>電車でのアクセス</h2>
              <p className='mt-6 text-center'>
                能勢電鉄「畦野駅」より徒歩5分です。
              </p>
              <h3 className='mt-8 text-center'>能勢電鉄「畦野駅」からの道順</h3>
              <div className='mt-8 flex flex-col lg:flex-row-reverse lg:gap-8'>
                <div className='w-2/5'>
                  <ol>
                    <li className='text-center after:text-2xl after:text-primary-400 after:content-["▼"]'>
                      <div className='flex gap-3 md:gap-4'>
                        <p className='order-1 w-1/2 text-left leading-snug tracking-normal md:w-3/5'>
                          1.
                          ★★ダミーコピーです。改札を出たら、右側にある階段を降ります。ダミーコピーです手はおっかさの。
                        </p>
                        <img
                          className='w-1/2 md:w-2/5'
                          src='https://picsum.photos/id/2/384/256.webp'
                          alt=''
                        />
                      </div>
                    </li>
                    <li className='text-center after:text-2xl after:text-primary-400 after:content-["▼"]'>
                      <div className='flex gap-3 md:gap-4'>
                        <p className='order-1 w-1/2 text-left leading-snug tracking-normal md:w-3/5'>
                          2.
                          ★★ダミーコピーです。改札を出たら、右側にある階段を降ります。ダミーコピーです手はおっかさの。
                        </p>
                        <img
                          className='w-1/2 md:w-2/5'
                          src='https://picsum.photos/id/2/384/256.webp'
                          alt=''
                        />
                      </div>
                    </li>
                    <li className='text-center after:text-2xl after:text-primary-400 after:content-["▼"]'>
                      <div className='flex gap-3 md:gap-4'>
                        <p className='order-1 w-1/2 text-left leading-snug tracking-normal md:w-3/5'>
                          3.
                          ★★ダミーコピーです。改札を出たら、右側にある階段を降ります。ダミーコピーです手はおっかさの。
                        </p>
                        <img
                          className='w-1/2 md:w-2/5'
                          src='https://picsum.photos/id/2/384/256.webp'
                          alt=''
                        />
                      </div>
                    </li>
                    <li className='text-center after:text-2xl after:text-primary-400'>
                      <div className='flex gap-3 md:gap-4'>
                        <p className='order-1 w-1/2 text-left leading-snug tracking-normal md:w-3/5'>
                          4.
                          ★★ダミーコピーです。改札を出たら、右側にある階段を降ります。ダミーコピーです手はおっかさの。
                        </p>
                        <img
                          className='w-1/2 md:w-2/5'
                          src='https://picsum.photos/id/2/384/256.webp'
                          alt=''
                        />
                      </div>
                    </li>
                  </ol>
                </div>

                <div className='w-3/5'>
                  <Image
                    src='/images/lotus.jpg'
                    alt=''
                    width={2000}
                    height={1333}
                  />
                  <p className='mt-6 text-center'>
                    <Button asChild>
                      <Link href='#'>地図を拡大する</Link>
                    </Button>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className='line-with-three-dots' />

          <section className='my-16'>
            <div className='mx-auto max-w-screen-lg'>
              <p className='text-center'>
                <ImageAboveHeading imageName='frog' />
              </p>
              <h2 className='mt-4 text-center'>車でのアクセス</h2>
              <p className='mx-auto mt-4 max-w-screen-md'>
                国道173号線
                「東畦野」交差点を東に折れ(池田方面から来られる方は右折)、５分以内の場所にあります。表駐車場をご利用の方は東に折れてすぐの高架に乗らず側道へ進んでください。
              </p>

              <h3 className='mt-8 text-center'>国道173号線からの道順</h3>
              <div className='mt-8 flex flex-col lg:flex-row-reverse lg:gap-8'>
                <div className='w-2/5'>
                  <ol>
                    <li className='text-center after:text-2xl after:text-primary-400 after:content-["▼"]'>
                      <div className='flex gap-3 md:gap-4'>
                        <p className='order-1 w-1/2 text-left leading-snug tracking-normal md:w-3/5'>
                          1.
                          ★★ダミーコピーです。改札を出たら、右側にある階段を降ります。ダミーコピーです手はおっかさの。
                        </p>
                        <img
                          className='w-1/2 md:w-2/5'
                          src='https://picsum.photos/id/2/384/256.webp'
                          alt=''
                        />
                      </div>
                    </li>
                    <li className='text-center after:text-2xl after:text-primary-400 after:content-["▼"]'>
                      <div className='flex gap-3 md:gap-4'>
                        <p className='order-1 w-1/2 text-left leading-snug tracking-normal md:w-3/5'>
                          2.
                          ★★ダミーコピーです。改札を出たら、右側にある階段を降ります。ダミーコピーです手はおっかさの。
                        </p>
                        <img
                          className='w-1/2 md:w-2/5'
                          src='https://picsum.photos/id/2/384/256.webp'
                          alt=''
                        />
                      </div>
                    </li>
                    <li className='text-center after:text-2xl after:text-primary-400 after:content-["▼"]'>
                      <div className='flex gap-3 md:gap-4'>
                        <p className='order-1 w-1/2 text-left leading-snug tracking-normal md:w-3/5'>
                          3.
                          ★★ダミーコピーです。改札を出たら、右側にある階段を降ります。ダミーコピーです手はおっかさの。
                        </p>
                        <img
                          className='w-1/2 md:w-2/5'
                          src='https://picsum.photos/id/2/384/256.webp'
                          alt=''
                        />
                      </div>
                    </li>
                    <li className='text-center after:text-2xl after:text-primary-400'>
                      <div className='flex gap-3 md:gap-4'>
                        <p className='order-1 w-1/2 text-left leading-snug tracking-normal md:w-3/5'>
                          4.
                          ★★ダミーコピーです。改札を出たら、右側にある階段を降ります。ダミーコピーです手はおっかさの。
                        </p>
                        <img
                          className='w-1/2 md:w-2/5'
                          src='https://picsum.photos/id/2/384/256.webp'
                          alt=''
                        />
                      </div>
                    </li>
                  </ol>
                </div>

                <div className='w-3/5'>
                  <Image
                    src='/images/lotus.jpg'
                    alt=''
                    width={2000}
                    height={1333}
                  />
                  <p className='mt-6 text-center'>
                    <Button asChild>
                      <Link href='#'>近場の詳細地図 印刷用 (PDF)</Link>
                    </Button>
                  </p>
                </div>
              </div>

              <div
                className={cn(
                  'relative mt-10 p-8 lg:p-12',
                  'bg-[url("/images/bg-paper.png")] bg-cover',
                  'rounded-xl shadow-lg',
                )}
              >
                <h3 className='mt-2 text-center text-secondary-dark'>
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
            </div>
          </section>

          <hr className='line-with-three-dots' />

          <section className='my-16'>
            <div className='mx-auto max-w-screen-lg'>
              <p className='text-center'>
                <ImageAboveHeading />
              </p>
              <h2 className='mt-4 text-center'>Google マップ</h2>
              <p className='mx-auto mt-4 max-w-screen-md'>
                Google マップのナビの案内に従うと「裏の駐車場」に案内されます。
                表の駐車場をご利用の方は、上記の地図をご参照ください。
              </p>
              <div className='relative mt-8 h-0 overflow-hidden pb-[61.804697%]'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6545.583216547808!2d135.41242965476988!3d34.88657891179472!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000f7d363fc0129%3A0x931d2d3f56786ea7!2z6LO05YWJ5a-6!5e0!3m2!1sja!2sjp!4v1700881280115!5m2!1sja!2sjp'
                  allowFullScreen={false}
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  className='absolute left-0 top-0 h-full w-full border-none'
                ></iframe>
              </div>
              <p className='mt-6 text-center'>
                <Button asChild>
                  <Link
                    href='https://www.google.com/maps?ll=34.887776,135.413674&z=16&t=m&hl=ja&gl=JP&mapclient=embed&cid=10600678847956938407'
                    target='_blank'
                  >
                    Google マップのページへ <small>(外部サイト)</small>
                  </Link>
                </Button>
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
