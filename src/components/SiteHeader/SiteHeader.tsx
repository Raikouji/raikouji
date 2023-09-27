import Breadcrumb from '@/components/Breadcrumbs'
import Logo from '@/components/Logo'
import MainNavigation from '@/components/MainNavigation'

function SiteHeader() {
  return (
    <div className='header-wrapper bg-white'>
      <header className='${styles.wrapper} mx-auto my-3 flex w-full max-w-[1140px] flex-row items-center justify-between'>
        <Logo tagline='タグラインです' />
        <MainNavigation />
      </header>
      <Breadcrumb />
    </div>
  )
}

export default SiteHeader
