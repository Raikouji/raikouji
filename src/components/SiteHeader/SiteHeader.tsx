import Breadcrumb from '@/components/Breadcrumbs'
import Logo from '@/components/Logo'
import MainNavigation from '@/components/MainNavigation'
import { SITE_TITLE } from '@/constants'

function SiteHeader() {
  return (
    <>
      <header className='container flex flex-row justify-between border border-amber-600 py-8'>
        <Logo tagline='タグラインです' taglinePosition='bottom'>
          {SITE_TITLE}
        </Logo>
        <MainNavigation />
      </header>
      <Breadcrumb />
    </>
  )
}

export default SiteHeader
