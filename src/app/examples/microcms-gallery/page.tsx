import MicrocmsGallery from '@/components/MicrocmsGallery'

export default function StaticPage() {
  return (
    <MicrocmsGallery
      queries={{
        limit: 100,
        orders: 'system:default',
        filters: 'isDisplayOnHome[equals]true',
      }}
      colsMd={3}
      colsLg={4}
      colsXL={5}
    />
  )
}
