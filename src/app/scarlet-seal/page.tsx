import ArticleWrapper from '@/components/ArticleWrapper'
import Hr from '@/components/Hr'
import ImageAboveHeading from '@/components/ImageAboveHeading'
import TocLink, { TocLinkItem } from '@/components/TocLink'
import Card from '@/components/ui/Card'
import { cn, outputMetadata } from '@/utils'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

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
        <TocLink>
          <TocLinkItem id='scarlet-seal'>御朱印</TocLinkItem>
          <TocLinkItem id='wedding'>仏前結婚式</TocLinkItem>
        </TocLink>
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
              頼光寺では、静かな雰囲気の中での仏前結婚式をとり行います。
              古き良き伝統に新しい始まりを重ね合わせ、お二人の大切な儀式を執り行います。
            </p>
            <ul className='mt-4 list-inside list-disc marker:text-tertiary'>
              <li>
                小規模な式から最大50人を収容できる式まで、ご参加人数に合わせて柔軟に対応いたします。
              </li>
              <li>お食事は、実績のある仕出し業者を紹介可能です。</li>
              <li>
                衣装はご自身で手配ください。着替えのためのスペースは用意いたします。
              </li>
              <li>大切な瞬間を残すカメラマンもご自身で手配ください。</li>
            </ul>
            <div className='mx-auto mt-12 max-w-screen-md'>
              <Card
                className={cn(
                  'relative mx-auto p-8',
                  'bg-[url("/images/bg-paper.png")] bg-cover',
                  'rounded-xl shadow-lg',
                )}
              >
                <h4 className=' text-xl text-secondary-dark'>ご依頼の流れ</h4>
                <p className='mt-2'>
                  まずは電話でお問い合わせください。
                  その後、ご都合の良い日に当寺へお越しいただき、ご見学いただきながら詳細を説明いたします。
                  打ち合わせを通じて具体的な内容を決定していきます。
                </p>
                <h4 className='mt-4 text-xl text-secondary-dark'>当日の流れ</h4>
                <p className='mt-2'>
                  本堂での厳かな結婚式から始まります。
                  その後、お色直しを経て、当寺の
                  <Link
                    href='../multi-purpose-hall'
                    className='text-primary underline'
                  >
                    多目的ホール「紫陽閣」
                  </Link>
                  での披露宴へと移ります。
                  結婚式のみ当寺で行い、披露宴を別の会場で執り行うことも可能です。
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </ArticleWrapper>
  )
}
