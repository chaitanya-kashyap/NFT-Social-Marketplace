import Link from "next/link";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/solid";
import Info from '../../assets/info.svg'

export default function View() {
  return (
    <section className="px-4 py-24 mx-auto max-w-7xl">
      <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
        <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-100 md:text-6xl md:tracking-tight">
          All your{" "}
          <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600 lg:inline">
            Creating and Trading
          </span>{" "}
          in one single place.
        </h1>
        <div className="flex gap-0">
          <p className="mb-6 ml-80 pl-2 text-lg text-purple-600 md:text-xl ">
            <Link href="/about">Learn more about Black Pearl</Link>
          </p>
          <ChevronRightIcon className="text-purple-600 h-6 w-6 mt-0.5 " />
        </div>
      </div>
      <div class="flex flex-col items-center justify-center rounded-lg">
        <Image alt="hero" src={Info} />
      </div>
    </section>
  );
}
