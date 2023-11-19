import Gallery from '@/components/Gallery'
import { cn } from '@/utils'

import Breadcrumbs from '@/components/Breadcrumbs'
import PageHeader from '@/components/PageHeader'
import { SITE_TITLE, SITE_URL } from '@/constants'
import type { Metadata } from 'next'

// for metadata
const pageTitle = '年中行事 / 月例行事'
const pageDescription = '頼光寺の行事の紹介です。'

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
    <div className='container max-w-screen-xl'>
      <main>
        <PageHeader fullWidth>行事案内</PageHeader>
        <Breadcrumbs />

        <div className='mt-12 flex flex-col gap-12'>
          <section>
            <div className='mx-auto max-w-screen-md'>
              <h2>年中行事</h2>
              <EventList events={events} className='my-6' />
              <Gallery photos={photos} col={1} colMd={3} />
            </div>
          </section>

          <hr className='line-with-three-dots' />

          <section>
            <div className='mx-auto flex max-w-screen-md flex-col gap-10'>
              <h2 className='text-center'>月例行事</h2>
              <div>
                <h3 className='text-center'>早朝坐禅会</h3>
                <p className='mt-2 text-center'>
                  毎月第１日曜日 午前６時半〜
                  <br />
                  参加費なし
                </p>
                <p className='mt-4'>
                  ★★ダミーコピーですダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝たしはでまた箱のダミーコピーです上手どもっさと俄たますて、みんなまでぶ弾いとだまし。
                </p>
                <p className='mt-4'>
                  <img
                    src='https://picsum.photos/id/2/600/400.webp'
                    alt=''
                    className='mx-auto w-fit'
                  />
                </p>
              </div>
              <div>
                <h3 className='text-center'>写経会</h3>
                <p className='mt-2 text-center'>
                  毎月８日 午後１時〜(※１月、８月は除く)
                  <br />
                  参加費：★★
                </p>
                <p className='mt-4'>
                  ★★ダミーコピーですダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝たしはでまた箱のダミーコピーです上手どもっさと俄たますて、みんなまでぶ弾いとだまし。
                </p>
                <p className='mt-4'>
                  <img
                    src='https://picsum.photos/id/2/600/400.webp'
                    alt=''
                    className='mx-auto w-fit'
                  />
                </p>
              </div>
              <div>
                <h3 className='text-center'>月例会</h3>
                <p className='mt-2 text-center'>
                  毎月★★日 午後★★時〜
                  <br />
                  ※檀家様向け
                </p>
                <p className='mt-4'>
                  ★★ダミーコピーですダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝たしはでまた箱のダミーコピーです上手どもっさと俄たますて、みんなまでぶ弾いとだまし。
                </p>
                <p className='mt-4'>
                  <img
                    src='https://picsum.photos/id/2/600/400.webp'
                    alt=''
                    className='mx-auto w-fit'
                  />
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
