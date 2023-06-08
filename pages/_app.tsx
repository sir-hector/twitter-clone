import '@/styles/global.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import Modal from '@/components/Modal'
import LoginModal from '@/modals/LoginModal'
import RegisterModal from '@/modals/RegisterModal'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <LoginModal/>
    <RegisterModal/>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )

}