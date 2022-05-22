import Link from "next/link";
import { HeartIcon } from '@heroicons/react/solid'
import { useSession, signIn, signOut } from "next-auth/react"


export default function Navbar(){
    const { data: session } = useSession()
    return (
        <nav className="top-0 z-50 fixed w-full bg-black backdrop-filter backdrop-blur-md bg-opacity-0 border-b border-black">
            <div className="max-w-5xl mx-auto px-12"> 
                <div className="flex items-center justify-between h-16">
                    <span>
                        <Link href='/'><HeartIcon className="hover:text-purple-600 text-white h-6 w-6" /></Link>
                    </span>
                    <div className="flex space-x-8 text-white">
                        <span className="hover:text-purple-600"><Link href="/about">About</Link></span>
                        <span className="hover:text-purple-600"><Link href="/community">Community</Link></span>
                        <span className="hover:text-purple-600"><Link href="/blog">Blog</Link></span>
                    </div>
                    <div className="text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-1 text-center mt-3 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-blue-800">
                    <button onClick={() => signIn()}>Get Started</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}