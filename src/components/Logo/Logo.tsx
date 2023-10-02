import Link from 'next/link'
import React from 'react'

import styles from './Logo.module.css'

function Logo({
  tagline,
  taglinePosition = 'bottom',
  children,
}: {
  tagline?: string
  taglinePosition?: 'top' | 'bottom' | 'right'
  children: React.ReactNode
}) {
  let flexClass

  if (tagline) {
    flexClass = 'flex flex-col'
    taglinePosition === 'right' && (flexClass = 'flex flex-row gap-3')
  }

  return (
    <div className={flexClass}>
      {tagline && taglinePosition === 'top' && <Tagline tagline={tagline} />}
      <h1 className='text-xl font-bold'>
        <Link href='/' className={styles.wrapper}>
          {children}
        </Link>
      </h1>
      {tagline && taglinePosition !== 'top' && <Tagline tagline={tagline} />}
    </div>
  )
}

function Tagline({ tagline }: { tagline: string }) {
  return <p className='text-xs'>{tagline}</p>
}

export default Logo
