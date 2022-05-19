import Link from "next/link";
import { HeartIcon } from '@heroicons/react/solid'


export default function Navbar(){
    return (
        <nav className="sticky top-0 z-10 bg-black backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-black">
            <div className="max-w-5xl mx-auto px-12"> 
                <div className="flex items-center justify-between h-16">
                    <span>
                        <HeartIcon className="text-white h-6 w-6" />
                    </span>
                    <div className="flex space-x-7 text-gray-100">
                        <Link href="/">Home</Link>
                        <Link href="/">About</Link>
                        <Link href="/">Community</Link>
                        <Link href="/">Learn</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}