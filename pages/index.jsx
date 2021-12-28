import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Header } from '../components'

const Home = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <Header />
    </div>
    <div className={styles.socialMedia}></div>
    <div className={styles.logo}>
      <img className={styles.company} src="/imgs/logo.svg" alt="logo" />
    </div>
    <div className={styles.slideshow}></div>
    <div className={styles.accordion}></div>
    <div className={styles.nothing}></div>
    <div className={styles.next}></div>
    <div className={styles.prev}></div>
    <div className={styles.noice}></div>
    <img src="/imgs/slider3-home1.jpeg" alt="slider home" className={styles.imageHome}/>
  </div>
)

export default Home
