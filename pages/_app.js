import { SessionProvider } from "next-auth/react"
import '../styles/globals.css'
import Head from "next/head"
import { ThirdwebWeb3Provider } from "@3rdweb/hooks"

/**
 * The chain id 4 represents Rinkeby Network
 * The injected method is a web3 connection used by metamask
 */
const supportedChainIds = [4]
const connectors = {
  injected: {},
}

export default function App({
  Component, pageProps: { session, ...pageProps }
}) {
  return (
      <>
      <ThirdwebWeb3Provider
        supportedChainIds={supportedChainIds}
        connectors={connectors}
        >
          <Head>
            <title>Black Pearl</title>
          </Head>
          <SessionProvider session={session}>
            <Component {...pageProps} />
          </SessionProvider>
        </ThirdwebWeb3Provider>
      </>
  )
}
