import Image from "next/image";
import Footer from "../components/landing/footer";
import Navbar from "../components/landing/navbar";
import { getAllPosts } from "./api/blogPosts";
import NFT from '../assets/nft.webp'
import Human from '../assets/human.svg'

export default function Blog({ posts }) {
    return (
        <>
            <Navbar/>
            <section class="w-full py-24 px-12 mx-auto max-w-6xl md:w-3/4 lg:w-3/4">
            <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                <div class="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-3">
                    <Image src={NFT} class="object-cover w-full h-48 mb-5 bg-center rounded" alt="NFT" />
                <p class="mb-2 mt-1 text-xs font-semibold tracking-wider text-gray-400 uppercase">Documentation</p>
                <h2 class="mb-2 mt-8 text-xl font-bold leading-snug text-gray-900">
                    <a href="#" class="text-purple-600">Learn about NFT and our marketplace, information about everything.</a>
                </h2>
                <p class="mb-4 text-sm font-normal text-gray-600">
                This application is a platform for Artists, Creators and Traders of intellectual property known as Non-Fungible Tokens (NFT’s). This platform is also made for enthusiasts for exploring more about NFT’s for future. NFT’s are new topic in the present and also the future for crypto industry. 
                </p>
                <a class="flex items-center text-gray-700" href="#">
                    <div class="avatar">
                    <Image src={Human} height={30} width={30} alt="Photo of Anonymous" />
                    </div>
                    <div class="ml-4 mb-2">
                    <p class="text-sm  font-semibold text-gray-100">Anonymous</p>
                    <p class="text-sm text-gray-600">June 1, 2022</p>
                    </div>
                </a>
                </div>
                </div>
                <div class="flex mt-8 flex-col space-y-12 divide-y divide-gray-900">
                    {
                        posts.map((post) => (
                            <>
                            <div>
                                <p class="pt-12 mb-3 text-sm font-normal text-gray-500">{post.date}</p>
                                <h2 class="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
                                    <a href="#" class="text-gray-100">{post.title}</a>
                                </h2>
                                <p class="mb-4 text-base font-normal text-gray-600">
                                    {post.excerpt}
                                </p>
                                <a href="#" class="bg-purple-100 rounded-md text-sm p-1.5 hover:bg-purple-600 hover:text-white">Continue Reading</a>
                            </div>
                            </>
                        ))
                    } 
                </div>
            </section>
            <Footer />
        </>     
    )
}

export async function getStaticProps() {
    const posts = getAllPosts()
        .slice(0,7)
        .map(post => post.meta);

    return { props: { posts } };
}