import ArticleWrapper from '@/components/ArticleWrapper'
import Hr from '@/components/Hr'
import ImageAboveHeading from '@/components/ImageAboveHeading'
import Card from '@/components/ui/Card'
import { cn, outputMetadata } from '@/utils'
import type { Metadata } from 'next'
import Image from 'next/image'

// for metadata
const pageTitle = '御朱印、仏前結婚式'
const pageDescription = '頼光寺の御朱印と仏前結婚式について。'

export const metadata: Metadata = outputMetadata({
  title: pageTitle,
  description: pageDescription,
})

export default function Page() {
  return (
    <ArticleWrapper pageTitle={pageTitle}>
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
            <a className='hover:text-primary-400' href='#scarlet-seal'>
              御朱印
            </a>
          </li>
          <li>
            <a className='hover:text-primary-400' href='#wedding'>
              仏前結婚式
            </a>
          </li>
        </ul>
      </div>

      <section id='scarlet-seal' className='mx-auto max-w-screen-lg py-12'>
        <div
          id='public-grave'
          className='mt-8 flex flex-col items-center gap-4 md:flex-row md:gap-8 lg:gap-12'
        >
          <p>
            <Image
              src='/images/scarlet-seal-2.png'
              alt='御朱印'
              width={384}
              height={256}
            />
          </p>
          <div className='md:w-3/5'>
            <p className='text-center'>
              <ImageAboveHeading imageName='priest' />
            </p>
            <h2 className='mt-3 text-center tracking-widest'>御朱印</h2>
            <p className='mt-8'>
              訪れた方々が頼光寺を訪れた記念として、また、その時々の思い出を刻んでいただくため、一般のお客様にも御朱印を提供しております。
            </p>
            <p>
              （御朱印は寺院の神聖さを象徴するものであり、敬意を持って取り扱うことをお願い申し上げます。)
            </p>
            <div className='mx-auto mt-12 max-w-screen-md'>
              <Card
                className={cn(
                  'relative mx-auto p-8',
                  'bg-red-50',
                  'rounded-xl',
                )}
              >
                <h3 className='text-xl text-red-500'>
                  タイミングにより、入手できない場合があります。
                </h3>
                <p className='mt-4'>
                  当寺の状況により御朱印は必ずしも提供できるとは限らず、時には一日の中で提供が終了することもございます。
                  また、発行者により仕上がりが異なる場合があることをご理解ください。
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Hr type='square' />

      <section id='wedding' className='mx-auto max-w-screen-lg py-12'>
        <div
          id='public-grave'
          className='mt-8 flex flex-col items-center gap-4 md:flex-row md:gap-8 lg:gap-12'
        >
          <p className='order-1'>
            <Image
              src='/images/bridal.jpg'
              alt='仏前結婚式'
              width={384}
              height={256}
            />
          </p>
          <div className='md:w-3/5'>
            <p className='text-center'>
              <ImageAboveHeading imageName='bell' />
            </p>
            <h2 id='scarlet-seal' className='mt-3 text-center tracking-widest'>
              仏前結婚式
            </h2>
            <p className='mt-8'>
              頼光寺では、静かな雰囲気の中での仏前結婚式をとり行っています。
              愛と尊敬の誓いを立てる特別な場所で、心からの祝福を捧げます。
              詳細についてのお問い合わせやご相談は、いつでもお寺までお気軽にご連絡ください。
            </p>
            <div className='mx-auto mt-12 max-w-screen-md'>
              <Card
                className={cn(
                  'relative mx-auto p-8',
                  'bg-[url("/images/bg-paper.png")] bg-cover',
                  'rounded-xl shadow-lg',
                )}
              >
                <h3 className='text-center text-xl text-secondary-dark'>
                  仏前結婚式のご案内
                </h3>
                <p className='mt-4'>★★内容、流れ、志納金など</p>
                {/*<ul className='mt-4 list-inside list-disc marker:text-tertiary'>*/}
                {/*  <li>墓石はありません。</li>*/}
                {/*  <li>お墓の管理は頼光寺が行います。</li>*/}
                {/*  <li>お墓の場所は、墓地内で選ぶことができます。</li>*/}
                {/*</ul>*/}
              </Card>
            </div>
          </div>
        </div>
      </section>
    </ArticleWrapper>
  )
}
