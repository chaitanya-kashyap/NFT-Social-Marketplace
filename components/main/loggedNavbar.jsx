import Link from "next/link";
import { HeartIcon } from '@heroicons/react/solid'
import { useWeb3 } from '@3rdweb/hooks'
import C from '../../assets/Metamask.png'
import Image from 'next/image'

export default function LoggedNavbar(){
    const { address } = useWeb3()
    return (
        <nav className="top-0 z-50 fixed w-full bg-black backdrop-filter backdrop-blur-md bg-opacity-0 border-b border-black">
            <div className="max-w-5xl mx-auto px-12"> 
                <div className="flex items-center justify-between h-16">
                    <span>
                        <Link href='/'><HeartIcon className="hover:text-purple-600 text-white h-6 w-6" /></Link>
                    </span>
                    <div className="flex space-x-8 text-white">
                        <span className="hover:text-purple-200"><Link href="/collections/[collectionId].js">Collection</Link></span>
                        <span className="hover:text-purple-200"><Link href="/stats">Stats</Link></span> 
                        <span className="hover:text-purple-200"><Link href="/community">Community</Link></span>
                        <span className="hover:text-purple-200"><Link href="/blog">Blog</Link></span>
                    </div>
                    <div className="flex text-white border-purple-600 border-2 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-1 text-center mt-1.5 mr-0 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-blue-800">
                    <button>
                        {address}
                    </button>
                    <div className="px-2 mt-0.5">
                        <Image src={C} height={18} width={18} />   
                    </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
