import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export default function Example() {
  return (
    <div className="w-full px-4 my-16 pt-16">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-black border-2 border-purple-800 p-2">
        <div className='text-purple-200 ml-4 mt-2 text-lg font-medium leading-6'>
          Wallet Disconnected!
        </div>
        <div className='text-gray-500 text-sm ml-4 my-2'>
          Please connect your wallet to display collections. 
        </div>
      </div>
    </div>
  )
}
