import '@/styles/global.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import Modal from '@/components/Modal'
import LoginModal from '@/modals/LoginModal'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <LoginModal/>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )

}