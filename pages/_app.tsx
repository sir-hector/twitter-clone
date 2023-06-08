import '@/styles/global.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import Modal from '@/components/Modal'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Modal isOpen={true} title='test modal' actionLabel='submit'/>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )

}