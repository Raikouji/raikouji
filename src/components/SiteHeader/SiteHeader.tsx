import Logo from '@/components/Logo'
import MainNavigation from '@/components/MainNavigation'
import { SITE_TITLE } from '@/constants'

function SiteHeader() {
  return (
    <>
      <header className='container flex max-w-screen-xl justify-between py-4 lg:items-center'>
        <Logo tagline='タグラインです' taglinePosition='bottom'>
          {SITE_TITLE}
        </Logo>
        <MainNavigation />
      </header>
    </>
  )
}

export default SiteHeader
