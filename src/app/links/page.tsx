import Breadcrumbs from '@/components/Breadcrumbs'
import ImageAboveHeading from '@/components/ImageAboveHeading'
import PageHeader from '@/components/PageHeader'
import { cn, outputMetadata } from '@/utils'
import type { Metadata } from 'next'

// for metadata
const pageTitle = 'リンク'
const pageDescription = '関連しているサイトのリンク集です。'

export const metadata: Metadata = outputMetadata({
  title: pageTitle,
  description: pageDescription,
})

type Link = {
  title: string
  url: string
}

const events1: Link[] = [
  {
    title: '全日本仏教会',
    url: 'https://www.jbf.ne.jp/',
  },
  {
    title: '曹洞宗 曹洞禅ネット 公式',
    url: 'https://www.sotozen-net.or.jp/',
  },
  {
    title: '曹洞宗近畿管区教化センター',
    url: 'https://www.soto-kinki.net/',
  },
]

const events2: Link[] = [
  {
    title: '頼光寺（あじさい寺）- 能勢電鉄',
    url: 'https://noseden.hankyu.co.jp/guide/spot/ypcvp8g2j1/',
  },
  {
    title: '頼光寺 清和源氏ゆかりの社寺 - 川西市',
    url: 'https://www.city.kawanishi.hyogo.jp/shiseijoho/shokai/kankouannai/1003058/kankou_raiko.html',
  },
  {
    title: '頼光寺(川西市) - ウィキペディア',
    url: 'https://ja.wikipedia.org/wiki/%E9%A0%BC%E5%85%89%E5%AF%BA_(%E5%B7%9D%E8%A5%BF%E5%B8%82)',
  },
]

function LinkList({
  events,
  className,
}: {
  events: Link[]
  className?: string
}) {
  return (
    <ul
      className={cn(
        'border-t-1 list-inside list-disc border-t border-dotted border-t-blue-400 marker:text-blue-400',
        className,
      )}
    >
      {events.map(({ title, url }) => (
        <li
          key={crypto.randomUUID()}
          className='border-b-1 border-b border-dotted border-b-blue-400 px-4 py-2'
        >
          <a
            href={url}
            className='tracking-widest text-primary-700 hover:text-primary-400'
          >
            {title}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default function Page() {
  return (
    <div className='container max-w-screen-xl'>
      <main>
        <PageHeader fullWidth>{pageTitle}</PageHeader>
        <Breadcrumbs className='mt-2' />

        <div className='my-12 flex flex-col gap-12 lg:flex-row lg:gap-20'>
          <section className='lg:w-1/2'>
            <div className='mx-auto max-w-screen-lg'>
              <p className='text-center'>
                <ImageAboveHeading />
              </p>
              <h2 id='scarlet-seal' className='mt-4 text-center font-serif'>
                関連リンク
              </h2>
              <LinkList events={events1} className='my-6' />
            </div>
            <hr className='line-with-three-dots lg:hidden' />
          </section>

          <section className='lg:w-1/2'>
            <div className='mx-auto max-w-screen-lg'>
              <p className='text-center'>
                <ImageAboveHeading imageName='frog' />
              </p>
              <h2 id='scarlet-seal' className='mt-4 text-center font-serif'>
                頼光寺を紹介いただいているサイト
              </h2>
              <LinkList events={events2} className='my-6' />
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
