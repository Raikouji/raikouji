'use client'

import ArticleWrapper from '@/components/ArticleWrapper'
import Card from '@/components/ui/Card'
import { cn } from '@/utils'
import React from 'react'

export default function Page() {
  return (
    <ArticleWrapper pageTitle='コンポーネント まとめ'>
      <section className='border p-4'>
        <h2>ハンバーガーメニュー</h2>
        <HamburgerMenuIcon />
      </section>
      <section className='border p-4'>
        <h2>カード (幅が狭い)</h2>
        <CardNarrow />
      </section>
    </ArticleWrapper>
  )
}

function HamburgerMenuIcon() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <p>{isOpen ? 'Open' : 'Close'}</p>
      <svg
        className='hb w-10 cursor-pointer'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 10 10'
        stroke='#eee'
        strokeWidth='.6'
        fill='rgba(0,0,0,0.2)'
        strokeLinecap='round'
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        <path d='M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7' stroke='blue'>
          <animate
            dur='0.2s'
            attributeName='d'
            values='M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7'
            fill='freeze'
            begin='start.begin'
          />
          <animate
            dur='0.2s'
            attributeName='d'
            values='M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7'
            fill='freeze'
            begin='reverse.begin'
          />
        </path>
        <rect width='10' height='10' stroke='none'>
          <animate dur='2s' id='reverse' attributeName='width' begin='click' />
        </rect>
        <rect width='10' height='10' stroke='none'>
          <animate
            dur='0.001s'
            id='start'
            attributeName='width'
            values='10;0'
            fill='freeze'
            begin='click'
          />
          <animate
            dur='0.001s'
            attributeName='width'
            values='0;10'
            fill='freeze'
            begin='reverse.begin'
          />
        </rect>
      </svg>
    </>
  )
}

function CardNarrow() {
  return (
    //幅狭い、カード
    <div className='mx-auto mt-12 max-w-screen-md'>
      <Card
        className={cn(
          'relative mx-auto p-8',
          'bg-[url("/images/bg-paper.png")] bg-cover',
          'rounded-xl shadow-lg',
        )}
      >
        <h3 className='text-center text-secondary-dark'>
          Card スタイル - 幅の狭いカード
        </h3>
        <p className='mt-4'>
          ★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
          それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて、
          みんなまでぶんを弾いとだまし(100文字)。
        </p>
        <ul className='mt-4 list-inside list-disc marker:text-tertiary'>
          <li>リスト項目１</li>
          <li>リスト項目２</li>
        </ul>
      </Card>
    </div>
  )
}
