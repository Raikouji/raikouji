import Image from 'next/image'

import Breadcrumbs from '@/components/Breadcrumbs'
import ImageAboveHeading from '@/components/ImageAboveHeading'
import PageHeader from '@/components/PageHeader'
import Card from '@/components/ui/Card'
import { Button } from '@/components/ui/button'
import { outputMetadata } from '@/utils'
import type { Metadata } from 'next'

// for metadata
const pageTitle = '墓地の案内'
const pageDescription =
  '頼光寺のお墓は、静かで緑豊かな心安らぐ空間です。永代供養共同墓、水子供養塔もあります。能勢電鉄「畦野駅」から徒歩５分とアクセスもしやすい立地です。'

export const metadata: Metadata = outputMetadata({
  title: pageTitle,
  description: pageDescription,
})

export default function Page() {
  return (
    <div className='container max-w-screen-xl'>
      <main>
        <PageHeader fullWidth>墓地の案内</PageHeader>

        <div className='my-12 flex flex-col gap-12'>
          <Breadcrumbs />

          <div className='mx-auto max-w-screen-md'>
            <p className='font-bold'>
              頼光寺のお墓は、静かで緑豊かな心安らぐ空間です。能勢電鉄「畦野駅」から徒歩５分とアクセスもしやすい立地。
              永遠の憩いの場所としてふさわしい場所です。
            </p>
          </div>

          <section>
            <div className='mx-auto flex max-w-screen-md flex-col gap-8'>
              <h2 className='text-center'>永代供養共同墓</h2>
              <div className='full-width'>
                <Image
                  src='/images/lorem.jpg'
                  alt='Lorem'
                  width={2100}
                  height={1400}
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              <p className='mt-4'>
                都市化、核家族化、未婚率の増加、出生率の低下などの原因で、祭祀の後継者がいない家庭が増え続けています。多くの方々がこの問題に直面し、悩まれていることでしょう。
              </p>
              <p className='mt-4'>
                そのような方々のご要望にお応えして、賴光寺では、境内に「永代供養共同墓」を設けました。生前にご契約いただくことで、祭祀の後継者がいない方々のために、永代供養共同墓に遺骨を埋葬された後、私たちは責任を持ってこれを管理します。
              </p>
              <p className='mt-4'>
                永代にわり、お盆や春秋の彼岸には供養を行います。安心して晩年をお過ごしいただくことができるでしょう。
              </p>
              <Card className='bg-amber-50 p-4 md:p-6 lg:p-8'>
                <h3 className='text-center'>永代供養共同墓の特徴</h3>
                <ul className='mt-4 list-inside list-disc marker:text-tertiary-300'>
                  <li>墓石はありません。</li>
                  <li>お墓の管理は頼光寺が行います。</li>
                  <li>お墓の場所は、墓地内で選ぶことができます。</li>
                </ul>
              </Card>
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
