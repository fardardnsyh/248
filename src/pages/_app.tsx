import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import '@/styles/styles.css'

export default function RootLayout({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  )
}
