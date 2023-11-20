'use client'
import { cn } from '@/utils'
import { usePathname, useSelectedLayoutSegments } from 'next/navigation'
import styles from './Breadcrumbs.module.css'

// export type CrumbItem = {
//   label: ReactNode // e.g., Python
//   path: string // e.g., /development/programming-languages/python
// }

// export type BreadcrumbsProps = {
//   items: CrumbItem[]
// }

function Breadcrumbs({ className, ...delegated }: { className?: string }) {
  const segments = useSelectedLayoutSegments()
  const pathname = usePathname()

  console.table(segments)
  console.table(pathname)

  return (
    <div className={cn(styles.wrapper, className)} {...delegated}>
      <p>
        Current pathname: {pathname}, segments: {segments.length}
      </p>
      <ol className='flex list-none'>
        <li>
          <a
            href='/'
            className='text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600'
          >
            Home
          </a>
        </li>
        {segments.map((segment) => (
          <li
            key={crypto.randomUUID()}
            className='before:mx-2 before:text-neutral-500 before:content-["/"] before:dark:text-neutral-400'
          >
            <a
              href='#'
              className='text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600'
            >
              {segment}
            </a>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Breadcrumbs
