import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-notoSansJP',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ja'>
      <body className={`bg-dots ${notoSansJP.variable} font-sans`}>
        <Header />
        <div className='site-wrapper bg-white'>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
