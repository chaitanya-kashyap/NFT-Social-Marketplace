/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import { ChevronRightIcon } from '@heroicons/react/solid'
import Navbar from '../components/landing/navbar'
import Link from 'next/link'
import Footer from '../components/landing/footer'
import Display from '../components/landing/display'
import { useWeb3 } from '@3rdweb/hooks'

export default function Hero(){
  const { address, connectWallet } = useWeb3();
  return (
    <>
    {address ? (
    <>
    <div>
      <Navbar />
      <section className="px-4 py-24 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
          <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-100 md:text-6xl md:tracking-tight">
            All your <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600 lg:inline">Creating and Trading</span> in one single place.
          </h1>
          <div className='flex gap-0'>
            <p className="mb-6 ml-80 pl-2 text-lg text-purple-600 md:text-xl ">
              <Link href='/about'>
                Learn more about Black Pearl
              </Link>
            </p>
            <ChevronRightIcon className='text-purple-600 h-6 w-6 mt-0.5 ' />
          </div>
        </div>
      </section>
    </div>
    <Display />
    <Footer />
    </>
    ): (
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