/** @ref: https://react-photo-album.com/examples/nextjs */
import Image from 'next/image'
import type { RenderPhotoProps } from 'react-photo-album'

export default function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  return (
    <figure style={{ ...wrapperStyle, position: 'relative' }}>
      <Image
        fill
        src={photo}
        placeholder={'blurDataURL' in photo ? 'blur' : undefined}
        {...{ alt, title, sizes, className, onClick }}
      />
      <figcaption>{title}</figcaption>
    </figure>
  )
}
