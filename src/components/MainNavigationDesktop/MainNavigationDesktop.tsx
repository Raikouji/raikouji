import { cn } from '@/utils'
import Link from 'next/link'
import styles from './MainNavigationDesktop.module.css'

function MainNavigationDesktop({
  setActiveMenu,
  isSubMenuOpen,
  setIsSubMenuOpen,
  items,
  segment,
}: {
  activeMenu: string
  setActiveMenu: (path: string) => void
  isSubMenuOpen: boolean
  setIsSubMenuOpen: (isOpen: boolean) => void
  items: {
    path: string
    name: string
    subMenu?: { path: string; name: string }[]
  }[]
  segment: string | null
}) {
  return (
    <nav className={styles.wapper}>
      <ul className='flex gap-4 [&>li>a]:p-2'>
        {items.map((item, index) => {
          const isActive = item.path === segment

          return (
            <li
              key={index}
              className={cn(`relative`, isActive ? 'font-bold' : undefined)}
              onMouseOver={() => setActiveMenu(item.path)}
              onMouseOut={() => setActiveMenu('')}
            >
              <Link
                href={`/${item.path}`}
                className={cn(
                  'text-foreground/80 hover:text-foreground',
                  'hover:border-b hover:border-b-primary-400',
                  'transition-all ease-out',
                )}
                onMouseEnter={() => setIsSubMenuOpen(true)}
                onMouseLeave={() => {
                  isSubMenuOpen && setIsSubMenuOpen(false)
                }}
              >
                {item.name}
              </Link>
              {item.subMenu && (
                <ul
                  className={cn(
                    'absolute left-0 top-full z-30',
                    'w-48 rounded-lg bg-primary-100 p-2 shadow-lg',
                    'transition-all duration-300 ease-out',
                    !isSubMenuOpen && 'hidden',
                  )}
                  onMouseLeave={() => setIsSubMenuOpen(false)}
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
                            'hover:rounded-md hover:bg-primary-200 hover:text-foreground',
                          )}
                          onClick={() => setIsSubMenuOpen(false)}
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
  )
}

export default MainNavigationDesktop
