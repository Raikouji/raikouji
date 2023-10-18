'use client'
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
      columns={(containerWidth) => {
        if (containerWidth < 640) return 2
        if (containerWidth < 1024) return 3
        return 4
      }}
    />
  )
}

export default Gallery
