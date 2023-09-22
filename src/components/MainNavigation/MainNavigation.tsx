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
          <Link className='hover:bg-amber-200' href='#'>
            Feature
          </Link>
        </li>
        <li>
          <Link className='hover:bg-amber-200' href='#'>
            Access
          </Link>
        </li>
        <li>
          <Link className='hover:bg-amber-200' href='#'>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainNavigation
