import Breadcrumbs from '@/components/Breadcrumbs'
import ImageAboveHeading from '@/components/ImageAboveHeading'
import PageHeader from '@/components/PageHeader'
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
    <div className='container max-w-screen-xl'>
      <main>
        <PageHeader fullWidth>{pageTitle}</PageHeader>
        <Breadcrumbs className='mt-2' />

        <div className='my-12 flex flex-col'>
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
                  御朱印の説明。★★ダミーコピーですダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝たしはでまた箱のダミーコピーです上手どもっさと俄たますて、みんなまでぶ弾いとだまし。
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
                      【重要】タイミングにより、入手できない場合があります
                    </h3>
                    <p className='mt-4'>★★内容、説明。合図：受付中の目印</p>
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

          <hr className='line-with-three-dots' />

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
                <h2
                  id='scarlet-seal'
                  className='mt-3 text-center tracking-widest'
                >
                  仏前結婚式
                </h2>
                <p className='mt-8'>
                  仏前結婚式の説明。★★ダミーコピーですダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝たしはでまた箱のダミーコピーです上手どもっさと俄たますて、みんなまでぶ弾いとだまし。
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
        </div>
      </main>
    </div>
  )
}
