// TODO: サイトタイトルをコンポーネントにする (Logo.tsx 途中まで作成)
import MainNavigation from '@/components/MainNavigation'
import Image from 'next/image'

function SiteHeader() {
  return (
    <>
      <header className='container flex max-w-screen-xl justify-between py-4 lg:items-center'>
        <div className='shrink-0'>
          {/*<p className='text-xs'>タグライン</p>*/}
          <div className='flex items-center gap-4'>
            <Image
              src='/images/lotus-shape.png'
              alt='寺紋'
              width={48}
              height={48}
            />
            <h1 className='flex items-center gap-3 font-serif'>
              <span className='tracking-widest'>曹洞宗 祥雲山</span>
              <span className='text-3xl tracking-[.25em]'>頼光寺</span>
            </h1>
          </div>
        </div>
        <MainNavigation />
      </header>
    </>
  )
}

export default SiteHeader
