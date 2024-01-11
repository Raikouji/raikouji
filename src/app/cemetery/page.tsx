import Image from 'next/image'

import Breadcrumbs from '@/components/Breadcrumbs'
import Gallery from '@/components/Gallery'
import ImageAboveHeading from '@/components/ImageAboveHeading'
import PageHeader from '@/components/PageHeader'
import Card from '@/components/ui/Card'
import { Button } from '@/components/ui/button'
import { cn, outputMetadata } from '@/utils'
import type { Metadata } from 'next'
import Link from 'next/link'

// for metadata
const pageTitle = '墓地の案内'
const pageDescription =
  '頼光寺のお墓は、静かで緑豊かな心安らぐ空間です。永代供養共同墓、水子供養塔もあります。能勢電鉄「畦野駅」から徒歩５分とアクセスもしやすい立地です。'

export const metadata: Metadata = outputMetadata({
  title: pageTitle,
  description: pageDescription,
})

const photos = [
  {
    src: '/images/genji.jpg',
    width: 900,
    height: 600,
    alt: '源頼光',
  },
  {
    src: '/images/grave1.jpg',
    width: 900,
    height: 600,
    alt: '代替テキスト2',
  },
  {
    src: '/images/grave3.jpg',
    width: 900,
    height: 600,
    alt: '代替テキスト1',
  },
  {
    src: '/images/grave2.jpg',
    width: 900,
    height: 600,
    alt: '代替テキスト1',
  },
]

export default function Page() {
  return (
    <div className='container max-w-screen-xl'>
      <main>
        <PageHeader fullWidth>{pageTitle}</PageHeader>
        <Breadcrumbs className='mt-2' />

        <div className='mt-12 flex flex-col'>
          <div className='mx-auto max-w-screen-md'>
            <p className='font-bold lg:text-center'>
              頼光寺のお墓は、静かで緑豊かな心安らぐ空間で、永遠の憩いの場所としてふさわしい場所。
              <br />
              能勢電鉄「畦野駅」から徒歩５分とアクセスもしやすい立地です。
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
                <a className='hover:text-primary-400' href='#public-grave'>
                  永代供養共同墓
                </a>
              </li>
              <li>
                <a className='hover:text-primary-400' href='#mizuko-kuyou'>
                  水子供養
                </a>
              </li>
              <li>
                <a className='hover:text-primary-400' href='#general-cemetery'>
                  一般墓地（檀家様）
                </a>
              </li>
              <li>
                <a className='hover:text-primary-400' href='#historic-graves'>
                  歴史にまつわるお墓
                </a>
              </li>
            </ul>
          </div>

          <section className='mx-auto max-w-screen-lg py-12'>
            <div
              id='public-grave'
              className='mt-8 flex flex-col items-center gap-4 md:flex-row md:gap-8 lg:gap-12'
            >
              <p>
                <Image
                  src='/images/cemetery.jpg'
                  alt='永代供養共同墓'
                  width={384}
                  height={256}
                />
              </p>
              <div className='md:w-3/5'>
                <p className='text-center'>
                  <ImageAboveHeading imageName='asagao' />
                </p>
                <h2 className='mt-3 text-center tracking-widest'>
                  永代供養共同墓
                </h2>
                <p className='mt-8'>
                  都市化、核家族化、未婚率の増加、出生率の低下などの原因で、祭祀の後継者がいない家庭が増え続けています。多くの方々がこの問題に直面し、悩まれていることでしょう。
                </p>
                <p className='mt-4'>
                  そのような方々のご要望にお応えして、賴光寺では、境内に「永代供養共同墓」を設けました。生前にご契約いただくことで、祭祀の後継者がいない方々のために、永代供養共同墓に遺骨を埋葬された後、私たちは責任を持ってこれを管理します。
                </p>
                <p className='mt-4'>
                  永代にわり、お盆や春秋の彼岸には供養を行います。安心して晩年をお過ごしいただくことができるでしょう。
                </p>
              </div>
            </div>

            <div className='mx-auto mt-12 max-w-screen-md'>
              <Card
                className={cn(
                  'relative mx-auto p-8',
                  'bg-[url("/images/bg-paper.png")] bg-cover',
                  'rounded-xl shadow-lg',
                )}
              >
                <h3 className='text-center text-secondary-dark'>
                  永代供養納骨塔のご案内
                </h3>
                <p className='mt-4'>★★内容、志納金など</p>
                <ul className='mt-4 list-inside list-disc marker:text-tertiary'>
                  <li>墓石はありません。</li>
                  <li>お墓の管理は頼光寺が行います。</li>
                  <li>お墓の場所は、墓地内で選ぶことができます。</li>
                </ul>
              </Card>
            </div>
          </section>

          <hr className='line-with-three-dots' />

          <div className='full-width bg-secondary-50'>
            <section className='mx-auto max-w-screen-lg py-12'>
              <div id='mizuko-kuyou' className='mt-8'>
                <p className='mx-auto max-w-screen-sm'>
                  <Image
                    src='/images/statue-and-ajisai.jpg'
                    alt='水子供養'
                    width={2000}
                    height={1333}
                  />
                </p>
                <p className='mt-12 text-center'>
                  <ImageAboveHeading imageName='momiji' />
                </p>
                <h2 className='mt-3 text-center tracking-widest'>水子供養</h2>
                <div className='mt-12 flex flex-col gap-4 lg:flex-row lg:gap-12'>
                  <div className='lg:w-1/2'>
                    <p>
                      心を込めて水子供養を行います。手厚く供養し、大切に管理しております。緑に囲まれ、初夏には庭を彩る紫陽花が心の安らぎを与えてくれます。
                    </p>
                    <p className='mt-4'>
                      都会の喧騒からは遠く、しかし大阪からは１時間以内とアクセスも良好。心静かな環境で故人を偲び、供養することができます。
                    </p>
                  </div>
                  <div className='lg:w-1/2'>
                    <Card
                      className={cn(
                        'relative mx-auto p-8',
                        'bg-[url("/images/bg-paper.png")] bg-cover',
                        'rounded-xl shadow-lg',
                      )}
                    >
                      <h3 className='text-center text-secondary-dark'>
                        水子供養のご案内
                      </h3>
                      <p className='mt-4'>★★内容、志納金など</p>
                      <ul className='mt-4 list-inside list-disc marker:text-tertiary'>
                        <li>墓石はありません。</li>
                        <li>お墓の管理は頼光寺が行います。</li>
                        <li>お墓の場所は、墓地内で選ぶことができます。</li>
                      </ul>
                    </Card>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <hr className='line-with-three-dots' />

          <section className='mx-auto max-w-screen-lg py-12'>
            <div
              id='general-cemetery'
              className='mt-8 flex flex-col items-center gap-4 md:flex-row md:gap-8 lg:gap-12'
            >
              <p className='md:w-1/2'>
                <Image
                  src='/images/general-cemetery.jpg'
                  alt='一般墓地 (檀家)'
                  width={2000}
                  height={1333}
                />
              </p>
              <div className='md:w-1/2'>
                <p className='text-center'>
                  <ImageAboveHeading imageName='chime' />
                </p>
                <h2 className='mt-3 text-center tracking-widest'>
                  一般墓地 (檀家様)
                </h2>
                <p className='mt-12'>
                  当寺の一般墓地は緑豊かな環境に囲まれた静かな環境にあり、故人の供養と管理を丁寧に行っております。
                  大阪から１時間以内のアクセスが可能な、お参りにしやすい便利な立地です。
                </p>
                <p className='mt-4'>
                  毎月法要（月例会）を行っており、檀家様は故人のご供養に参加いただけます。
                </p>
              </div>
            </div>

            <div className='mx-auto mt-12 max-w-screen-md'>
              <Card
                className={cn(
                  'relative mx-auto p-8',
                  'bg-[url("/images/bg-paper.png")] bg-cover',
                  'rounded-xl shadow-lg',
                )}
              >
                <h3 className='text-center text-secondary-dark'>
                  檀家様のご案内
                </h3>
                <p className='mt-4'>★★説明など</p>
              </Card>
            </div>
          </section>

          <hr className='line-with-three-dots' />

          <div className='full-width bg-secondary-50'>
            <section
              id='historic-graves'
              className='mx-auto w-full max-w-screen-lg py-12'
            >
              <p className='text-center'>
                <ImageAboveHeading imageName='uguisu' />
              </p>
              <h2 className='mt-3 text-center'>歴史にまつわるお墓</h2>
              <p className='mx-auto mt-8 max-w-screen-sm lg:text-center'>
                境内には、本寺の設立者や源氏ゆかりの歴史にちなんだ古いお墓があります。
                <br />
                詳しくは
                <Link
                  href='about'
                  className='text-primary underline hover:no-underline'
                >
                  「頼光寺の沿革」
                </Link>
                をご覧ください。
              </p>

              <div className='mt-8'>
                <Gallery photos={photos} col={1} colMd={2} colLg={2} />
              </div>

              <p className='mt-8 text-center'>
                <Button asChild>
                  <Link href='about'>ご挨拶・頼光寺の沿革</Link>
                </Button>
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
