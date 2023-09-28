import Card from '@/components/Card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronRightIcon } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './template.module.css'

export const metadata: Metadata = {
  title: '子ページのタイトルです',
  description: '子ページのディスクリプションです',
}

export default function Page() {
  return (
    <div className={styles.wrapper}>
      <h1>Hello, Next! template/page.tsx</h1>
      {/*Tailwind css Grid 12columns*/}
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

      <section className='buttons'>
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
      </section>

      <section className='badges'>
        <Badge>Default</Badge>
        <Badge variant='outline'>outline</Badge>
        <Badge variant='secondary'>Secondary</Badge>
        <Badge variant='destructive'>Destructive</Badge>
      </section>

      <Card>
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
    </div>
  )
}
