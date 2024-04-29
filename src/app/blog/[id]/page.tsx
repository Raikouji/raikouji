import { getBlogDetail, getBlogList } from '@/lib/microcms'
import parse from 'html-react-parser'
import { notFound } from 'next/navigation'

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
    <div>
      <h1>{post.title}</h1>
      <main>{parse(post.content)}</main>
      <p>{new Date().toLocaleString()}</p>
    </div>
  )
}
