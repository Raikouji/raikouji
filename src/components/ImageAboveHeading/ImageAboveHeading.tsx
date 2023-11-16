import Image from 'next/image'

function ImageAboveHeading({
  imageName,
}: {
  imageName?: 'lotus' | 'frog' | undefined
}) {
  function renderSrc(imageName: string | undefined): string {
    switch (imageName) {
      case 'lotus':
        return '/images/lotus-shape.png'
      case 'frog':
        return '/images/frog-shape.png'
      default:
        return '/images/lotus-shape.png'
    }
  }

  return (
    <Image
      src={renderSrc(imageName)}
      alt=''
      width={60}
      height={57}
      className='inline-block'
    />
  )
}

export default ImageAboveHeading
