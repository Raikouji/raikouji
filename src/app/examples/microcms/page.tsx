import { getBlogList } from '@/lib/microcms'
import Link from 'next/link'

export default async function StaticPage() {
  const { contents } = await getBlogList()
  const time = new Date().toLocaleString()

  if (!contents || contents.length === 0) {
    return <p>No contents</p>
  }

  return (
    <div>
      <p>Update: {time}</p>
      <ul>
        {contents.map((post) => {
          return (
            <li key={post.id}>
              <Link
                href={`/blog/${post.id}`}
                className='text-blue-600 underline hover:text-blue-400'
              >
                {post.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
