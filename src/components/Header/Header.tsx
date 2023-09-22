import Logo from '@/components/Logo'
import MainNavigation from '@/components/MainNavigation'

function Header() {
  return (
    <div className='header-wrapper bg-white'>
      <header className='${styles.wrapper} mx-auto my-3 flex w-full max-w-[1140px] flex-row items-center justify-between'>
        <Logo tagline='タグラインです' />
        <MainNavigation />
      </header>
    </div>
  )
}

export default Header
