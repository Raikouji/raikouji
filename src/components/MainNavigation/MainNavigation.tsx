'use client'

import { cn } from '@/utils'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import React from 'react'
import styles from './MainNavigation.module.css'

function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const segment = useSelectedLayoutSegment()

  const items = [
    { path: '/', name: 'Home' },
    { path: 'about', name: '頼光寺について' },
    { path: 'events', name: '行事案内' },
    { path: 'cemetery', name: '墓地の案内' },
    { path: 'access', name: 'アクセス' },
    { path: 'gallery', name: 'ギャラリー' },
    { path: 'scarlet-seal', name: '御朱印、仏前結婚式' },
    { path: 'multi-purpose-hall', name: '紫陽閣の貸し出し' },
    { path: 'links', name: 'リンク' },
    { path: 'contact', name: 'お問合せ' },
    { path: 'privacy-policy', name: 'プライバシーポリシー' },
    { path: 'template', name: 'Template' },
  ]

  return (
    <>
      <nav
        className={cn(
          styles.wapper,
          isMenuOpen && 'hidden opacity-0',
          'absolute lg:relative', // isMenuOpen: true の状態で幅変更した時用に lg: も必要
          'z-10 lg:z-auto',
          'bg-white lg:bg-transparent',
          'p-8 lg:p-0',
          'w-48 lg:w-auto',
          'opacity-100',
          'transition-opacity ease-out',
        )}
      >
        <ul className='flex flex-col gap-4 lg:flex-row [&>li>a]:p-2'>
          {items.map((item) => {
            const isActive = item.path === segment

            return (
              <li key={item.path} className={isActive ? 'font-bold' : ''}>
                <Link
                  href={`/${item.path}`}
                  className={cn(
                    'text-foreground/80 hover:text-foreground',
                    'hover:border-b hover:border-b-primary-400',
                    'transition-all lg:ease-out',
                  )}
                >
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <div>
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen)
          }}
          className='z-30 px-2 py-1 text-3xl leading-none text-foreground/60 lg:hidden'
        >
          ≡
        </button>
      </div>
    </>
  )
}

export default MainNavigation
