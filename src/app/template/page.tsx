import Card from '@/components/Card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '子ページのタイトルです',
  description: '子ページのディスクリプションです',
}

export default function Page() {
  return (
    <>
      <h1>Hello, Next! template/page.tsx</h1>
      <Card />
    </>
  )
}
