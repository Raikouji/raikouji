import Logo from '@/components/Logo'
import MainNavigation from '@/components/MainNavigation'

function Header() {
  return (
    <header className='${styles.wrapper} flex flex-row items-center justify-between bg-white'>
      <Logo tagline='タグラインです' />
      <MainNavigation />
    </header>
  )
}

export default Header
