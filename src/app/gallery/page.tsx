import ArticleWrapper from '@/components/ArticleWrapper'
import Gellary from '@/components/Gallery'
import ImageAboveHeading from '@/components/ImageAboveHeading'
import { getGalleryPhotos } from '@/helpers/microcms'
import { cn, outputMetadata } from '@/utils'
import type { Metadata } from 'next'
import Image from 'next/image'

// for metadata
const pageTitle = 'ギャラリー'
const pageDescription =
  '境内の様子、あじさい、イベントなど、頼光寺の風景の写真ギャラリーです。'

export const metadata: Metadata = outputMetadata({
  title: pageTitle,
  description: pageDescription,
})

const photos = [
  {
    src: '/images/dried-persimmons.jpg',
    width: 600,
    height: 900,
    alt: '代替テキスト2',
  },
  {
    src: '/images/rain-drop.jpg',
    width: 900,
    height: 600,
    alt: '代替テキスト3',
  },
  {
    src: '/images/dummy-03.jpg',
    width: 900,
    height: 600,
    alt: '代替テキスト4',
  },
  {
    src: '/images/narcissus.jpg',
    width: 600,
    height: 900,
    alt: '代替テキスト5',
  },
  {
    src: '/images/ume-blossoms.jpg',
    width: 600,
    height: 900,
    alt: '代替テキスト7',
  },
  {
    src: '/images/lotus.jpg',
    width: 900,
    height: 600,
    alt: '代替テキスト8',
  },
]

const photosAjisai = [
  {
    src: '/images/ajisai6.jpg',
    width: 900,
    height: 600,
    alt: '代替テキスト1',
  },
  {
    src: '/images/ajisai2.jpg',
    width: 900,
    height: 600,
    alt: '代替テキスト2',
  },
  {
    src: '/images/ajisai7.jpg',
    width: 900,
    height: 600,
    alt: '代替テキスト3',
  },
  {
    src: '/images/ajisai4.jpg',
    width: 900,
    height: 600,
    alt: '代替テキスト4',
  },
  {
    src: '/images/ajisai3.jpg',
    width: 900,
    height: 600,
    alt: '代替テキスト5',
  },
  { src: '/images/spider.jpg', width: 900, height: 600, alt: '代替テキスト6' },
  {
    src: '/images/ajisai-garden3.jpg',
    width: 900,
    height: 600,
    alt: '代替テキスト7',
  },
  {
    src: '/images/ajisai-garden2.jpg',
    width: 900,
    height: 600,
    alt: '代替テキスト8',
  },
]

const photosEvent = [
  {
    src: '/images/light-up.jpg',
    width: 900,
    height: 600,
    alt: '代替テキスト1',
  },
  { src: '/images/zazen.jpg', width: 600, height: 900, alt: '座禅会' },
  {
    src: '/images/ajisai-bouquet.jpg',
    width: 600,
    height: 900,
    alt: 'あじさい札',
  },
]

export default async function Page() {
  const { contents, totalCount, offset, limit } = await getGalleryPhotos({
    limit: 100,
  })

  const filteredByCategory = (categoryName: string) =>
    contents.filter((content) => {
      return content.category[0] === categoryName
    })
  const contentsTemple = filteredByCategory('境内の風景')
  const contentsAjisai = filteredByCategory('あじさい')
  const contentsEvents = filteredByCategory('行事・イベント')

  return (
    <ArticleWrapper pageTitle={pageTitle}>
      <div className='border p-4'>
        <h2 className='text-center'>サンプル: MicroCMS から取得</h2>
        <p>
          totalCount: {totalCount}, offset: {offset}, limit: {limit}
        </p>
        <ul className='flex gap-4'>
          {contentsTemple.map(
            ({ id, photo, category, caption, isDisplayOnHome }) => {
              return (
                <li key={id}>
                  <figure>
                    <Image
                      src={photo.url}
                      width={photo.width}
                      height={photo.height}
                      alt={caption ? caption : ''}
                    />
                    <figcaption className='mt-2'>
                      {caption}/{category[0]}/
                      {isDisplayOnHome
                        ? 'トップページに表示'
                        : 'トップページに非表示'}
                    </figcaption>
                  </figure>
                </li>
              )
            },
          )}
        </ul>
        <ul className='flex gap-4'>
          {contentsAjisai.map(
            ({ id, photo, category, caption, isDisplayOnHome }) => {
              return (
                <li key={id}>
                  <figure>
                    <Image
                      src={photo.url}
                      width={photo.width}
                      height={photo.height}
                      alt={caption ? caption : ''}
                    />
                    <figcaption className='mt-2'>
                      {caption}/{category[0]}/
                      {isDisplayOnHome
                        ? 'トップページに表示'
                        : 'トップページに非表示'}
                    </figcaption>
                  </figure>
                </li>
              )
            },
          )}
        </ul>
        <ul className='flex gap-4'>
          {contentsEvents.map(
            ({ id, photo, category, caption, isDisplayOnHome }) => {
              return (
                <li key={id}>
                  <figure>
                    <Image
                      src={photo.url}
                      width={photo.width}
                      height={photo.height}
                      alt={caption ? caption : ''}
                    />
                    <figcaption className='mt-2'>
                      {caption}/{category[0]}/
                      {isDisplayOnHome
                        ? 'トップページに表示'
                        : 'トップページに非表示'}
                    </figcaption>
                  </figure>
                </li>
              )
            },
          )}
        </ul>
      </div>
      <div className='my-12 flex flex-col'>
        <p className='text-center font-bold'>
          頼光寺の風景やイベントなどの写真です。
          <br />
          秋には紅葉をお楽しみいただけます。
        </p>
        <div className='mx-auto mt-4 max-w-screen-md'>
          <ul
            className={cn(
              'flex text-sm',
              '[&>li>a]:text-foreground/70',
              '[&>li:after]:text-foreground/30',
              '[&>li:not(:last-child):after]:mx-3 [&>li:not(:last-child):after]:content-["|"] ',
            )}
          >
            <li>
              <a className='hover:text-primary-400' href='#temple'>
                境内の風景
              </a>
            </li>
            <li>
              <a className='hover:text-primary-400' href='#ajisai'>
                あじさい
              </a>
            </li>
            <li>
              <a className='hover:text-primary-400' href='#events'>
                イベント
              </a>
            </li>
          </ul>
        </div>

        <section className='full-width px-4 py-16'>
          <p className='text-center'>
            <ImageAboveHeading imageName='bell' />
          </p>
          <h2 id='temple' className='mt-3 text-center'>
            境内の風景
          </h2>
          <div className='mx-auto mt-8 max-w-screen-2xl'>
            <Gellary photos={photos} col={1} colMd={3} />
          </div>
        </section>

        <section className='full-width bg-secondary-50 px-4 py-16'>
          <p className='text-center'>
            <ImageAboveHeading imageName='statue' />
          </p>
          <h2 id='ajisai' className='mt-2 text-center'>
            あじさい
          </h2>
          <div className='mx-auto mt-8 max-w-screen-2xl'>
            <Gellary photos={photosAjisai} col={1} colMd={3} />
          </div>
        </section>

        <section className='full-width px-4 py-16'>
          <p className='text-center'>
            <ImageAboveHeading imageName='asagao' />
          </p>
          <h2 id='events' className='mt-2 text-center'>
            イベント
          </h2>
          <div className='mx-auto mt-8 max-w-screen-2xl'>
            <Gellary photos={photosEvent} col={1} colMd={3} />
          </div>
        </section>
      </div>
    </ArticleWrapper>
  )
}
