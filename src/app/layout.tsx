import type { Metadata } from 'next'
import React from 'react'

import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'

import GetScrollBarWidth from '@/components/GetScrollBarWidth'
import { SITE_TITLE } from '@/constants'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_TITLE}`,
    default: SITE_TITLE,
  },
  description: 'トップページのディスクリプションです',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <GetScrollBarWidth>
      <html lang='ja' className='font-sans'>
        <body>
          <SiteHeader />
          <div className='site-wrapper'>{children}</div>
          <SiteFooter />
        </body>
      </html>
    </GetScrollBarWidth>
  )
}
