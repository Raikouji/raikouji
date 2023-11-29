import { cn } from '@/utils'
import Image from 'next/image'
import React, { createElement } from 'react'

function PageHeader({
  fullWidth = false,
  headerLevel = 1,
  className,
  image = '/images/lorem.jpg',
  children,
  ...delegated
}: {
  fullWidth?: boolean
  headerLevel?: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
  image?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(fullWidth && 'full-width', 'relative', className)}
      {...delegated}
    >
      <div className='aspect-h-3 aspect-w-2 relative md:aspect-h-2 md:aspect-w-16'>
        <Image
          src={image}
          alt=''
          width={2100}
          height={1400}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <div className='absolute inset-0'>
        <div className='container mx-auto flex h-full max-w-screen-xl items-center'>
          {createElement(
            `h${headerLevel}`,
            {
              className:
                'bg-black/30 px-3 py-1 text-xl tracking-widest text-white',
            },
            children,
          )}
        </div>
      </div>
    </div>
  )
}

export default PageHeader
