import React from 'react'
import Join from '../Components/join'
import tachyons from 'tachyons/css/tachyons.css'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../Components/footer'
import About from '../Components/about'

import styles from '../styles/Home.module.css'
import logo from '../Components/assets/logo.svg'

export default function join() {
  return (
    <div >
      <Head>
        <title>Directorio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav className="pa2 flex justify-between bg-black bb b--white-10 ">
          <div className="flex items-center">
            <Image src={logo} alt="logo" width={40} heigth={40} />
            <p className="b roboto dn db-m db-l">FOTOGRAFOSDEPUERTORICO</p>
          </div>
          <div className="  pa2 flex justify-around ">

            <a href="join" className="ba tc pa2 mr3 pointer flex items-center ">EDITAR</a>
            <a href="" className="ba tc pa2 pinter flex items-center ">NOSOTROS</a>
          </div>
        </nav>
      </header>

      <main className="center tc mw7">
        <Join />

      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}
