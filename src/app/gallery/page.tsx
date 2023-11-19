import Breadcrumbs from '@/components/Breadcrumbs'
import Gellary from '@/components/Gallery'
import PageHeader from '@/components/PageHeader'
import { cn, outputMetadata } from '@/utils'
import type { Metadata } from 'next'
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

export default function Page() {
  return (
    <div className='container max-w-screen-xl'>
      <main>
        <PageHeader fullWidth>{pageTitle}</PageHeader>

        <div className='my-12 flex flex-col gap-12'>
          <Breadcrumbs />

          <div className='mx-auto max-w-screen-md'>
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

          <section className='full-width py-16'>
            <h2 id='temple' className='text-center'>
              境内の風景
            </h2>
            <div className='mx-auto mt-8 max-w-screen-xl'>
              <Gellary photos={photos} col={1} colMd={3} />
            </div>
          </section>

          <section className='full-width bg-secondary-50 py-16'>
            <h2 id='ajisai' className='text-center'>
              あじさい
            </h2>
            <div className='mx-auto mt-8 max-w-screen-xl'>
              <Gellary photos={photos} col={1} colMd={3} />
            </div>
          </section>

          <section className='full-width py-16'>
            <h2 id='events' className='text-center'>
              イベント
            </h2>
            <div className='mx-auto mt-8 max-w-screen-xl'>
              <Gellary photos={photos} col={1} colMd={3} />
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
