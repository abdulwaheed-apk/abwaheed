import Link from 'next/link'
import { IoCloudDownloadOutline } from 'react-icons/io5'

export default function Hero() {
    return (
        <main className='relative isolate px-6 pt-14 lg:px-8'>
            <div
                aria-hidden='true'
                className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#aa4b6b] via-[#6b6b83] to-[#3b8d99] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
                />
            </div>

            <div className='mx-auto max-w-2xl py-16 sm:py-24 lg:py-40'>
                <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
                    <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
                        Learn about my skills and experience.{' '}
                        <Link
                            href='/about'
                            className='font-semibold text-amber-600'
                        >
                            <span
                                aria-hidden='true'
                                className='absolute inset-0'
                            />
                            Read more <span aria-hidden='true'>&rarr;</span>
                        </Link>
                    </div>
                </div>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                        Innovative Problem Solver with a Passion for Lifelong
                        Learning
                    </h1>
                    <p className='mt-6 text-lg leading-8 text-gray-600'>
                        As a proficient full-stack engineer, I focus on
                        transforming concepts into advanced web applications.
                        Discover my recent projects and articles, highlighting
                        my expertise in full-stack development.
                    </p>
                    <div className='mt-10 flex items-center justify-center gap-x-6'>
                        <Link
                            href='/Abdul-Waheed-Full-Stack-Software-Engineer.pdf'
                            target='_blank'
                            rel='noopener noreferrer'
                            download
                            className='flex items-center justify-center gap-x-3 rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white border shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600'
                        >
                            Resume{' '}
                            <IoCloudDownloadOutline className='-mb-1 text-lg' />
                        </Link>
                        <div className='flex items-center justify-center gap-x-3 text-sm font-semibold leading-6 text-gray-900 rounded-md px-3 py-2 hover:border hover:cursor-copy'>
                            Email{' '}
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='currentColor'
                                className='size-6'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75'
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div
                aria-hidden='true'
                className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className='relative left-[calc(50%+3rem)] aspect-[1155/678] h-4 w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#aa4b6b] via-[#6b6b83] to-[#3b8d99] opacity-30sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
                />
            </div>
        </main>
    )
}
