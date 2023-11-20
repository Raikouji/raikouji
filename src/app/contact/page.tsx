import Breadcrumbs from '@/components/Breadcrumbs'
import ImageAboveHeading from '@/components/ImageAboveHeading'
import PageHeader from '@/components/PageHeader'
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
            <div className='mx-auto flex max-w-screen-md flex-col gap-8 border p-4 lg:p-8'>
              <h2 id='ajisai' className='mt-4 text-center font-serif'>
                あじさいの開花状況
                <br />
                のお問合せについて
              </h2>
              <p>
                ★★ダミーコピーですダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝たしはでまた箱のダミすて、みんなまでぶ弾いとだまし。
              </p>
              <p className='text-center'>
                <Button>あじさいの開花状況を見る</Button>
              </p>
            </div>
          </section>

          <section>
            <div className='mx-auto flex max-w-screen-lg flex-col gap-8'>
              <div>
                <p className='text-center'>
                  <ImageAboveHeading />
                </p>
                <h2 id='tel' className='mt-4 text-center font-serif'>
                  電話でのお問合せ
                </h2>
              </div>
              <div>
                <p>
                  電話でのお問合せの説明。★★ダミーコピーですダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た
                </p>
                <p className='text-sm font-bold text-red-500'>
                  ※
                  電話をおかけの際は今一度番号をお確かめの上、お掛け間違いには十分ご注意いただくようお願いします。
                </p>
              </div>
              <p className='text-center font-bold'>
                Tel. <span className='text-3xl'>072-794-1165</span>
              </p>
            </div>
          </section>

          <hr className='line-with-three-dots' />

          <section>
            <div className='mx-auto max-w-screen-lg'>
              <p className='text-center'>
                <ImageAboveHeading />
              </p>
              <h2 id='form' className='mt-4 text-center font-serif'>
                フォームでのお問合せ
              </h2>
              <p>
                フォームでのお問合せの説明。★★ダミーコピーですダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た
              </p>
              <div>フォーム</div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
