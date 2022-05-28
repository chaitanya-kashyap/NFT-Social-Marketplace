import Navbar from '../components/landing/navbar'
import Footer from '../components/landing/footer'
import Display from '../components/landing/display'
import { useWeb3 } from '@3rdweb/hooks'
import View from '../components/landing/view';
import { useEffect } from 'react';
import { client } from '../lib/sanityClient';

export default function Hero(){
  const { address, connectWallet } = useWeb3();

  useEffect(() => {
    if (!address) return
    ;(async () => {
        const userDoc = {
          _type: 'users',
          _id: address,
          userName: 'Unnamed',
          walletAddress: address,
        }

        const result = await client.createIfNotExists(userDoc)
    })()
  }, [address])

  return (
    <>
    {address ? (
    <>
      <Navbar />
      <View />
      <Display />
      <Footer />
    </>
    ) : (
      <div className="text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-1 text-center mt-3 mr-0 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-blue-800">
        <button
         onClick={() => connectWallet('injected')}>
           Connect Wallet
        </button>
      </div>
    )};
    </>
  )
}