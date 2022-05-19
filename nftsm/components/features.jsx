import Image from "next/image";

export default function Features() {
    return (

<div className="bg-black mx-44 dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center">
    <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-gray-100 dark:text-white sm:text-4xl">
            <span className="block">
                Mother hearth host your travel
            </span>
        </h2>
        <p className="text-md mt-4 text-gray-400">
            The state of Utah in the united states is home to lots of beautiful National parks, Bryce national canion park ranks as three of the most magnificient &amp; awe inspiring.
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
                <button type="button" className="py-2 px-4  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Get started
                </button>
            </div>
        </div>
    </div>
    <div className="flex items-center gap-8 p-8 lg:p-24">
        {/* <Image src="/images/landscape/3.jpg" className="rounded-lg w-1/2" alt="Tree"/> */}
        <div>
            {/* <Image src="/images/landscape/2.jpg" className="rounded-lg mb-8" alt="Tree"/> */}
            {/* <Image src="/images/landscape/4.jpg" className="rounded-lg" alt="Tree"/> */}
        </div>
    </div>
</div>

    )
}