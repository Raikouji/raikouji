import Logo from '@/components/Logo'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.wrapper}>
      <Logo tagline='タグラインです' />
      <p>ヘッダーです</p>
    </header>
  )
}

export default Header
