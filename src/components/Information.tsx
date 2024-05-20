import { getBasicInformation } from '@/lib/microcms'
import type { BasicInformation } from '@/types/post'
import { cn } from '@/utils'
import { format, parseISO } from 'date-fns'
import Image from 'next/image'
export default async function Information() {
  let data: BasicInformation | null = null
  let errorMassage = ''

  try {
    data = await getBasicInformation()
  } catch (error) {
    errorMassage = `Error fetching basic information: ${error}`
  }

  if (errorMassage) {
    return <p>{errorMassage}</p>
  }

  if (!data || !data.flowerPhoto || data.flowerPhoto.length === 0) {
    return <p>No data or no flower photo.</p>
  }

  if (!data.isActive) {
    return
  }

  const date = parseISO(data.publishedAt as string)

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
          <div className='-ml-6 flex items-center justify-start'>
            <div className='w-3 overflow-hidden'>
              <div className='h-4 origin-bottom-right rotate-45 transform bg-primary'></div>
            </div>
            <div className='w-fit flex-1 rounded-3xl bg-primary px-4 py-2 text-white'>
              <h3 className='text-base'>あじさいの開花状況</h3>
              <p className='text-sm text-yellow-200'>
                {format(date, 'MM月dd日 H時m分')} 更新
              </p>
              <p className='mt-1 text-sm'>{data.flowerState}</p>
            </div>
          </div>

          <div>
            <h3 className='mt-4 text-base'>
              <a href='#' className='text-primary-dark underline'>
                0月00日に「●●●●●●●●●●」を開催します
              </a>
            </h3>
            <p className='mt-2 text-sm'>
              ここに開花情報等を載せます。ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た。
            </p>
            <h3 className='mt-4 text-base'>
              <a href='#' className='text-primary-dark underline'>
                0月00日に「●●●●●●●●●●」を開催します
              </a>
            </h3>
            <p className='mt-2 text-sm'>
              ここに開花情報等を載せます。ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た。
            </p>
          </div>
        </div>
        <div className='lg:w-1/3'>
          <p className='aspect-square'>
            <Image
              src={data.flowerPhoto[0].url}
              width={data.flowerPhoto[0].width}
              height={data.flowerPhoto[0].height}
              alt='開花状況 1'
              className='h-60 w-60 rounded-lg object-cover shadow-lg'
            />
          </p>
        </div>
      </div>
    </div>
  )
}
