import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'
import Image from 'next/image'
import styles from './homepage.module.css'

const photos = [
  {
    src: '/images/lorem.jpg',
    width: 900,
    height: 600,
    alt: '代替テキスト1',
  },
  {
    src: '/images/dummy-01.jpg',
    width: 900,
    height: 600,
    alt: '代替テキスト2',
  },
  { src: '/images/dummy-02.jpg', width: 600, height: 900 },
  {
    src: '/images/dummy-03.jpg',
    width: 900,
    height: 600,
    alt: '代替テキスト4',
  },
  {
    src: '/images/dummy-02.jpg',
    width: 600,
    height: 900,
    alt: '代替テキスト5',
  },
  { src: '/images/lorem.jpg', width: 900, height: 600 },
  {
    src: '/images/dummy-01.jpg',
    width: 900,
    height: 600,
    alt: '代替テキスト7',
  },
  {
    src: '/images/dummy-03.jpg',
    width: 900,
    height: 600,
    alt: '代替テキスト8',
  },
]

export default function Home() {
  return (
    <div
      className={`${styles.wrapper} container flex max-w-screen-xl flex-col gap-12 pb-12 outline outline-2 outline-blue-500`}
    >
      <div className='full-width relative'>
        <div className='aspect-h-3 aspect-w-2 relative md:aspect-h-2 md:aspect-w-16'>
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
        <div className='absolute left-auto top-1/2 mx-auto block w-screen max-w-screen-xl bg-amber-200'>
          <p>頼光寺について</p>
        </div>
      </div>
      <p className='text-center font-bold'>
        祥雲山 頼光寺※ は、紀元1000年頃に源氏一族によって創立されました。
        <br />
        初夏には境内にたくさんのあじさいが咲き乱れ、
        <br />
        地域の人々に「あじさい寺」として親しまれています。
      </p>

      <section>
        <h2 className='text-center text-2xl font-bold'>住職 ごあいさつ</h2>
        <div className='mx-auto mt-8 flex max-w-screen-md flex-col items-center gap-4 md:flex-row md:gap-8'>
          <p>
            <img
              src='https://picsum.photos/id/2/400/600.webp'
              alt='頼光寺 住職の近影'
            />
          </p>
          <div className='md:w-3/4'>
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
      </section>

      <hr className='line-with-three-dots' />

      <section>
        <h2 className='text-center text-2xl font-bold'>頼光寺の沿革</h2>
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

      <hr className='line-with-three-dots' />

      <section>
        <div className='mx-auto max-w-screen-md'>
          <div className='rounded-xl bg-fuchsia-100 p-6 shadow-lg lg:p-8'>
            <p className='text-center'>🌷</p>
            <h2 className='text-center text-2xl font-bold'>駐車場について</h2>
            <p className='mt-3 text-center'>
              表の駐車場には★★台、裏の駐車場には★★台が駐車していただけます。
            </p>
            <div className='mt-3 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8'>
              <p className=''>
                <img src='https://picsum.photos/id/2/384/256.webp' alt='' />
              </p>
              <p className=''>
                <img src='https://picsum.photos/id/3/384/256.webp' alt='' />
              </p>
            </div>
            <div className='mt-6'>
              <h3 className='text-lg font-bold'>駐車場について</h3>
              <p className='mt-3'>
                カーナビで頼光寺やその住所を目的地に設定すると、若干遠回りで道順もわかりづらい裏駐車場に案内されてしまうことがあります。下記の地図などで、近場の道順をご確認されておくことをおすすめします。
              </p>
              <p className='mt-3'>
                Google
                マップの場合は「賴光寺参拝者駐車場」を目的地にセットしていただくと、表の駐車場に案内されます。
              </p>
            </div>
            <div className='mt-6'>
              <h3 className='text-lg font-bold'>
                足の不自由な方がおられる場合は、裏の駐車場をご利用ください
              </h3>
              <p className='mt-3'>
                表の駐車場に停められた場合、境内に入るまでに急斜面の階段がございます。なので、車椅子の方、足の不自由な方は、段差なく境内に入れる裏の駐車場をご利用ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className='line-with-three-dots' />

      <section>
        <div className='mx-auto w-fit max-w-screen-md'>
          <ul className='border-t-1 list-inside list-disc border-t border-dotted border-t-blue-400 marker:text-blue-400'>
            <li className='border-b-1 border-b border-dotted border-b-blue-400 px-4 py-2'>
              <span className='mr-4 inline-block w-20 text-center'>
                １月９日
              </span>
              <span className=' tracking-widest'>新年祈祷会</span>
            </li>
            <li className='border-b-1 border-b border-dotted border-b-blue-400 px-4 py-2'>
              <span className='mr-4 inline-block w-20 text-center'>３月</span>
              <span className=' tracking-widest'>春のお彼岸会</span>
            </li>
            <li className='border-b-1 border-b border-dotted border-b-blue-400 px-4 py-2'>
              <span className='mr-4 inline-block w-20 text-center'>４月</span>
              <span className=' tracking-widest'>釈尊降誕会花まつり</span>
            </li>
            <li className='border-b-1 border-b border-dotted border-b-blue-400 px-4 py-2'>
              <span className='mr-4 inline-block w-20 text-center'>６月</span>
              <span className=' tracking-widest'>水子総供養法要</span>
            </li>
            <li className='border-b-1 border-b border-dotted border-b-blue-400 px-4 py-2'>
              <span className='mr-4 inline-block w-20 text-center'>８月</span>
              <span className=' tracking-widest'>盂蘭盆大施食会</span>
            </li>
            <li className='border-b-1 border-b border-dotted border-b-blue-400 px-4 py-2'>
              <span className='mr-4 inline-block w-20 text-center'>９月</span>
              <span className=' tracking-widest'>秋のお彼岸会</span>
            </li>
          </ul>
        </div>
      </section>

      <hr className='line-with-three-dots' />

      <Hero />
      <div className='text-center'>
        <p className='font-bold'>
          祥雲山 頼光寺※ は、紀元1000年頃に源氏一族によって創立されました。
          <br />
          初夏には境内にたくさんのあじさいが咲き乱れ、
          <br />
          地域の人々に「あじさい寺」として親しまれています。
        </p>
        <p className='mt-1'>
          <small>※ 正式には「賴光寺」と書きます</small>
        </p>
      </div>

      <div className='mx-auto max-w-screen-md bg-amber-50 p-8'>
        <h2 className='text-xl font-bold'>お知らせ</h2>
        <div className='flex flex-col gap-6 lg:flex-row'>
          <div className='lg:order-1'>
            <h3 className='text-lg font-bold'>
              <a href='#' className='text-blue-500 underline'>
                0月00日に「●●●●●●●●●●」を開催します
              </a>
            </h3>
            <p className='mt-2'>
              ここに開花情報等を載せます。ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た。
            </p>
            <hr className='my-3' />
            <h3 className='text-lg font-bold'>
              あじさいの開花状況 (2023-06-17)
            </h3>
            <p className='mt-2'>
              ここに開花情報等を載せます。ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た。
            </p>
          </div>
          <div>
            <img src='https://picsum.photos/id/2/360/240.webp' alt='' />
          </div>
        </div>
      </div>

      <section className='lg:flex lg:items-center lg:gap-8'>
        <div>
          <Image
            src='/images/lorem.jpg'
            alt='Lorem'
            width={2100}
            height={1400}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            priority
          />
        </div>
        <div className='border bg-white/50 p-8'>
          <h2 className='text-center text-lg font-bold'>頼光寺について</h2>
          <p className='mt-4'>
            祥雲山
            頼光寺は紀元1000年頃に源氏の一族によって創立、真言律宗の寺院として始まりました。
            その後数々の戦火により衰退したものの二度の再興を経て、1804年に尼寺となりました。
            尼僧たちの坐禅道場として活用されたりしましたが、1875年には維持が困難となり、法常寺に合併しました。
            その後、旧信徒たちの支援により建物や什物は引き継がれ、現在では曹洞宗に属し、
            地域の人々に「あじさい寺」として親しまれています。
          </p>
        </div>
      </section>

      <section className='py-4'>
        <div className='flex flex-wrap justify-center  gap-6'>
          <figure className='relative shadow-[3px_5px_4px_0_rgba(0,0,0,0.2)]'>
            <a href='#' className='hover:opacity-90'>
              <img src='https://picsum.photos/id/1/160/240.webp' alt='' />
              <figcaption
                className='absolute -top-2 left-1 border-t-4 border-primary bg-white px-2 py-3 tracking-widest shadow-lg'
                style={{ writingMode: 'vertical-rl' }}
              >
                年間行事
              </figcaption>
            </a>
          </figure>
          <figure className='relative shadow-[3px_5px_4px_0_rgba(0,0,0,0.2)]'>
            <a href='#' className='hover:opacity-90'>
              <img src='https://picsum.photos/id/2/160/240.webp' alt='' />
              <figcaption
                className='absolute -top-2 left-1 border-t-4 border-primary bg-white px-2 py-3 tracking-widest shadow-lg'
                style={{ writingMode: 'vertical-rl' }}
              >
                座禅会・写経会
              </figcaption>
            </a>
          </figure>
          <figure className='relative shadow-[3px_5px_4px_0_rgba(0,0,0,0.2)]'>
            <a href='#' className='hover:opacity-90'>
              <img src='https://picsum.photos/id/3/160/240.webp' alt='' />
              <figcaption
                className='absolute -top-2 left-1 border-t-4 border-primary bg-white px-2 py-3 tracking-widest shadow-lg'
                style={{ writingMode: 'vertical-rl' }}
              >
                墓地のご案内
              </figcaption>
            </a>
          </figure>
          <figure className='relative shadow-[3px_5px_4px_0_rgba(0,0,0,0.2)]'>
            <a href='#' className='hover:opacity-90'>
              <img src='https://picsum.photos/id/4/160/240.webp' alt='' />
              <figcaption
                className='absolute -top-2 left-1 border-t-4 border-primary bg-white px-2 py-3 tracking-widest shadow-lg'
                style={{ writingMode: 'vertical-rl' }}
              >
                御朱印
              </figcaption>
            </a>
          </figure>
          <figure className='relative shadow-[3px_5px_4px_0_rgba(0,0,0,0.2)]'>
            <a href='#' className='hover:opacity-90'>
              <img src='https://picsum.photos/id/5/160/240.webp' alt='' />
              <figcaption
                className='absolute -top-2 left-1 border-t-4 border-primary bg-white px-2 py-3 tracking-widest shadow-lg'
                style={{ writingMode: 'vertical-rl' }}
              >
                仏前結婚式
              </figcaption>
            </a>
          </figure>
        </div>
      </section>

      <div className='full-width bg-gray-800 px-8 py-12 text-white'>
        <section className='mx-auto flex max-w-screen-xl flex-col gap-12 lg:flex-row lg:items-center'>
          <div className='text-center lg:w-72'>
            <h2 className='text-lg font-bold'>頼光寺の風景</h2>
            <p className='mt-3'>
              境内にはゆかりある墓地が点在し、300株以上のあじさいをはじめ様々な植物が植っています。初夏のあじさいの季節が見どころで、毎年多くの方にご参拝いただいております。
            </p>
          </div>
          <div className='flex-grow'>
            <Gallery photos={photos} />
            <p className='mt-8 text-center'>
              <a href='#' className='btn btn-primary'>
                ボタン
              </a>
            </p>
          </div>
        </section>
      </div>

      <section>
        <div className='mx-auto max-w-screen-md'>
          <h2 className='text-center text-lg font-bold'>アクセス</h2>
          <p className='mt-3'>
            能勢電鉄「畦野駅」から徒歩５分。お車なら国道173号線
            「東畦野」交差点から５分以内の場所にあります。
            駐車場も完備。大阪や神戸からでもアクセスしやすい立地です。
          </p>

          <p className='mt-8 text-center'>
            <a href='#' className='btn btn-primary'>
              お車でのアクセス
            </a>
            <a href='#' className='btn btn-primary'>
              最寄駅からの道順
            </a>
          </p>
        </div>
        <div className='mx-auto mt-6 h-[400px] w-[600px] bg-gray-100'></div>
      </section>
    </div>
  )
}
