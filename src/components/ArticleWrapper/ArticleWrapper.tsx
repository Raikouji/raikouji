import Breadcrumbs from '@/components/Breadcrumbs'
import PageHeader from '@/components/PageHeader'
import type { ReactNode } from 'react'

function ArticleWrapper({
  pageTitle,
  children,
}: {
  pageTitle: string
  children: ReactNode
}) {
  return (
    <div className='container max-w-screen-xl px-8 lg:px-2'>
      <main>
        <PageHeader fullWidth>{pageTitle}</PageHeader>
        <Breadcrumbs className='mt-2' />
        <div className='my-12 flex flex-col gap-12'>{children}</div>
      </main>
    </div>
  )
}

export default ArticleWrapper
