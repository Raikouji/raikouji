import ArticleWrapper from '@/components/ArticleWrapper'
import Fadein from '@/components/FadeIn'
import ImageAboveHeading from '@/components/ImageAboveHeading'
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
    <ArticleWrapper pageTitle={pageTitle}>
      <p className='text-center font-bold'>
        祥雲山 頼光寺※ は、紀元1000年頃に源氏一族によって創立されました。
        <br />
        初夏には境内にたくさんのあじさいが咲き乱れ、
        <br />
        地域の人々に「あじさい寺」として親しまれています。
      </p>

      <section>
        <div className='mx-auto max-w-screen-md xl:max-w-screen-lg'>
          <p className='text-center'>
            <ImageAboveHeading />
          </p>
          <h2 className='mt-3 text-center font-serif'>住職 ごあいさつ</h2>
          <div className='mt-8 flex flex-col items-center gap-4 md:flex-row md:gap-8 lg:gap-12'>
            <p className='mx-16 md:mx-auto'>
              <Image
                src='/images/portrait.jpg'
                alt='頼光寺 住職の近影'
                width={384}
                height={256}
              />
            </p>
            <div className='mt-8 md:mt-0 md:w-3/4'>
              <p>
                頼光寺は源氏ゆかりのお寺です。源満仲公（みつなかこう）の奥さまである法如尼公（ほうにょにこう）の発願で建立されたお寺です。
              </p>
              <p className='mt-4'>
                本尊さまは法如尼公の念持仏であった南無地蔵願王大菩薩（なむじぞうがんのうだいぼさつ）様です。故に頼光寺本堂を別名”願王殿（がんのうでん）”と申します。
              </p>
              <p className='mt-4'>
                真摯にお祈りするならば、困り事や悩み事、願い事を良き方向に向けてくださると伝えられています。
              </p>
              <p className='mt-8'>
                あじさいの花をはじめ四季折々の緑豊かな境内の整備に努めております。
              </p>
              <p className='mt-4'>
                殺伐とした世の中でありますが、当山にお参りいただき、少しの時間でも心穏やかなに過ごしていただければ幸いです。
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
          <ImageAboveHeading imageName='statue' />
        </p>
        <h2 className='mt-3 text-center'>頼光寺の沿革</h2>
        <div className='full-width'>
          <div className='relative mt-4 w-full md:aspect-h-4 md:aspect-w-16'>
            <Image
              src='/images/spider.jpg'
              alt='Lorem'
              width={2100}
              height={1400}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
        <div className='mx-auto max-w-screen-md'>
          <p className='mt-8 font-bold'>
            頼光寺は、源頼光公の信仰深さから始まり、時代の変遷と共に衰退と復興を繰り返してきた歴史あるお寺です。
            紀元1000年頃の設立以来多くの試練を経て、現在は曹洞宗に所属し「北摂七福神寿老人
            あじさい寺」の名で親しまれています。
          </p>
        </div>

        <div className='mx-auto max-w-screen-md xl:max-w-screen-lg'>
          <div className='mt-12 flex flex-col gap-16'>
            <div className='mx-auto flex flex-col items-center lg:flex-row lg:gap-12'>
              <div className='lg:order-1 lg:w-7/12'>
                <h3 className='text-center text-primary'>頼光寺の設立</h3>
                <p className='mt-3 leading-loose'>
                  祥雲山賴光寺は、一條天皇長保年間(紀元1000年頃)に、源満仲公令夫人、
                  法如尼公（ほうにょにこう）の願いにより設立されました。
                  設立者は源頼光公（よりみつこう）の四男で、開山（初代住職）は源頼光公の四男永寿阿闍梨（えいじゅあじゃり）でした。
                </p>
                <p className='mt-3 leading-loose'>
                  源頼光公(治安元年(1021年)七月二十四日
                  寂)は神儀を行い、霊像を安置し、
                  亡くなった後の自身の安らかな世界を祈る寺として祥雲山賴光寺を創建しました(真言律宗に所属)。
                </p>
              </div>
              <Fadein tag='p' className='mt-8 lg:mt-0 lg:w-5/12'>
                <Image
                  src='/images/toumbs.jpg'
                  alt=''
                  width={2000}
                  height={1333}
                />
              </Fadein>
            </div>

            <div className='mx-auto flex flex-col items-center lg:flex-row lg:gap-12'>
              <div className='lg:w-7/12'>
                <h3 className='text-center text-primary'>衰退と復興</h3>
                <p className='mt-3 leading-loose'>
                  二世となる永覚阿闍梨が亡くなった後、平安時代、鎌倉時代、戦国時代の各時代に度々戦争により衰退しましたが、
                  1671年(霊元天皇寛文十一年)に禅僧万愚和尚（まんぐうおしょう）が寺を復興しました。
                  更に1746年(桜町天皇延享三年)に、現在の亀岡市にある臨済宗の法常寺の末寺となり、
                  1804年(光格天皇文化元年)に公式に認められ、尼寺（女性僧侶だけの寺）となりました。
                </p>
              </div>
              <Fadein tag='p' className='mt-8 lg:mt-0 lg:w-5/12'>
                <Image
                  src='/images/lotus.jpg'
                  alt=''
                  width={2000}
                  height={1333}
                />
              </Fadein>
            </div>

            <div className='mx-auto flex flex-col items-center lg:flex-row lg:gap-12'>
              <div className='lg:order-1 lg:w-7/12'>
                <h3 className='text-center text-primary'>継承・お寺の維持</h3>
                <p className='mt-3 leading-loose'>
                  840年(天保十一年)には、本寺の十世勅謚
                  普照恵燈禅師ふしょうえとうぜんじ）は、ここを弟子たちの坐禅の道場とし、
                  優れた者を選んで住持を継がせていきました。しかし、1875年(明治八年)には、
                  当時の状況の中で寺を維持するのが難しくなり、本寺である法常寺に合併されました。
                  それでも、旧信徒らの希望により、建物や仏像、その他の物々はそのまま引き継がれ、
                  現在も本堂内に安置されています。
                </p>
              </div>
              <Fadein tag='p' className='mt-8 lg:mt-0 lg:w-5/12'>
                <Image
                  src='/images/altar.jpg'
                  alt=''
                  width={2000}
                  height={1333}
                />
              </Fadein>
            </div>

            <div className='mx-auto flex flex-col items-center lg:flex-row lg:gap-8'>
              <div className='lg:w-7/12'>
                <h3 className='text-center text-primary'>現在</h3>
                <p className='mt-3 leading-loose'>
                  1990年(平成二年)以来、頼光寺は曹洞宗に所属し、「北摂七福神寿老人
                  あじさい寺」として親しまれています。2024年に、本堂「願王殿」を改修しました。
                </p>
              </div>
              <Fadein tag='p' className='mt-8 lg:mt-0 lg:w-5/12'>
                <Image
                  src='/images/temple-and-ajisai.jpg'
                  alt=''
                  width={2000}
                  height={1333}
                />
              </Fadein>
            </div>
          </div>
        </div>
      </section>
    </ArticleWrapper>
  )
}
