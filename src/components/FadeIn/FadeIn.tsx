'use client'

import { cn } from '@/utils'
import { motion } from 'framer-motion'
import React from 'react'

function FadeIn({
  children,
  className,
  ...delegated
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.p
      className={cn(
        'translate-y-24 text-4xl font-bold text-tertiary',
        className,
      )}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{
        amount: 'all' /* root: motionContainerRef */,
        once: true,
      }}
      animate={{ y: 0 }}
      transition={{ duration: 3 }}
      // margin={'0px -20px 0px 100px'}
      // amount={100} // 交差量
      {...delegated}
    >
      {children}
    </motion.p>
  )
}

export default FadeIn
