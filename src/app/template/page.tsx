import Card from '@/components/Card'
import type { Metadata } from 'next'
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
      <div className='grid grid-cols-12 gap-4'>
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
