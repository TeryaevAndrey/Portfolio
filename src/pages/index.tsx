import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Banner from '@/components/Main/Banner/Banner'
import About from '@/components/Main/About/About'
import Projects from '@/components/Main/Projects/Projects'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Teryaev Andrey</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <About />
      <Projects />
    </>
  )
}
