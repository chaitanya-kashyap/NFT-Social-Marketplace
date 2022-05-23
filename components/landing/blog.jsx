export default function BlogUI () {
    return (
        <section class="w-full py-24 mx-auto max-w-4xl md:w-3/4 lg:w-3/4">
            <div class="mb-12 text-left md:text-center">
                {/*<h2 class="mb-2 text-3xl font-bold leading-tight text-purple-600">NFT Blog</h2>*/}
                <p class="text-lg text-purple-600">Learn about NFT from the blog where information is provided by external sources.
                </p>
            </div>
            <div class="flex flex-col space-y-12 divide-y divide-gray-200">
                <div>
                    <p class="pt-12 mb-3 text-sm font-normal text-gray-500">2022</p>
                    <h2 class="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
                        <a href="#" className="text-gray-100">Process Documents Using Artificial
                            Intelligence For RPA Bots</a>
                    </h2>
                    <p class="mb-4 text-base font-normal text-gray-600">
                        Earlier RPA bots used to have some limitations like it would take structured data for processing
                        from excel, database, on these data. But with advancements in technology like OCR (Optical
                        Character Recognition) and Machine Learning, RPA bots are capable of extracting these data …
                    </p>
                    <a href="#" className="btn btn-sm p-1.5 hover:bg-purple-600 hover:text-white rounded-md text-sm bg-purple-100">Continue Reading</a>
                </div>
                <div>
                    <p class="pt-12 mb-3 text-sm font-normal text-gray-500">April 16, 2020</p>
                    <h2 class="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
                        <a href="#" className="text-gray-900 hover:text-purple-700">Implement Dark Mode in Your Android
                            App</a>
                    </h2>
                    <p class="mb-4 text-base font-normal text-gray-600">
                        Are you curious to implement the Dark Mode in Android Application? Here’s the perfect guideline
                        to attain the Dark Mode in Android Application. Don’t waste your time; just implement and enjoy
                        Dark Mode.
                    </p>
                    <a href="#" className="btn btn-light btn-sm">Continue Reading</a>
                </div>
                <div>
                    <p class="pt-12 mb-3 text-sm font-normal text-gray-500">April 16, 2020</p>
                    <h2 class="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
                        <a href="#" className="text-gray-900 hover:text-purple-700">Why is Mental Health one of the
                            Important Issues to Address?</a>
                    </h2>
                    <p class="mb-4 text-base font-normal text-gray-600">
                        Mental health was one of the under spoken topics before this lockdown. After sitting at home for
                        about six months I realized that this is one of the important issues to address not only in the
                        work sector but also in daily living.
                    </p>
                    <a href="#" className="btn btn-light btn-sm">Continue Reading</a>
                </div>
                <div>
                    <p class="pt-12 mb-3 text-sm font-normal text-gray-500">April 16, 2020</p>
                    <h2 class="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
                        <a href="#" className="text-gray-900 hover:text-purple-700">Pattern Matching In Elixir</a>
                    </h2>
                    <p class="mb-4 text-base font-normal text-gray-600">
                        Pattern matching is a great way to write idiomatic functional code. It’s a powerful tenant of
                        functional programming that makes it a joy to write conditional statements. If you don’t want
                        your
                        code to be peppered with deeply nested statements or multiple variations of similar business
                        logic, use pattern matching!
                    </p>
                    <a href="#" className="btn btn-light btn-sm">Continue Reading</a>
                </div>
                <div>
                    <p class="pt-12 mb-3 text-sm font-normal text-gray-500">April 16, 2020</p>
                    <h2 class="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
                        <a href="#" className="text-gray-900 hover:text-purple-700">3 things you should change during
                            your focus group interview</a>
                    </h2>
                    <p class="mb-4 text-base font-normal text-gray-600">We changed three things about our feedback
                        sessions, and it changed everything about running customer feedback sessions.</p>
                    <a href="#" className="btn btn-light btn-sm">Continue Reading</a>
                </div>
                <div>
                    <p class="pt-12 mb-3 text-sm font-normal text-gray-500">April 16, 2020</p>
                    <h2 class="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
                        <a href="#" className="text-gray-900 hover:text-purple-700">Using Webpack with React
                            Typescript</a>
                    </h2>
                    <p class="mb-4 text-base font-normal text-gray-600">
                        Ever wondered if there is a way to just tie up all your code into one single module for easy
                        usage. If so, in this article I will show you how to bundle all your code into a single
                        javascript
                        module that you can easily use in any other project.
                    </p>
                    <a href="#" className="btn btn-light btn-sm">Continue Reading</a>
                </div>
            </div>
            <div
                class="flex flex-col items-center justify-center pt-12 mt-12 space-x-0 space-y-2 border-t border-gray-200 md:space-x-2 md:space-y-0 md:flex-row">
                <a href="#" className="w-full rounded-full btn btn-light btn-xl md:w-auto">Previous Page</a>
                <a href="#" className="w-full rounded-full btn btn-light btn-xl md:w-auto">Next Page</a>
            </div>
        </section>

    )
}
