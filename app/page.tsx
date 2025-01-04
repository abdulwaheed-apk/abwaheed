import Link from 'next/link'
import { IoCloudDownloadOutline } from 'react-icons/io5'
import { Button } from '@/components/ui/button'
import CopyEmail from '@/components/custom/copy-email'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { skills } from '@/data/main'
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import {ScrollArea} from "@radix-ui/react-scroll-area";
import {ScrollBar} from "@/components/ui/scroll-area";

const featuredProjects = [
    {
        id:1,
        title:"Carz.sa",
        link:"https://carz.sa",
        image:'/assets/Carz-Dashboard.png',
    },
    {
        id:2,
        title:"Estimating Software",
        link:"https://carz.sa",
        image:'/assets/methvin-estimating.svg',
    },
    {
        id:3,
        title:"Qadderha",
        link:"https://carz.sa",
        image:'/assets/Qadderha-orders.png',
    }
]

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
                <div className='mx-auto py-16 sm:py-24 lg:pb-8 lg:pt-16'>

                    <div className='text-center'>
                        <h1 className='text-4xl font-bold tracking-tight text-gray-900 dark:text-stone-100 sm:text-7xl'>
                        <Balancer>
                            Self-taught Full Stack Engineer with a Passion for
                            Lifelong Learning
                        </Balancer>
                        </h1>
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
            <HoverEffect items={skills}/>
            <section aria-label={'Featured projects'}>
                <div className={'flex justify-between items-end'}>
                    <div className={'flex flex-col gap-y-4'}>
                        <h2 className={'text-5xl max-w-2xl font-medium tracking-tight'}>
                            Some of my most recent projects
                        </h2>
                        <p>
                            Transforming ideas into seamless, user-centric web solutions with precision and care.
                        </p>
                    </div>
                    <Link href={'/work'}>
                    <Button
                        variant={'outline'}
                        size={'lg'}
                        className={'rounded-full'}>
                        Browse all projects
                    </Button>
                    </Link>
                </div>
                <ScrollArea className={'h-[400px] w-full flex justify-start items-center gap-6'}>
                    {featuredProjects.map(item => (
                        <div key={item.id} className={'flex flex-col gap-4'}>
                            <div className={'flex flex-col gap-4 relative bg-[#f7f7f7] border dark:bg-black/[0.5] py-4 px-6 rounded-xl'}>
                                <span
                                    className={'text-black w-fit border dark:text-white text-sm px-3 py-0.5 rounded-full'}>Featured</span>
                                <Image src={item.image} alt={item.title} width={465} height={400}/>
                            </div>
                            <h3 className={'text-lg font-medium text-black dark:text-white'}>{item.title}</h3>
                        </div>
                    ))}
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </section>
            <section>
                <div className='py-8 mx-auto max-w-screen-xl sm:py-16'>
                    <div className='max-w-screen-md'>
                    <h2 className='mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-stone-100'>
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
                                <Link
                                    href='/Abdul_Waheed_Software_Engineer.pdf'
                                       target='_blank'
                                       rel='noopener noreferrer'
                                       download>
                                    Resume
                                    <IoCloudDownloadOutline className='ml-1.5 size-5' />
                                </Link>
                            </Button>
                            <CopyEmail />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
