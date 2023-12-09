import Image from 'next/image'

function ImageAboveHeading({
  imageName,
}: {
  imageName?:
    | 'lotus'
    | 'frog'
    | 'statue'
    | 'asagao'
    | 'bell'
    | 'chime'
    | 'momiji'
    | 'priest'
    | 'priest2'
    | 'uguisu'
    | 'ume'
    | undefined
}) {
  function renderSrc(imageName: string | undefined): string {
    switch (imageName) {
      case 'lotus':
        return '/images/shape_lotus.png'
      case 'frog':
        return '/images/shape-frog.png'
      case 'statue':
        return '/images/shape-statue.png'
      case 'asagao':
        return '/images/shape-asagao.png'
      case 'bell':
        return '/images/shape-bell.png'
      case 'chime':
        return '/images/shape-chime.png'
      case 'momiji':
        return '/images/shape-momiji.png'
      case 'priest':
        return '/images/shape-priest.png'
      case 'priest2':
        return '/images/shape-priest2.png'
      case 'uguisu':
        return '/images/shape-uguisu.png'
      case 'ume':
        return '/images/shape-ume.png'
      default:
        return '/images/shape-lotus.png'
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
