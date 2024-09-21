import { Metadata } from 'next'
import ProjectCard from '@/components/custom/project-card'

export const metadata: Metadata = {
    title: 'Work • Abdul Waheed',
}

export default function Work() {
    return (
        <main className='bg-white dark:bg-black pb-8 md:pb-16 shadow-sm drop-shadow-sm rounded-md'>
            <section className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
                <h1 className='text-4xl font-bold tracking-tight text-gray-900 dark:text-stone-100 sm:text-6xl'>
                    My Work
                </h1>
                <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-white font-medium'>
                    See my most recent projects below to get an idea of my past
                    experience.
                </p>
            </section>
            <ProjectCard />
        </main>
    )
}
