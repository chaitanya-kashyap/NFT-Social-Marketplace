import { SessionProvider } from "next-auth/react"
import '../styles/globals.css'
import Head from "next/head"

export default function App({
  Component, pageProps: { session, ...pageProps }
}) {
  return (
      <>
      <Head>
        <title>Black Pearl</title>
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
      </>
  )
}
