import MicrocmsGallery from '@/components/MicrocmsGallery'

export default function StaticPage() {
  return (
    <div className='flex flex-col gap-6 md:flex-row'>
      <div className='w-1/2 bg-gray-200'>サイトバー</div>
      <div className='bg-yellow @container grow'>
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
          className='gap-2'
          childClassName='mb-2'
        />
      </div>
    </div>
  )
}
