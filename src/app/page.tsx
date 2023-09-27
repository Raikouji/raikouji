import Hero from '@/components/Hero'
import styles from './homepage.module.css'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Hero />
      <div className='container border'>
        <h1>Hello Next!</h1>
        <a href='#' className='btn btn-primary'>
          ボタン
        </a>
      </div>
    </div>
  )
}
