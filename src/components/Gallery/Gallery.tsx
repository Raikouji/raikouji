'use client'
import NextJsImage from '@/components/NextJsImage'
import PhotoAlbum from 'react-photo-album'

function Gallery({
  photos,
}: {
  photos: {
    src: string
    width: number
    height: number
    alt?: string
  }[]
}) {
  return (
    <PhotoAlbum
      layout='masonry'
      photos={photos}
      renderPhoto={NextJsImage}
      defaultContainerWidth={1200}
      sizes={{
        size: 'calc(100vw - 240px)',
        sizes: [{ viewport: '(max-width: 640px)', size: '100vw' }],
      }}
      columns={(containerWidth) => {
        if (containerWidth < 640) return 2
        if (containerWidth < 1024) return 3
        return 4
      }}
    />
  )
}

export default Gallery
