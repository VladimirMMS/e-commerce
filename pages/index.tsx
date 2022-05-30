import type { NextPage, NextPageContext } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

interface propsAttribute {
  pageTitle?: string
}

const Home:NextPage = ({pageTitle}: propsAttribute) => {
  return (
    <div className={styles.container}>
      <main>
        <h1>{pageTitle}</h1>
      </main>
    </div>
  )
}

Home.getInitialProps = () => {
  return {pageTitle: 'E-commerce'}
}

export default Home
