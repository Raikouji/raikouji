import ArticleWrapper from '@/components/ArticleWrapper'
import Gallery from '@/components/Gallery'
import ImageAboveHeading from '@/components/ImageAboveHeading'
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

const photos = [
  {
    src: '/images/dummy-01.jpg',
    width: 900,
    height: 600,
    alt: '代替テキスト1',
  },
  {
    src: '/images/dummy-03.jpg',
    width: 900,
    height: 600,
    alt: '代替テキスト2',
  },
  {
    src: '/images/dummy-01.jpg',
    width: 900,
    height: 600,
    alt: '代替テキスト1',
  },
  {
    src: '/images/dummy-03.jpg',
    width: 900,
    height: 600,
    alt: '代替テキスト2',
  },
  {
    src: '/images/dummy-01.jpg',
    width: 900,
    height: 600,
    alt: '代替テキスト1',
  },
  {
    src: '/images/dummy-03.jpg',
    width: 900,
    height: 600,
    alt: '代替テキスト2',
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
          className='border-b-1 border-b border-dotted border-b-blue-400 px-4 py-2'
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
        <ul
          className={cn(
            'mt-8 flex justify-center text-sm',
            '[&>li>a]:text-foreground/70',
            '[&>li:after]:text-foreground/30',
            '[&>li:not(:last-child):after]:mx-3 [&>li:not(:last-child):after]:content-["|"] ',
          )}
        >
          <li>
            <a className='hover:text-primary-400' href='#annual-events'>
              年中行事
            </a>
          </li>
          <li>
            <a className='hover:text-primary-400' href='#monthly-events'>
              月例行事
            </a>
          </li>
        </ul>
      </div>

      <section className='id="annual-events" py-16'>
        <div className='mx-auto max-w-screen-lg'>
          <p className='text-center'>
            <ImageAboveHeading imageName='chime' />
          </p>
          <h2 className='mt-3 text-center'>年中行事</h2>
          <div className='mt-8 flex flex-col items-center gap-4 lg:flex-row lg:gap-12'>
            <EventList events={events} className='my-6' />
            <div className='flex-grow'>
              <Gallery photos={photos} col={1} colMd={3} />
            </div>
          </div>
        </div>
      </section>

      <hr className='line-with-three-dots' />

      <section id='monthly-events' className='py-16'>
        <div className='mx-auto flex max-w-screen-xl flex-col gap-8'>
          <div>
            <p className='text-center'>
              <ImageAboveHeading imageName='ume' />
            </p>
            <h2 className='mt-3 text-center'>月例行事</h2>
          </div>

          <div className='flex flex-col gap-4 lg:flex-row lg:gap-12'>
            <div className='py-12'>
              <p>
                <Image
                  src='/images/zazen1.jpg'
                  alt='早朝坐禅会'
                  width={2000}
                  height={1333}
                />
              </p>
              <h3 className='mt-6 text-center tracking-widest'>早朝坐禅会</h3>
              <p className='mt-2 text-center'>
                毎月第１日曜日 午前６時半〜
                <br />
                （１月、８月は除く）
                <br />
                参加費なし
              </p>
              <div className='mx-auto max-w-screen-sm'>
                <p className='mt-4 md:text-center'>
                  初めての方でも気軽にご参加いただけます。
                  <br className='hidden md:inline' />
                  坐禅や読経、食事の作法につきましてはその都度ご説明いたします。
                </p>
                <p className='mt-6 text-center font-bold md:text-left'>
                  【座禅会の流れ】
                </p>
                <ol className='mt-2 list-inside list-decimal font-bold leading-7'>
                  <li>本堂内で受付を済ませ、坐禅堂に移動し約30分すわります</li>
                  <li>その後、本堂にて朝のお勤め（読経）</li>
                  <li>
                    再度坐禅堂にて坐禅をしながら朝ご飯（おかゆ）を召し上がっていただきます
                  </li>
                  <li>8時頃解散となります </li>
                </ol>
              </div>
            </div>
            <hr className='line-with-three-dots' />
            <div className='py-12'>
              <p>
                <Image
                  src='/images/copy-sutras.jpg'
                  alt='早朝坐禅会'
                  width={2000}
                  height={1333}
                />
              </p>
              <h3 className='mt-6 text-center tracking-widest'>写経会</h3>
              <p className='mt-2 text-center'>
                毎月８日 午後１時〜
                <br />
                （１月、８月は除く）
                <br />
                参加費(納経料)：1,000円
              </p>
              <div className='mx-auto mt-6 max-w-screen-sm'>
                <p className='md:text-center'>
                  当寺では写経会を月一で開催しています。すべて椅子席で、写経用具は全てご用意（筆ペン派の方はご持参ください）。
                  午後3時頃に解散となります。
                  功徳を得られ、無心になり心が落ち着く写経の魅力を体感しませんか？
                </p>
              </div>
            </div>
          </div>

          {/*<hr className='line-with-three-dots' />*/}

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
