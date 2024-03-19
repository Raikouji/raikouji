import { cn } from '@/utils'
import React from 'react'

function TocLink({ children }: { children: React.ReactNode }) {
  return (
    <ul
      className={cn(
        'mt-8 flex flex-wrap justify-center text-sm leading-7',
        '[&>li>a]:text-foreground/70',
        '[&>li:after]:text-foreground/30',
        '[&>li:not(:last-child):after]:mx-3 [&>li:not(:last-child):after]:content-["|"] ',
      )}
    >
      {children}
    </ul>
  )
}

export function TocLinkItem({ id, title }: { id: string; title?: string }) {
  return (
    <li key={id}>
      <a className='hover:text-primary-400' href={`#${id}`}>
        {title ? title : id}
      </a>
    </li>
  )
}

export default TocLink
