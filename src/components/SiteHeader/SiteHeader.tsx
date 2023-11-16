import Logo from '@/components/Logo'
import MainNavigation from '@/components/MainNavigation'
import { SITE_TITLE } from '@/constants'

function SiteHeader() {
  return (
    <>
      <header className='container flex max-w-screen-xl flex-row justify-between py-8'>
        <Logo tagline='タグラインです' taglinePosition='bottom'>
          {SITE_TITLE}
        </Logo>
        <MainNavigation />
      </header>
    </>
  )
}

export default SiteHeader
