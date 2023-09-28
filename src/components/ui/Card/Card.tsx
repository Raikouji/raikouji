import clsx from 'clsx'
import React from 'react'

import styles from './Card.module.css'

function Card({
  children,
  className,
  ...delegated
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={clsx(styles.wrapper, 'border', 'border-amber-600')}
      {...delegated}
    >
      {children}
    </div>
  )
}

export default Card
