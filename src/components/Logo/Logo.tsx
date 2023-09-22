import Link from 'next/link'

import styles from './Logo.module.css'

function Logo({ tagline }: { tagline: string | undefined }) {
  return (
    <div>
      <h1 className='text-xl font-bold'>
        <Link href='/' className={styles.wrapper}>
          Logo コンポーネント
        </Link>
      </h1>
      {tagline ? <p className='mt-2 text-xs'>{tagline}</p> : null}
    </div>
  )
}

export default Logo
