import Navbar from '../components/landing/navbar'
import Footer from '../components/landing/footer'
import Display from '../components/landing/display'
import { useWeb3 } from '@3rdweb/hooks'
import View from '../components/landing/view';
import { useEffect } from 'react';
import { client } from '../lib/sanityClient';
import LoggedNavbar from '../components/main/loggedNavbar';

export default function Hero(){
  const { address } = useWeb3();

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
      <LoggedNavbar />
      <View />
      <Display />
      <Footer />
    </>
    ) : (
      <>
        <Navbar />
        <View />
        <Display />
        <Footer />
      </>
    )};
    </>
  )
}
