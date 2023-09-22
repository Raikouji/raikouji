import Card from '@/components/Card'
import type { Metadata } from 'next'
import styles from './template.module.css'

export const metadata: Metadata = {
  title: '子ページのタイトルです',
  description: '子ページのディスクリプションです',
}

export default function Page() {
  return (
    <div className={styles.wrapper}>
      <h1>Hello, Next! template/page.tsx</h1>
      <Card />
    </div>
  )
}
