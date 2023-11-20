import Breadcrumbs from '@/components/Breadcrumbs'
import ImageAboveHeading from '@/components/ImageAboveHeading'
import PageHeader from '@/components/PageHeader'
import { Button } from '@/components/ui/button'
import { outputMetadata } from '@/utils'
import type { Metadata } from 'next'

// for metadata
const pageTitle = 'アクセス'
const pageDescription = '頼光寺へのアクセスです。駐車場情報も。'

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
          <section>
            <div className='mx-auto flex max-w-screen-md flex-col gap-10'>
              <h2 className='text-center'>電車でのアクセス</h2>
              <p className='text-center'>能勢電鉄「畦野駅」より徒歩5分です。</p>
              <h3 className='text-center'>畦野駅からの道順</h3>
              <ol className='lg:columns-2 lg:gap-8'>
                <li className='text-center after:text-2xl after:text-primary-400 after:content-["▼"]'>
                  <div className='flex gap-3 md:gap-4'>
                    <p className='order-1 w-1/2 text-left leading-snug tracking-normal md:w-2/3'>
                      1.
                      ★★ダミーコピーです。改札を出たら、右側にある階段を降ります。ダミーコピーです手はおっかさの。
                    </p>
                    <img
                      className='w-1/2 md:w-1/3'
                      src='https://picsum.photos/id/2/384/256.webp'
                      alt=''
                    />
                  </div>
                </li>
                <li className='text-center after:text-2xl after:text-primary-400 after:content-["▼"]'>
                  <div className='flex gap-3 md:gap-4'>
                    <p className='order-1 w-1/2 text-left leading-snug tracking-normal md:w-2/3'>
                      2.
                      ★★ダミーコピーです。改札を出たら、右側にある階段を降ります。ダミーコピーです手はおっかさの。
                    </p>
                    <img
                      className='w-1/2 md:w-1/3'
                      src='https://picsum.photos/id/2/384/256.webp'
                      alt=''
                    />
                  </div>
                </li>
                <li className='text-center after:text-2xl after:text-primary-400 after:content-["▼"]'>
                  <div className='flex gap-3 md:gap-4'>
                    <p className='order-1 w-1/2 text-left leading-snug tracking-normal md:w-2/3'>
                      3.
                      ★★ダミーコピーです。改札を出たら、右側にある階段を降ります。ダミーコピーです手はおっかさの。
                    </p>
                    <img
                      className='w-1/2 md:w-1/3'
                      src='https://picsum.photos/id/2/384/256.webp'
                      alt=''
                    />
                  </div>
                </li>
                <li className='text-center after:text-2xl after:text-primary-400'>
                  <div className='flex gap-3 md:gap-4'>
                    <p className='order-1 w-1/2 text-left leading-snug tracking-normal md:w-2/3'>
                      4.
                      ★★ダミーコピーです。改札を出たら、右側にある階段を降ります。ダミーコピーです手はおっかさの。
                    </p>
                    <img
                      className='w-1/2 md:w-1/3'
                      src='https://picsum.photos/id/2/384/256.webp'
                      alt=''
                    />
                  </div>
                </li>
              </ol>
            </div>
          </section>

          <hr className='line-with-three-dots' />

          <section>
            <div className='mx-auto max-w-screen-md'>
              <h2 className='text-center'>車でのアクセス</h2>
              <p className='mt-4'>
                国道173号線
                「東畦野」交差点を東に折れ(池田方面から来られる方は右折)、５分以内の場所にあります。表駐車場をご利用の方は東に折れてすぐの高架に乗らず側道へ進んでください。
              </p>
              <div className='mt-6 rounded-xl bg-tertiary-100 p-6 shadow-lg lg:p-8'>
                <p className='text-center'>
                  <ImageAboveHeading imageName='frog' />
                </p>
                <h3 className='mt-2 text-center text-tertiary-dark'>
                  駐車場について
                </h3>
                <p className='mt-3 text-center'>
                  表の駐車場には★★台、裏の駐車場には★★台が駐車していただけます。
                </p>
                <div className='mt-3 flex flex-col items-center justify-center gap-4 text-center md:flex-row md:gap-8'>
                  <figure>
                    <img src='https://picsum.photos/id/2/384/256.webp' alt='' />
                    <figcaption className='mt-2'>下の駐車場</figcaption>
                  </figure>
                  <figure>
                    <img src='https://picsum.photos/id/3/384/256.webp' alt='' />
                    <figcaption className='mt-2'>上の駐車場</figcaption>
                  </figure>
                </div>
                <div className='mt-6'>
                  <h4>カーナビで来られる方へ</h4>
                  <p className='mt-3'>
                    カーナビで頼光寺やその住所を目的地に設定すると、若干遠回りで道順もわかりづらい裏駐車場に案内されてしまうことがあります。下記の地図などで、近場の道順をご確認されておくことをおすすめします。
                  </p>
                  <p className='mt-3'>
                    Google
                    マップの場合は「賴光寺参拝者駐車場」を目的地にセットしていただくと、表の駐車場に案内されます。
                  </p>
                </div>
                <div className='mt-6'>
                  <h4>
                    足の不自由な方がおられる場合は、裏の駐車場をご利用ください
                  </h4>
                  <p className='mt-3'>
                    表の駐車場に停められた場合、境内に入るまでに急斜面の階段がございます。なので、車椅子の方、足の不自由な方は、段差なく境内に入れる裏の駐車場をご利用ください。
                  </p>
                </div>
              </div>

              <h3 className='mt-8 text-center'>近場の詳細地図</h3>
              <p className='mt-4'>
                <img
                  src='https://picsum.photos/id/2/600/400.webp'
                  alt=''
                  className='mx-auto w-fit'
                />
              </p>
              <p className='mt-4 text-center'>
                <Button>近場の詳細地図 印刷用 (PDF)</Button>
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
