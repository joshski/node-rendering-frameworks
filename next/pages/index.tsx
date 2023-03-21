import Head from 'next/head'
import Image from 'next/image'

import styles from '@/pages/index.module.css'

export default function Home() {
  return (
    <h1 className={styles.title}>
      Hello Next.js!
    </h1>
  )
}
