/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import { BookmarkIcon } from '@heroicons/react/solid'
import Navbar from '../components/navbar'



export default function Hero(){
  return (
    <>
    <Navbar />
      <section className="px-4 py-24 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
          <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-100 md:text-6xl md:tracking-tight">
            All your <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600 lg:inline">Creating and Trading</span> in one single place.
          </h1>
          <BookmarkIcon className='text-purple-600 mt-8 h-5 w-5 ml-72' />
          <p className="px-0 mb-6 text-lg text-purple-600 md:text-xl lg:px-24">
            Learn more about Black Pearl.
          </p>
          <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
            <a className="inline-flex items-center justify-center w-full mb-2 btn btn-primary btn-lg sm:w-auto sm:mb-0" href="#">
              Get Started
              <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
        <div className="w-full mx-auto mt-20 text-center md:w-10/12">
            {/* <Image src="/public/image.png" alt="Intro" layout='fill' className="w-full rounded-lg shadow-2xl" /> */}
        </div>
      </section>
      <section className="px-4 py-24 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
          <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-100 md:text-6xl md:tracking-tight">
            All your <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600 lg:inline">Creating and Trading</span> in one single place.
          </h1>
          <BookmarkIcon className='text-purple-600 mt-8 h-5 w-5 ml-72' />
          <p className="px-0 mb-6 text-lg text-purple-600 md:text-xl lg:px-24">
            Learn more about Black Pearl.
          </p>
          <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
            <a className="inline-flex items-center justify-center w-full mb-2 btn btn-primary btn-lg sm:w-auto sm:mb-0" href="#">
              Get Started
              <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
        <div className="w-full mx-auto mt-20 text-center md:w-10/12">
            {/* <Image src="/public/image.png" alt="Intro" layout='fill' className="w-full rounded-lg shadow-2xl" /> */}
        </div>
      </section>
      <section className="px-4 py-24 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
          <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-100 md:text-6xl md:tracking-tight">
            All your <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600 lg:inline">Creating and Trading</span> in one single place.
          </h1>
          <BookmarkIcon className='text-purple-600 mt-8 h-5 w-5 ml-72' />
          <p className="px-0 mb-6 text-lg text-purple-600 md:text-xl lg:px-24">
            Learn more about Black Pearl.
          </p>
          <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
            <a className="inline-flex items-center justify-center w-full mb-2 btn btn-primary btn-lg sm:w-auto sm:mb-0" href="#">
              Get Started
              <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
        <div className="w-full mx-auto mt-20 text-center md:w-10/12">
            {/* <Image src="/public/image.png" alt="Intro" layout='fill' className="w-full rounded-lg shadow-2xl" /> */}
        </div>
      </section>
    </>
  )
}