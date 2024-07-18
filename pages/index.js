import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Bienvenue!" />
        <p className="description">
         Le site est en cours de développement !</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
