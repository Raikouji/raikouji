import { cn } from '@/utils'
import Image from 'next/image'

export default function Information() {
  return (
    <div
      className={cn(
        'relative mx-auto max-w-screen-md p-8',
        'bg-[url("/images/bg-paper.png")] bg-cover bg-top',
        'rounded-xl shadow-lg',
      )}
    >
      <h2
        className={cn(
          'absolute -left-6 top-3',
          'border-t-4 border-gray-800 bg-primary-dark px-2 py-3 shadow-lg',
          'text-sm tracking-widest text-white ',
        )}
        style={{ writingMode: 'vertical-rl' }}
      >
        お知らせ
      </h2>
      <div className='flex flex-col gap-8 lg:flex-row'>
        <div className='lg:order-1 lg:w-2/3'>
          <h3 className='text-base'>
            <a href='#' className='text-primary-dark underline'>
              0月00日に「●●●●●●●●●●」を開催します
            </a>
          </h3>
          <p className='mt-2 text-sm'>
            ここに開花情報等を載せます。ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た。
          </p>
          <div className='mt-3 border border-primary p-4'>
            <h3 className='text-base'>あじさいの開花状況 (2023-06-17)</h3>
            <p className='mt-2 text-sm'>
              ここに開花情報等を載せます。ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た。
            </p>
          </div>
        </div>
        <div className='lg:w-1/3'>
          <Image
            src='/images/ajisai2.jpg'
            width={900}
            height={600}
            alt='あじさい'
          />
        </div>
      </div>
    </div>
  )
}
