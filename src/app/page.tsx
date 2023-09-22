import styles from './homepage.module.css'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <h1>Hello Next!</h1>
      <a href='#' className='btn btn-primary'>
        ボタン
      </a>
    </div>
  )
}
