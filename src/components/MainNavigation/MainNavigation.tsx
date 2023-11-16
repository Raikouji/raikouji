import Link from 'next/link'
import styles from './MainNavigation.module.css'

function MainNavigation() {
  return (
    <nav className={styles.wapper}>
      <ul className='flex gap-4 [&>li>a]:p-2'>
        <li>
          <Link className='hover:bg-amber-200' href='/'>
            Home
          </Link>
        </li>
        <li>
          <Link className='hover:bg-amber-200' href='/template'>
            Template
          </Link>
        </li>
        <li>
          <Link className='hover:bg-amber-200' href='/events'>
            行事案内
          </Link>
        </li>
        <li>
          <Link className='hover:bg-amber-200' href='/cemetery'>
            墓地の案内
          </Link>
        </li>
        <li>
          <Link className='hover:bg-amber-200' href='/access'>
            アクセス
          </Link>
        </li>
        <li>
          <Link className='hover:bg-amber-200' href='/gallery'>
            ギャラリー
          </Link>
        </li>
        <li>
          <Link className='hover:bg-amber-200' href='/contact'>
            お問合せ
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainNavigation
