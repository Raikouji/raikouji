'use client'
import { usePathname, useSelectedLayoutSegments } from 'next/navigation'
import { ReactNode } from 'react'

export type CrumbItem = {
  label: ReactNode // e.g., Python
  path: string // e.g., /development/programming-languages/python
}

export type BreadcrumbsProps = {
  items: CrumbItem[]
}

function Breadcrumbs() {
  const segments = useSelectedLayoutSegments()
  const pathname = usePathname()

  console.table(segments)
  console.table(pathname)

  return (
    <>
      <p>Current pathname: {pathname}</p>
      <ul className='flex gap-4'>
        <li>Home</li>
        {segments.map((segment, index) => (
          <li key={index}>{segment}</li>
        ))}
      </ul>
    </>
  )
}

export default Breadcrumbs
