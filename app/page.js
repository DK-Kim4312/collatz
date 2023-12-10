import CollatzSequence from '@/components/Collatz_Sequence'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
        <CollatzSequence />
    </main>
  )
}
