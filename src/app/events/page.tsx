import ArticleWrapper from '@/components/ArticleWrapper'
import Hr from '@/components/Hr'
import ImageAboveHeading from '@/components/ImageAboveHeading'
import MicrocmsGallery from '@/components/MicrocmsGallery'
import TocLink, { TocLinkItem } from '@/components/TocLink'
import Card from '@/components/ui/Card'
import { cn, outputMetadata } from '@/utils'
import type { Metadata } from 'next'
import Image from 'next/image'

// for metadata
const pageTitle = '年中行事 / 月例行事'
const pageDescription = '頼光寺の行事の紹介です。'

export const metadata: Metadata = outputMetadata({
  title: pageTitle,
  description: pageDescription,
})

type Event = {
  title: string
  date: string
}

const events: Event[] = [
  {
    title: '新年祈祷会',
    date: '１月９日',
  },
  {
    title: '春のお彼岸会',
    date: '３月',
  },
  {
    title: '釈尊降誕会花まつり',
    date: '４月',
  },
  {
    title: '水子総供養法要',
    date: '６月',
  },
  {
    title: '盂蘭盆大施食会',
    date: '８月',
  },
  {
    title: '秋のお彼岸会',
    date: '９月',
  },
]

function EventList({
  events,
  className,
}: {
  events: Event[]
  className?: string
}) {
  return (
    <ul
      className={cn(
        'border-t-1 list-inside list-disc border-t border-dotted border-t-blue-400 marker:text-blue-400',
        className,
      )}
    >
      {events.map(({ title, date }) => (
        <li
          key={crypto.randomUUID()}
          className='border-b-1 border-b border-dotted border-b-blue-400 p-4'
        >
          <span className='mr-4 inline-block w-20 text-center'>{date}</span>
          <span className=' tracking-widest'>{title}</span>
        </li>
      ))}
    </ul>
  )
}

export default function Page() {
  return (
    <ArticleWrapper pageTitle={pageTitle}>
      <div className='mx-auto max-w-screen-sm'>
        <p className='text-center font-bold'>
          頼光寺では季節ごとの仏事、また、毎月の行事（早朝坐禅会、写経会、檀家様向け月例会）を開催しています。皆様の参加をお待ちしております。
        </p>
        <TocLink>
          <TocLinkItem id='annual-events'>年中行事</TocLinkItem>
          <TocLinkItem id='monthly-events'>月例行事</TocLinkItem>
        </TocLink>
      </div>

      <section id='annual-events' className='py-16'>
        <p className='mx-auto max-w-screen-lg text-center'>
          <ImageAboveHeading imageName='chime' />
        </p>
        <h2 className='mt-3 text-center'>年中行事</h2>
        <div className='mx-auto mt-8 max-w-screen-sm'>
          <EventList events={events} className='my-6' />
        </div>
        <div className='mt-16'>
          <MicrocmsGallery
            queries={{
              limit: 24,
              orders: 'system:default',
              filters: 'category[contains]行事・イベント',
            }}
            cols={2}
            colsMd={3}
            colsLg={4}
            colsXL={5}
            className='gap-1'
            childClassName='mb-1'
            imageWidth={600}
          />
        </div>
      </section>

      <Hr type='square' />

      <section id='monthly-events' className='py-16'>
        <div className='mx-auto flex max-w-screen-xl flex-col gap-8'>
          <div>
            <p className='text-center'>
              <ImageAboveHeading imageName='ume' />
            </p>
            <h2 className='mt-3 text-center'>月例行事</h2>
            <p className='mt-4 text-center font-bold'>
              当寺では早朝坐禅会と写経会を月一で開催しています。
              <br />
              初めての方でも気軽にご参加ください。
            </p>
          </div>

          <div className='flex flex-col gap-4 text-center lg:flex-row lg:gap-12'>
            <div className='py-12'>
              <p>
                <Image
                  src='/images/zazen1.jpg'
                  alt='早朝坐禅会'
                  width={2000}
                  height={1333}
                  className='rounded-md'
                />
              </p>
              <h3 className='mt-6 text-center tracking-widest'>
                <span className='inline-block bg-gradient-to-r from-primary-400 to-transparent bg-[length:100%_40%] bg-bottom bg-no-repeat px-2 pb-0.5'>
                  早朝坐禅会
                </span>
              </h3>
              <p className='mt-4 text-center'>
                毎月第１日曜日 午前６時半〜８時ごろ
                <br />
                （※１月、８月は除く）
              </p>
              <p className='mt-2 inline-block border px-2 text-center'>
                参加費なし
              </p>
              <div className='mx-auto max-w-screen-sm'>
                <p className='mt-6 md:text-center lg:px-12'>
                  心を穏やかに、精神を整える座禅会。静かな空間で自分を見つめ直し、内面の平和を深めるとともに心身の調和を目指します。
                  坐禅や読経、食事の作法につきましては、その都度ご説明いたします。
                </p>
                <Card className='mt-6 rounded bg-secondary-50 px-4 py-3 shadow'>
                  <h4 className='text-secondary'>【坐禅会の流れ】</h4>
                  <ol className='mt-4 list-inside list-decimal text-left font-bold leading-7'>
                    <li>本堂内で受付、坐禅堂(紫陽閣)に移動</li>
                    <li>約30分間の坐禅</li>
                    <li>本堂にて朝のお勤め(読経)</li>
                    <li>
                      坐禅堂へ。坐禅をしながら朝ご飯(おかゆ)を召し上がっていただきます
                    </li>
                    <li>解散</li>
                  </ol>
                </Card>
              </div>
            </div>

            <div className='py-12'>
              <p>
                <Image
                  src='/images/copy-sutras.jpg'
                  alt='早朝坐禅会'
                  width={2000}
                  height={1333}
                  className='rounded-md'
                />
              </p>
              <h3 className='mt-6 text-center tracking-widest'>
                <span className='inline-block bg-gradient-to-r from-tertiary-300 to-transparent bg-[length:100%_40%] bg-bottom bg-no-repeat px-2 pb-0.5'>
                  写経会
                </span>
              </h3>
              <p className='mt-4 text-center'>
                毎月８日 午後１時〜３時頃
                <br />
                （１月、８月は除く）
              </p>
              <p className='mt-2 inline-block border px-2 text-center'>
                参加費(納経料)：1,000円
              </p>
              <div className='mx-auto mt-6 max-w-screen-sm'>
                <p className='md:text-center lg:px-12'>
                  無心になり、心を込めて写経をする会。精神をクリアにし、内なる平和へと繋がる貴重な体験です。すべて椅子席で、写経用具は全て当寺でご用意（※
                  筆ペン派の方はご持参ください）。
                </p>
              </div>
            </div>
          </div>

          {/*<Hr type='square' />*/}

          {/*<div className='mx-auto max-w-screen-md py-12'>*/}
          {/*  <h3 className='text-center'>月例会</h3>*/}
          {/*  <p className='mt-2 text-center'>*/}
          {/*    毎月★★日 午後★★時〜*/}
          {/*    <br />*/}
          {/*    ※檀家様向け*/}
          {/*  </p>*/}
          {/*  <p className='mt-4'>*/}
          {/*    ★★ダミーコピーですダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝たしはでまた箱のダミーコピーです上手どもっさと俄たますて、みんなまでぶ弾いとだまし。*/}
          {/*  </p>*/}
          {/*  <p className='mt-4'>*/}
          {/*    <Image*/}
          {/*      src='/images/zazen1.jpg'*/}
          {/*      alt='月例会'*/}
          {/*      width={2000}*/}
          {/*      height={1333}*/}
          {/*    />*/}
          {/*  </p>*/}
          {/*</div>*/}
        </div>
      </section>
    </ArticleWrapper>
  )
}
