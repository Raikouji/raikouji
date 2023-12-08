'use client'

import { cn } from '@/utils'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import React from 'react'
import styles from './MainNavigation.module.css'

function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [activeMenu, setActiveMenu] = React.useState('')

  const segment = useSelectedLayoutSegment()

  const items = [
    { path: '/', name: 'Home' },
    {
      path: 'about',
      name: '頼光寺について',
      subMenu: [
        { path: 'gallery', name: 'ギャラリー' },
        { path: 'scarlet-seal', name: '御朱印、仏前結婚式' },
        { path: 'multi-purpose-hall', name: '紫陽閣の貸し出し' },
        { path: 'template', name: 'Template' },
      ],
    },
    { path: 'events', name: '行事案内' },
    { path: 'cemetery', name: '墓地の案内' },
    { path: 'access', name: 'アクセス' },
    {
      path: 'contact',
      name: 'お問合せ',
      subMenu: [{ path: 'privacy-policy', name: 'プライバシーポリシー' }],
    },
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
          {items.map((item, index) => {
            const isActive = item.path === segment

            return (
              <li
                key={index}
                className={cn(
                  'lg:relative',
                  isActive ? 'font-bold' : undefined,
                )}
                onMouseOver={() => setActiveMenu(item.path)}
                onMouseOut={() => setActiveMenu('')}
              >
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
                {item.subMenu && (
                  <ul
                    className={cn(
                      'lg:absolute lg:left-0 lg:top-full lg:z-10',
                      'lg:w-48 lg:rounded-lg lg:bg-primary-100 lg:p-2 lg:shadow-lg',
                      'lg:transition-all lg:duration-300 lg:ease-out',
                      activeMenu !== item.path && 'hidden',
                    )}
                  >
                    {item.subMenu.map((subItem, index) => {
                      const isActive = subItem.path === segment

                      return (
                        <li
                          key={index}
                          className={isActive ? 'font-bold' : 'font-normal'}
                        >
                          <Link
                            href={`/${subItem.path}`}
                            className={cn(
                              'block px-3 py-2 text-foreground/80',
                              'transition-all ease-out',
                              'lg:hover:rounded-md lg:hover:bg-primary-200 lg:hover:text-foreground',
                            )}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </nav>

      <div className='lg:hidden'>
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen)
          }}
          className='z-30 px-2 py-1 text-3xl leading-none text-foreground/60'
        >
          ≡
        </button>
      </div>
    </>
  )
}

export default MainNavigation
