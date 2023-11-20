import Breadcrumbs from '@/components/Breadcrumbs'
import ImageAboveHeading from '@/components/ImageAboveHeading'
import PageHeader from '@/components/PageHeader'
import { outputMetadata } from '@/utils'
import type { Metadata } from 'next'
import Image from 'next/image'

// for metadata
const pageTitle = '頼光寺について'
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
        <PageHeader fullWidth>{pageTitle}</PageHeader>
        <Breadcrumbs className='mt-2' />

        <div className='my-12 flex flex-col gap-12'>
          <p className='text-center font-bold'>
            祥雲山 頼光寺※ は、紀元1000年頃に源氏一族によって創立されました。
            <br />
            初夏には境内にたくさんのあじさいが咲き乱れ、
            <br />
            地域の人々に「あじさい寺」として親しまれています。
          </p>

          <section>
            <div className='mx-auto max-w-screen-lg'>
              <p className='text-center'>
                <ImageAboveHeading />
              </p>
              <h2 className='mt-4 text-center font-serif'>住職 ごあいさつ</h2>
              <div className='mt-8 flex flex-col items-center gap-4 md:flex-row md:gap-8 lg:gap-12'>
                <p>
                  <img
                    src='https://picsum.photos/id/2/400/600.webp'
                    alt='頼光寺 住職の近影'
                  />
                </p>
                <div className='md:w-3/4'>
                  <p className='font-notoSans'>
                    現代の急激な都市化にともない、核家族の増加、未婚者の増加、出生率の低下等、様々な要因により、祭祀後継者の絶えるご家族が増えてゆく傾向にある今日、すでにこの問題に当面して悩んでおられる方も多いかと思います。
                  </p>
                  <p>
                    現代の急激な都市化にともない、核家族の増加、未婚者の増加、出生率の低下等、様々な要因により、祭祀後継者の絶えるご家族が増えてゆく傾向にある今日、すでにこの問題に当面して悩んでおられる方も多いかと思います。
                  </p>
                  <p className='mt-2'>
                    そういった方々のご要望にお応えして、当頼光寺では当寺境内にある頼光寺園内に永代供養共同墓を建立いたしました。祭祀後継者のない方が生前にご契約され、やがて永代供養共同墓にご遺骨を埋葬された後は、当寺が責任を持ってこれを管理すると共に、御盆、春秋両彼岸には永代に亘ってご供養を行いますので、安心して老後を送って頂けることと思います。
                  </p>
                  <p className='mt-2'>
                    静かな環境、そして交通至便なこの土地、緑豊かなやすらぎにみちたこの浄域こそ自らの寂光浄土と観じ、永遠の憩いの場所として定められるのには最もふさわしい墓所です。
                  </p>
                  <p className='mt-4 text-right'>
                    (禅)曹洞宗 祥雲山 頼光寺 <br />
                    住職 <span className='text-lg font-bold'>橋本 宏道</span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className='line-with-three-dots' />

          <section>
            <p className='text-center'>
              <ImageAboveHeading />
            </p>
            <h2 className='mt-4 text-center'>頼光寺の沿革</h2>
            <div className='aspect-h-3 aspect-w-2 relative mt-3 w-full md:aspect-h-4 md:aspect-w-16'>
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
            <div className='mx-auto max-w-screen-md'>
              <p className='mt-6'>
                祥雲山頼光寺は、一條天皇長保年間(紀元1000年頃)に、源満仲公令夫人
                法如尼公の願いにより設立されました。設立者は源頼光公の四男で、開山（初代住職）は源頼光公の四男永寿阿闍梨でした。
              </p>
              <p className='mt-3'>
                源頼光公(治安元年(1021年)七月二十四日
                寂)は神儀を行い、霊像を安置し、亡くなった後の自身の安らかな世界を祈る寺として祥雲山頼光寺を設立しました(真言律宗に所属)。
              </p>
            </div>
            <div className='mx-auto max-w-screen-lg'>
              <div className='mt-12 flex flex-col gap-10'>
                <div className='mx-auto flex flex-col items-center lg:flex-row lg:gap-8'>
                  <p className=''>
                    <img src='https://picsum.photos/id/2/384/256.webp' alt='' />
                  </p>
                  <div className='w-3/4'>
                    <p>
                      現代の急激な都市化にともない、核家族の増加、未婚者の増加、出生率の低下等、様々な要因により、祭祀後継者の絶えるご家族が増えてゆく傾向にある今日、すでにこの問題に当面して悩んでおられる方も多いかと思います。
                      そういった方々のご要望にお応えして、当頼光寺では当寺境内にある頼光寺
                      園内に永代供養共同墓を建立いたしました。
                    </p>
                  </div>
                </div>

                <div className='mx-auto flex flex-col items-center lg:flex-row lg:gap-8'>
                  <p className='order-1'>
                    <img src='https://picsum.photos/id/2/384/256.webp' alt='' />
                  </p>
                  <div className='w-3/4'>
                    <p>
                      現代の急激な都市化にともない、核家族の増加、未婚者の増加、出生率の低下等、様々な要因により、祭祀後継者の絶えるご家族が増えてゆく傾向にある今日、すでにこの問題に当面して悩んでおられる方も多いかと思います。
                      そういった方々のご要望にお応えして、当頼光寺では当寺境内にある頼光寺
                      園内に永代供養共同墓を建立いたしました。
                    </p>
                  </div>
                </div>

                <div className='mx-auto flex flex-col items-center lg:flex-row lg:gap-8'>
                  <p className=''>
                    <img src='https://picsum.photos/id/2/384/256.webp' alt='' />
                  </p>
                  <div className='w-3/4'>
                    <p>
                      現代の急激な都市化にともない、核家族の増加、未婚者の増加、出生率の低下等、様々な要因により、祭祀後継者の絶えるご家族が増えてゆく傾向にある今日、すでにこの問題に当面して悩んでおられる方も多いかと思います。
                      そういった方々のご要望にお応えして、当頼光寺では当寺境内にある頼光寺
                      園内に永代供養共同墓を建立いたしました。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
