import { getGalleryList } from '@/lib/microcms'
import Image from 'next/image'

export default async function StaticPage() {
  const { contents } = await getGalleryList({
    limit: 100,
    orders: 'system:default',
    filters: 'isDisplayOnHome[equals]true',
  })

  if (!contents || contents.length === 0) {
    return <p>No contents</p>
  }

  return (
    <ul className='columns-2 gap-2 md:columns-3 lg:columns-4'>
      {contents.map((post) => {
        return (
          <li key={post.id} className='mb-2'>
            <figure className='break-inside-avoid border border-gray-100 shadow'>
              <Image
                alt={post?.caption || ''}
                src={post.photo.url}
                width={600}
                height={
                  (600 * Number(post.photo?.height)) / Number(post.photo?.width)
                }
              />
              {post?.caption && (
                <figcaption className='p-1 text-sm'>{post?.caption}</figcaption>
              )}
              <p className='p-1 text-sm'>
                {post?.category[0]} / {post?.isDisplayOnHome}
              </p>
            </figure>
          </li>
        )
      })}
    </ul>
  )
}
