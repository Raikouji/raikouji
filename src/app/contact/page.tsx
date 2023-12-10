import Breadcrumbs from '@/components/Breadcrumbs'
import ImageAboveHeading from '@/components/ImageAboveHeading'
import PageHeader from '@/components/PageHeader'
import Card from '@/components/ui/Card'
import { Button } from '@/components/ui/button'
import { cn, outputMetadata } from '@/utils'
import type { Metadata } from 'next'

// for metadata
const pageTitle = 'お問合せ'
const pageDescription = '頼光寺へのお問い合わせ。'

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

        <div className='my-12 flex flex-col gap-12'>
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
                <a className='hover:text-primary-400' href='#ajisai'>
                  あじさいの開花状況
                </a>
              </li>
              <li>
                <a className='hover:text-primary-400' href='#tel'>
                  電話でのお問合せ
                </a>
              </li>
              <li>
                <a className='hover:text-primary-400' href='#form'>
                  フォームでのお問合せ
                </a>
              </li>
            </ul>
          </div>

          <section>
            <div className='mx-auto max-w-screen-md'>
              <Card
                className={cn(
                  'relative mx-auto p-8',
                  'bg-red-50',
                  'rounded-xl',
                )}
              >
                <h2 id='ajisai' className='text-center text-xl text-red-500'>
                  あじさいの開花状況の
                  <br className='lg:hidden' />
                  お問合せについて
                </h2>
                <p className='mt-4'>
                  ★★ダミーコピーですダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝たしはでまた箱のダミすて、みんなまでぶ弾いとだまし。
                </p>
                <p className='mt-4 text-center'>
                  <Button>あじさいの開花状況を見る</Button>
                </p>
              </Card>
            </div>
          </section>

          <div className='flex flex-col gap-4 md:flex-row md:gap-8 lg:gap-20'>
            <section className='lg:w-2/5'>
              <div className='flex flex-col gap-8'>
                <div>
                  <p className='text-center'>
                    <ImageAboveHeading imageName='uguisu' />
                  </p>
                  <h2 id='tel' className='mt-3 text-center font-serif'>
                    電話でのお問合せ
                  </h2>
                </div>
                <div>
                  <p>
                    電話でのお問合せの説明。★★ダミーコピーですダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た
                  </p>
                  <p className='mt-3 text-sm font-bold text-red-500'>
                    ※
                    電話をおかけの際は今一度番号をお確かめの上、お掛け間違いには十分ご注意いただくようお願いします。
                  </p>
                </div>
                <p className='text-center font-bold'>
                  Tel. <span className='text-3xl'>072-794-1165</span>
                </p>
              </div>
            </section>

            <hr className='line-with-three-dots lg:hidden' />

            <section className='lg:w-3/5'>
              <div className='flex flex-col gap-8'>
                <div>
                  <p className='text-center'>
                    <ImageAboveHeading imageName='statue' />
                  </p>
                  <h2 id='form' className='mt-3 text-center font-serif'>
                    フォームでのお問合せ
                  </h2>
                </div>
                <p>
                  フォームでのお問合せの説明。★★ダミーコピーですダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た
                </p>
                <div>
                  <iframe
                    src='https://docs.google.com/forms/d/e/1FAIpQLSehno7mm4V8lPWX1toSMtIP4TJ59f6RhlFReuwQWWtw-gfltw/viewform?embedded=true'
                    width='100%'
                    height='1000'
                    frameBorder={0}
                    marginHeight={0}
                    marginWidth={0}
                  >
                    読み込んでいます…
                  </iframe>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
