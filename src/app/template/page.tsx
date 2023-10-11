import Image from 'next/image'
import Link from 'next/link'

import Card from '@/components/ui/Card'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { ChevronRightIcon } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '子ページのタイトルです',
  description: '子ページのディスクリプションです',
}

export default function Page() {
  return (
    <div className='container max-w-screen-xl'>
      <h1 className='text-3xl font-bold'>template/page.tsx</h1>

      <div className='mt-12 flex flex-col gap-12'>
        <section>
          <h2 className='mb-4 text-2xl font-bold'>
            Tailwind css Grid 12columns
          </h2>
          <div className='grid grid-cols-3 gap-4 md:grid-cols-6 lg:grid-cols-12'>
            <div className='col bg-gray-200'>col</div>
            <div className='col bg-gray-200'>col</div>
            <div className='col bg-gray-200'>col</div>
            <div className='col bg-gray-200'>col</div>
            <div className='col bg-gray-200'>col</div>
            <div className='col bg-gray-200'>col</div>
            <div className='col bg-gray-200'>col</div>
            <div className='col bg-gray-200'>col</div>
            <div className='col bg-gray-200'>col</div>
            <div className='col bg-gray-200'>col</div>
            <div className='col bg-gray-200'>col</div>
            <div className='col bg-gray-200'>col</div>
            <div className='col bg-gray-200'>col</div>
            <div className='col bg-gray-200'>col</div>
          </div>
        </section>

        <section>
          <h2 className='mb-4 text-2xl font-bold'>Buttons</h2>
          <div className='flex flex-wrap gap-4'>
            <Button>Primary(default)</Button>
            <Button variant='secondary'>Secondary</Button>
            <Button variant='destructive'>Destructive</Button>
            <Button variant='outline'>Outline</Button>
            <Button variant='ghost'>Ghost</Button>
            <Button variant='link'>Link</Button>
            <Button variant='outline' size='icon'>
              <ChevronRightIcon className='h-4 w-4' />
            </Button>
            <Button>
              <ChevronRightIcon className='mr-2 h-4 w-4' /> Login with Email
            </Button>
            <Button asChild>
              <Link href='/'>As Child (Link)</Link>
            </Button>
          </div>
        </section>

        <section>
          <h2 className='mb-4 text-2xl font-bold'>Badges</h2>
          <div className='flex flex-wrap gap-4'>
            <Badge>Default</Badge>
            <Badge variant='secondary'>Secondary</Badge>
            <Badge variant='destructive'>Destructive</Badge>
            <Badge variant='outline'>outline</Badge>
          </div>
        </section>

        <section>
          <h2 className='mb-4 text-2xl font-bold'>Aspect ratio</h2>
          <div className='grid grid-cols-5 gap-8'>
            <div>
              <AspectRatio ratio={1618 / 1000}>
                <Image
                  src='/lorem.jpg'
                  alt='Lorem'
                  width={2100}
                  height={1400}
                  className='h-full w-full object-cover'
                  priority
                />
              </AspectRatio>
              Golden ratio
            </div>
            <div>
              <AspectRatio ratio={3 / 2}>
                <Image
                  src='/lorem.jpg'
                  alt='Lorem'
                  width={2100}
                  height={1400}
                  className='h-full w-full object-cover'
                  priority
                />
              </AspectRatio>
              3:2
            </div>
            <div>
              <AspectRatio ratio={16 / 9}>
                <Image
                  src='/lorem.jpg'
                  alt='Lorem'
                  width={2100}
                  height={1400}
                  className='h-full w-full object-cover'
                  priority
                />
              </AspectRatio>
              16:9
            </div>
            <div>
              <AspectRatio ratio={1}>
                <Image
                  src='/lorem.jpg'
                  alt='Lorem'
                  width={2100}
                  height={1400}
                  className='h-full w-full object-cover'
                  priority
                />
              </AspectRatio>
              Square
            </div>
            <div>
              <AspectRatio ratio={9 / 16}>
                <Image
                  src='/lorem.jpg'
                  alt='Lorem'
                  width={2100}
                  height={1400}
                  className='h-full w-full object-cover'
                  priority
                />
              </AspectRatio>
              9:16
            </div>
          </div>
        </section>

        <section>
          <h2 className='mb-4 text-2xl font-bold'>Screens</h2>
          <div className='container max-w-screen-sm border'>
            <p>
              max-w-screen-sm /
              ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
              それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて
              みんなまでぶんを弾いとだまし(100文字)。
            </p>
          </div>
          <div className='container max-w-screen-md border'>
            <p>
              max-w-screen-md /
              ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
              それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて
              みんなまでぶんを弾いとだまし(100文字)。
            </p>
          </div>
          <div className='container max-w-screen-lg border'>
            <p>
              max-w-screen-lg /
              ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
              それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて
              みんなまでぶんを弾いとだまし(100文字)。
            </p>
          </div>
          <div className='container max-w-screen-xl border'>
            <p>
              max-w-screen-xl /
              ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
              それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて
              みんなまでぶんを弾いとだまし(100文字)。
            </p>
          </div>
          <div className='container max-w-screen-2xl border'>
            <p>
              max-w-screen-2xl /
              ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
              それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて
              みんなまでぶんを弾いとだまし(100文字)。
            </p>
          </div>
          <div className='container w-full border'>
            <p>
              w-full /
              ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
              それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて
              みんなまでぶんを弾いとだまし(100文字)。
            </p>
          </div>
          <div className='container w-screen border'>
            <p>
              w-screen /
              ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
              それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて
              みんなまでぶんを弾いとだまし(100文字)。
            </p>
          </div>
        </section>

        <section>
          <h2 className='mb-4 text-2xl font-bold'>Card</h2>
          <Card className='shadow'>
            <p>
              ★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
              それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて
              みんなまでぶんを弾いとだまし(100文字)。
            </p>
            <p>
              ★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
              それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて
              みんなまでぶんを弾いとだまし(100文字)。
            </p>
          </Card>
          <Card className='mx-auto max-w-screen-sm shadow'>
            <p>
              ★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
              それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて
              みんなまでぶんを弾いとだまし(100文字)。
            </p>
            <p>
              ★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
              それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて
              みんなまでぶんを弾いとだまし(100文字)。
            </p>
          </Card>
        </section>
      </div>
    </div>
  )
}
