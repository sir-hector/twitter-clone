import "@/styles/global.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import LoginModal from "@/modals/LoginModal";
import RegisterModal from "@/modals/RegisterModal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Toaster />
        <LoginModal />
        <RegisterModal />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
}
