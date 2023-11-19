'use client'

import { cn } from '@/utils'
import Link from 'next/link'
import React from 'react'
import styles from './MainNavigation.module.css'

function MenuItem({ href, children }: { href: string; children: string }) {
  return (
    <li>
      <Link
        className='border-b-primary-400 text-foreground/80 transition-all hover:border-b hover:text-foreground lg:ease-out'
        href={href}
      >
        {children}
      </Link>
    </li>
  )
}

function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

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
          <MenuItem href='/'>Home</MenuItem>
          <MenuItem href='/template'>Template</MenuItem>
          <MenuItem href='/events'>行事案内</MenuItem>
          <MenuItem href='/cemetery'>墓地の案内</MenuItem>
          <MenuItem href='/access'>アクセス</MenuItem>
          <MenuItem href='/gallery'>ギャラリー</MenuItem>
          <MenuItem href='/contact'>お問合せ</MenuItem>
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
