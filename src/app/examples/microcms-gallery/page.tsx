import MicrocmsGallery from '@/components/MicrocmsGallery'

export default function StaticPage() {
  return (
    <MicrocmsGallery
      queries={{
        limit: 100,
        orders: 'system:default',
        filters: 'isDisplayOnHome[equals]true',
      }}
      cols={2}
      colsMd={3}
      colsLg={4}
      colsXL={5}
      imageWidth={600}
      className='gap-2 @container'
      childClassName='mb-2'
    />
  )
}
