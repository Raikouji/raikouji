import Breadcrumbs from '@/components/Breadcrumbs'
import ImageAboveHeading from '@/components/ImageAboveHeading'
import PageHeader from '@/components/PageHeader'
import { cn, outputMetadata } from '@/utils'
import type { Metadata } from 'next'

// for metadata
const pageTitle = '御朱印、仏前結婚式'
const pageDescription = '頼光寺の御朱印と仏前結婚式について。'

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
                <a className='hover:text-primary-400' href='#scarlet-seal'>
                  御朱印
                </a>
              </li>
              <li>
                <a className='hover:text-primary-400' href='#wedding'>
                  仏前結婚式
                </a>
              </li>
            </ul>
          </div>

          <section>
            <div className='mx-auto max-w-screen-lg'>
              <p className='text-center'>
                <ImageAboveHeading />
              </p>
              <h2 id='scarlet-seal' className='mt-4 text-center font-serif'>
                御朱印
              </h2>
              <p>御朱印の説明</p>
            </div>
          </section>

          <hr className='line-with-three-dots' />

          <section>
            <div className='mx-auto max-w-screen-lg'>
              <p className='text-center'>
                <ImageAboveHeading />
              </p>
              <h2 id='wedding' className='mt-4 text-center font-serif'>
                仏前結婚式
              </h2>
              <p>仏前結婚式の説明</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
