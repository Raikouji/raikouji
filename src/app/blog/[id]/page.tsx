import parse from 'html-react-parser'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getBlogDetail, getBlogList } from '@/lib/microcms'
import { outputMetadata } from '@/utils'

import ArticleWrapper from '@/components/ArticleWrapper'
import TocLink, { TocLinkItem } from '@/components/TocLink'

// for metadata
const pageTitle = '★★★★★★★★'
const pageDescription = '★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★'

export const metadata: Metadata = outputMetadata({
  title: pageTitle,
  description: pageDescription,
})

export async function generateStaticParams() {
  const { contents } = await getBlogList()

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    }
  })

  return [...paths]
}

export default async function StaticDetailPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const post = await getBlogDetail(id)

  if (!post) {
    notFound()
  }

  return (
    <ArticleWrapper pageTitle='お知らせ'>
      <div className='mx-auto max-w-screen-md'>
        <TocLink>
          <TocLinkItem id='scarlet-seal'>御朱印</TocLinkItem>
          <TocLinkItem id='wedding'>仏前結婚式</TocLinkItem>
        </TocLink>
      </div>

      <h2>{post.title}</h2>
      {parse(post.content)}

      <p>Update: {new Date().toLocaleString()}</p>
      <p>
        <a href='../examples/microcms'>« 一覧に戻る</a>
      </p>
    </ArticleWrapper>
  )
}
