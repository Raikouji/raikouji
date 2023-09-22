import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.wrapper}>
      <h1 className='text-2xl font-bold'>ヘッダー</h1>
      <p>ヘッダーです</p>
    </header>
  )
}

export default Header
