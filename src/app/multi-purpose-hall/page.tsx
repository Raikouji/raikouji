import ArticleWrapper from '@/components/ArticleWrapper'
import Gellary from '@/components/Gallery'
import ImageAboveHeading from '@/components/ImageAboveHeading'
import { outputMetadata } from '@/utils'
import type { Metadata } from 'next'
import Image from 'next/image'

// for metadata
const pageTitle = '紫陽閣(多目的ホール)の貸し出し'
const pageDescription =
  '頼光寺のお墓は、静かで緑豊かな心安らぐ空間です。永代供養共同墓、水子供養塔もあります。能勢電鉄「畦野駅」から徒歩５分とアクセスもしやすい立地です。'

export const metadata: Metadata = outputMetadata({
  title: pageTitle,
  description: pageDescription,
})

const photos = [
  {
    src: '/images/zazen1.jpg',
    width: 900,
    height: 600,
    alt: '代替テキスト1',
  },
  {
    src: '/images/multi-purpose-hall-2.jpg',
    width: 900,
    height: 600,
    alt: '代替テキスト2',
  },
  {
    src: '/images/multi-purpose-hall-3.jpg',
    width: 900,
    height: 600,
    alt: '代替テキスト4',
  },
]

export default function Page() {
  return (
    <ArticleWrapper pageTitle={pageTitle}>
      <div className='my-12'>
        <section className='flex flex-col gap-12'>
          <div className='full-width-md mx-auto max-w-screen-md'>
            <Image
              src='/images/zen-hall.jpg'
              alt='Lorem'
              width={2100}
              height={1333}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              style={{ objectFit: 'cover' }}
              priority
            />
            <p className='mt-6 text-center font-bold'>
              多目的ホール「紫陽閣（しようかく）」を予約制でお貸ししています。
              これまで、ヨガ教室や音楽演奏会などにご利用いただいたことがあります。
              月例の早朝坐禅会も、この紫陽閣で行っています。
            </p>
          </div>

          <div className='mx-auto max-w-screen-lg'>
            <p className='text-center'>
              <ImageAboveHeading imageName='priest2' />
            </p>
            <h2 className='mt-2 text-center font-serif'>貸し出しのご案内</h2>
            <p className='mt-6'>内容、志納金など</p>
          </div>
          <Gellary photos={photos} col={1} colMd={3} colLg={3} />
        </section>
      </div>
    </ArticleWrapper>
  )
}
