import { getGalleryList } from '@/lib/microcms'
import { cn } from '@/utils'
import Image from 'next/image'

type Props = {
  cols?: number
  colsMd?: number
  colsLg?: number
  colsXL?: number
  className?: string
  childClassName?: string
}

export default async function StaticPage() {
  return (
    <div>
      <Gallery colsMd={3} colsLg={4} colsXL={5} />
    </div>
  )
}

async function Gallery({
  cols = 2,
  colsMd,
  colsLg,
  colsXL,
  className = 'gap-2',
  childClassName = 'mb-2',
  ...delegated
}: Props) {
  const { contents } = await getGalleryList({
    limit: 100,
    orders: 'system:default',
    filters: 'isDisplayOnHome[equals]true',
  })

  if (!contents || contents.length === 0) {
    return <p>No contents</p>
  }

  return (
    <ul
      className={cn(
        `columns-${cols}`,
        colsMd && `md:columns-${colsMd}`,
        colsLg && `lg:columns-${colsLg}`,
        colsLg && `lg:columns-${colsLg}`,
        colsXL && `xl:columns-${colsXL}`,
        className,
      )}
    >
      {contents.map((post) => {
        return (
          <li key={post.id} className={childClassName}>
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
