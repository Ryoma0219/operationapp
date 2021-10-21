import React from 'react'
import { NextPage } from "next";

import styles from '../styles/Home.module.css'

const ReadMe: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <p className={styles.description}>
          Operation immer useReducer
          <code className={styles.code}>pages/index.js</code>
        </p>
        <p>
          Use immer with <code className={styles.code}>useReducer</code>
        </p>
        <a href="https://github.com/immerjs/use-immer" className={styles.anchor}>https://github.com/immerjs/use-immer</a>
      </main>
    </div>
  )
}

export default ReadMe