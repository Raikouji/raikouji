'use client'

import MainNavigationDesktop from '@/components/MainNavigationDesktop'
import { cn } from '@/utils'
import { useMediaQuery } from '@react-hookz/web'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import React from 'react'

function MainNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [activeMenu, setActiveMenu] = React.useState('')

  const segment = useSelectedLayoutSegment()

  const items = [
    { href: '/', title: 'Home' },
    {
      href: 'about',
      title: '頼光寺について',
      subMenu: [
        { href: 'about', title: 'ごあいさつ・沿革' },
        { href: 'gallery', title: 'ギャラリー' },
        { href: 'scarlet-seal', title: '御朱印、仏前結婚式' },
        { href: 'multi-purpose-hall', title: '紫陽閣の貸し出し' },
        { href: 'template', title: 'Template' },
      ],
    },
    { href: 'events', title: '行事案内' },
    { href: 'cemetery', title: '墓地の案内' },
    { href: 'access', title: 'アクセス' },
    {
      href: 'contact',
      title: 'お問合せ',
    },
  ]

  const isMobile = useMediaQuery('only screen and (max-width : 768px)', {
    initializeWithValue: false, // ハイドレーションエラーを防ぐため
  })

  return (
    <>
      {!isMobile && <MainNavigationDesktop items={items} segment={segment} />}

      {isMobile && (
        <div className='z-30 grid place-content-center'>
          <button
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }}
            className='px-2 py-1 text-3xl leading-none text-foreground/60'
          >
            {isMobileMenuOpen ? '×' : '≡'}
          </button>
        </div>
      )}

      {isMobileMenuOpen && (
        <nav
          className={cn(
            'absolute inset-4 z-20 h-[95vh] ',
            'flex items-center justify-center p-8',
            'bg-white opacity-95 shadow-lg',
            'transition-opacity duration-300 ease-out',
          )}
        >
          <ul
            className={cn(
              'flex flex-col bg-white',
              '[&>li:not(:last-child)]:border-b' +
                ' [&>li:not(:last-child)]:border-b-gray-200',
            )}
          >
            {items.map((item, index) => {
              const isActive = item.href === segment

              return (
                <li
                  key={index}
                  className={cn(
                    isActive ? 'font-bold' : undefined,
                    'w-full text-center [&>a]:block [&>a]:p-4 [&>a]:active:bg-primary-100',
                  )}
                  onMouseOver={() => setActiveMenu(item.href)}
                  onMouseOut={() => setActiveMenu('')}
                >
                  <Link
                    href={`/${item.href}`}
                    className={cn(
                      'text-foreground/80 hover:text-foreground',
                      'hover:border-b hover:border-b-primary-400',
                      'transition-all lg:ease-out',
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                  {item.subMenu && (
                    <ul
                      className={cn(
                        'lg:absolute lg:left-0 lg:top-full lg:z-10',
                        'lg:w-48 lg:rounded-lg lg:bg-primary-100 lg:p-2 lg:shadow-lg',
                        'lg:transition-all lg:duration-300 lg:ease-out',
                        activeMenu !== item.href && 'hidden',
                      )}
                    >
                      {item.subMenu.map((subItem, index) => {
                        const isActive = subItem.href === segment

                        return (
                          <li
                            key={index}
                            className={
                              isActive
                                ? 'bg-primary-50 font-bold'
                                : 'font-normal'
                            }
                          >
                            <Link
                              href={`/${subItem.href}`}
                              className={cn(
                                'block px-3 py-2 text-foreground/80',
                                'transition-all ease-out',
                              )}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.title}
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
      )}
    </>
  )
}

export default MainNavigation
