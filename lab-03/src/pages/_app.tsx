import DialogModal from "@/components/dialog-modal/DialogModal";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { LabContextProvider } from "@/context/LabContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <LabContextProvider>
        <Head>
          <title>Lab 03 - Contex API!</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <DialogModal />
      </LabContextProvider>
    </>
  );
}
