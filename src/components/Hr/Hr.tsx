import styles from './Hr.module.css'

function Hr({ type }: { type?: 'square' }) {
  return <hr className={type && styles[type]} />
}

export default Hr
