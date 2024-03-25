import Breadcrumbs from '@/components/Breadcrumbs'
import PageHeader from '@/components/PageHeader'
import { cn } from '@/utils'
import type { ReactNode } from 'react'

function ArticleWrapper({
  pageTitle,
  className,
  children,
  ...delegated
}: {
  pageTitle: string
  className?: string
  children: ReactNode
}) {
  return (
    <div className='container max-w-screen-xl px-8 lg:px-2'>
      <main>
        <PageHeader fullWidth>{pageTitle}</PageHeader>
        <Breadcrumbs className='mt-2' />
        <div className={cn('my-12 flex flex-col gap-12', className)}>
          {children}
        </div>
      </main>
    </div>
  )
}

export default ArticleWrapper
