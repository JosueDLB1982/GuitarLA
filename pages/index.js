import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <>
      <Layout
        page='Inicio'
      >
        <h1>Desde index.js</h1>
      </Layout>

      <Link href="/nosotros">Ir a Nosotros</Link>
    </>
  )
}
