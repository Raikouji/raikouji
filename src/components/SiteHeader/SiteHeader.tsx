import Breadcrumb from '@/components/Breadcrumbs'
import Logo from '@/components/Logo'
import MainNavigation from '@/components/MainNavigation'

function SiteHeader() {
  return (
    <>
      <header className='container flex flex-row justify-between border border-amber-600 py-8'>
        <Logo tagline='タグラインです' taglinePosition='bottom'>
          サイトタイトルです
        </Logo>
        <MainNavigation />
      </header>
      <Breadcrumb />
    </>
  )
}

export default SiteHeader
