'use client'
import Link from 'next/link'
import { IoCloudDownloadOutline } from 'react-icons/io5'
import { HiMiniRectangleStack } from 'react-icons/hi2'
import { Button } from '@/components/ui/button'
import CopyEmail from '@/components/custom/copy-email'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { skills } from '@/data/main'
import MovingLogos from '@/components/custom/moving-logos'
import Preview from '@/components/custom/preview'

export default function Home() {
    return (
        <>
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
                <div className='mx-auto max-w-2xl py-16 sm:py-24 lg:pb-8 lg:pt-16'>
                    <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
                        <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 dark:text-zinc-100 ring-1 ring-gray-900/10 dark:ring-gray-400 hover:ring-gray-900/20 dark:hover:ring-gray-300'>
                            Learn about my skills and experience.{' '}
                            <Link
                                href='/about'
                                className='font-semibold text-orange-600'
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
                        <h1 className='text-4xl font-bold tracking-tight text-gray-900 dark:text-stone-100 sm:text-6xl'>
                            Innovative Problem Solver with a Passion for
                            Lifelong Learning
                        </h1>
                        <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-white'>
                            I&apos;m a self-taught full-stack engineer focus on
                            building beautiful, modern and scaleable web
                            applications. Discover{' '}
                            <Preview img='/assets/About.png' url='/about'>
                                About me
                            </Preview>{' '}
                            and the projects I had worked on, highlighting my
                            expertise in full-stack development.
                        </p>
                        <div className='mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-center w-full  sm:gap-x-2 gap-y-2 sm:gap-y-0'>
                            <Button variant={'primary'} className='font-medium'>
                                <Link
                                    href='/work'
                                    className='flex justify-center items-center gap-x-0.5'
                                >
                                    Projects{' '}
                                    <HiMiniRectangleStack className='ml-2 size-5' />{' '}
                                </Link>
                            </Button>
                            <CopyEmail />
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
            <MovingLogos />
            <HoverEffect items={skills} />
            <section>
                <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
                    <div className='max-w-screen-md'>
                        <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-stone-100'>
                            Let&apos;s find more that brings us together.
                        </h2>
                        <p className='mb-8 font-light text-gray-500 sm:text-xl dark:text-white'>
                            As a passionate full-stack engineer, I focus on
                            transforming concepts into efficient, scalable web
                            applications. Discover my recent projects and
                            articles, highlighting my expertise in building
                            full-stack solutions using React, TypeScript, and
                            other modern technologies.
                        </p>
                        <div className='flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-2'>
                            <Button
                                asChild
                                variant={'primary'}
                                className='font-medium'
                            >
                                <Link href='mailto:ab.waheed1722@gmail.com'>
                                    Hire Me
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant={'outline'}
                                className='font-medium'
                            >
                                <Link
                                    href='/Abdul-Waheed-Full-Stack-Software-Engineer.pdf'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    download
                                >
                                    Resume{' '}
                                    <IoCloudDownloadOutline className='ml-1.5 size-5' />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
