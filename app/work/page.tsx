import { Metadata } from 'next'
import ProjectThreeDCard from '@/components/custom/project-three-d-card'

export const metadata: Metadata = {
    title: 'Work • Abdul Waheed',
}

export default function Work() {
    return (
        <main className='bg-stone-100 dark:bg-[#101214] pb-8 md:pb-16 shadow-sm drop-shadow-sm rounded-md'>
            <section className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
                <h1 className='text-4xl font-bold tracking-tight text-gray-900 dark:text-stone-100 sm:text-6xl'>
                    My Work
                </h1>
                <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-white font-medium'>
                    A curated selection of projects I have worked on, offering
                    insight into my past experience.
                </p>
            </section>
            <ProjectThreeDCard />
        </main>
    )
}
