/*
  Usage:
  <MicrocmsGallery
    cols={2} // default
    colsMd={3} // optional
    colsLg={4} // optional
    colsXL={5} // optional
    className='gap-2' // default
    childClassName='mb-2' //default
  />
 */
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
async function MicrocmsGallery({
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
            <figure className='relative break-inside-avoid shadow'>
              <Image
                alt={post?.caption || ''}
                src={post.photo.url}
                width={600}
                height={
                  (600 * Number(post.photo?.height)) / Number(post.photo?.width)
                }
                className='rounded'
              />
              {post?.caption && (
                <figcaption className='absolute bottom-1 left-1 inline-block rounded bg-black/60 px-1 text-sm leading-tight text-white'>
                  {post?.caption}
                </figcaption>
              )}
              <p className='hidden p-1 text-sm'>
                {post?.category[0]} / {post?.isDisplayOnHome}
              </p>
            </figure>
          </li>
        )
      })}
    </ul>
  )
}

export default MicrocmsGallery
