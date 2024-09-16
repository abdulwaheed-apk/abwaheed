import ProjectCard from '@/components/custom/projecr-card'

export default function Work() {
    return (
        <main className='bg-white dark:bg-gray-900'>
            <section className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
                <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                    My Work
                </h1>
                <p className='mt-6 text-lg leading-8 text-gray-600 font-medium'>
                    See my most recent projects below to get an idea of my past
                    experience.
                </p>
            </section>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 px-4 gap-x-4 gap-y-6 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
                {' '}
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />{' '}
            </section>
        </main>
    )
}
