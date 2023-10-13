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

        <section className='full-width bg-amber-200 py-8'>
          <h2 className='mb-4 text-2xl font-bold'>Full Width</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut 500 labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat.
          </p>
          <div className='container mt-8 max-w-screen-lg'>
            <h3 className='font-bold'>指定幅で</h3>
            <p className='mt-3'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut 500 labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>

        <section className='full-width-md bg-amber-200 py-8'>
          <h2 className='mb-4 text-2xl font-bold'>Full Width (md)</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut 500 labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat.
          </p>
          <div className='container mt-8 max-w-screen-lg'>
            <h3 className='font-bold'>指定幅で</h3>
            <p className='mt-3'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut 500 labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>

        <section className='full-width-sm bg-amber-200 py-8'>
          <h2 className='mb-4 text-2xl font-bold'>Full Width (sm)</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut 500 labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat.
          </p>
          <div className='container mt-8 max-w-screen-lg'>
            <h3 className='font-bold'>指定幅で</h3>
            <p className='mt-3'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut 500 labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
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
          <div className='grid grid-cols-7 gap-8'>
            <div>
              <AspectRatio ratio={3303 / 1000}>
                <Image
                  src='/lorem.jpg'
                  alt='Lorem'
                  width={2100}
                  height={1400}
                  className='h-full w-full object-cover'
                  priority
                />
              </AspectRatio>
              Bronze ratio (3.303:1)
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
              Golden ratio (1.618/1)
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
              <AspectRatio ratio={1414 / 1000}>
                <Image
                  src='/lorem.jpg'
                  alt='Lorem'
                  width={2100}
                  height={1400}
                  className='h-full w-full object-cover'
                  priority
                />
              </AspectRatio>
              Silver ratio (1.414:1)
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
              <AspectRatio ratio={2 / 3}>
                <Image
                  src='/lorem.jpg'
                  alt='Lorem'
                  width={2100}
                  height={1400}
                  className='h-full w-full object-cover'
                  priority
                />
              </AspectRatio>
              2:3
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

        <section>
          <h2 className='mb-4 text-2xl font-bold'>Layout</h2>
          <div className='flex gap-8'>
            <div className='w-1/4'>
              <AspectRatio ratio={2 / 3}>
                <Image
                  src='/lorem.jpg'
                  alt='Lorem'
                  width={2100}
                  height={1400}
                  className='h-full w-full object-cover'
                  priority
                />
              </AspectRatio>
            </div>
            <div className='w-3/4'>
              <h2 className='text-2xl font-bold'>タイトル</h2>
              <p className='mt-4'>
                ★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて、みんなまでぶんを弾いとだまし(100文字)。
              </p>
            </div>
          </div>
          <Card className='mx-auto my-8 max-w-screen-md p-12'>
            <div className='flex gap-8'>
              <div className='w-1/4'>
                <AspectRatio ratio={2 / 3}>
                  <Image
                    src='/lorem.jpg'
                    alt='Lorem'
                    width={2100}
                    height={1400}
                    className='h-full w-full object-cover'
                    priority
                  />
                </AspectRatio>
              </div>
              <div className='w-3/4'>
                <h2 className='text-2xl font-bold'>タイトル</h2>
                <p className='mt-4'>
                  ★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて、みんなまでぶんを弾いとだまし(100文字)。
                </p>
              </div>
            </div>
          </Card>
          <Card className='mx-auto my-8 max-w-screen-sm'>
            <div className='flex gap-8'>
              <div className='w-1/4'>
                <AspectRatio ratio={2 / 3}>
                  <Image
                    src='/lorem.jpg'
                    alt='Lorem'
                    width={2100}
                    height={1400}
                    className='h-full w-full object-cover'
                    priority
                  />
                </AspectRatio>
              </div>
              <div className='w-3/4 py-8 pr-8'>
                <h2 className='text-2xl font-bold'>タイトル</h2>
                <p className='mt-4'>
                  ★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて、みんなまでぶんを弾いとだまし(100文字)。
                </p>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}
