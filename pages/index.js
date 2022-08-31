import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import React from "react"
import Typewriter from 'typewriter-effect'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Agartha.One</title>
        <meta name="description" content="Welcome to Agartha" />
        <link rel="icon" href="/favicon.ico" />
        <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&display=optional"
            rel="stylesheet"
          />
      </Head>

      {/* <header className={styles.header}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/img/logo_bw.png" alt="Agartha Logo" width={72} height={16} />
          </span>
        </a>
      </header> */}

      <main className={styles.main}>
        <div className={styles.title}>
          <h1 className={styles.titleText}>
            The Future Is 
          </h1>
          <h1 className={styles.titleTextGradient}>
                <Typewriter
              options={{
                strings: ['Solarpunk', 'Regenerative','Communal','Decentralized'],
                autoStart: true,
                loop: true,
                pauseFor: 3000,
                delay: 100
              }}
            />
          </h1>
        </div>

        


        <div className={styles.buttons}>
          <div className={styles.buttondefault}>Enter</div>
          <div className={`${styles["buttondefault"]} ${styles["buttonjoin"]}`}>!Join</div>
        </div>
      </main>
    </div>
  )
}
