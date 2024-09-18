import Image from 'next/image'
import { Metadata } from 'next'
import { Spotlight } from '@/components/ui/spotlight'
import { Timeline } from '@/components/ui/timeline'
import { timelineData } from '@/data/main'

export const metadata: Metadata = {
    title: 'About • Abdul Waheed',
}

export default function About() {
    return (
        <main className='w-full sm:w-11/12 max-w-screen-xl mx-auto'>
            <div className='h-auto sm:h-[20rem] w-full mx-auto rounded-md flex md:items-start md:justify-center bg-white/[0.96] pt-4 md:pt-8 antialiased bg-grid-white/[0.02] relative overflow-hidden'>
                <Spotlight
                    className='-top-40 left-0 md:left-60 md:-top-20'
                    fill='white'
                />
                <div className=' p-4 max-w-7xl  mx-auto relative z-10  w-full pt-12 sm:pt-20 md:pt-0'>
                    <h1 className='text-4xl sm:text-5xl lg:text-7xl text-black/[0.96] font-bold text-center bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
                        Driven by <br /> Curiosity and Impact.
                    </h1>
                    <p className='mt-4 font-normal text-base text-neutral-800 max-w-lg text-center mx-auto'>
                        Thanks for stopping by. I am a Full Stack Engineer who
                        is currently based in Riyadh, Saudi Arabia. Read below
                        to learn more about myself and my background.
                    </p>
                </div>
            </div>
            <section className='flex flex-col-reverse md:flex-row justify-evenly items-start gap-y-4 lg:gap-y-0 md:gap-x-4 w-11/12 sm:w-full mx-auto'>
                <Image
                    alt='Abdul Waheed'
                    src={'/assets/abdul-waheed.png'}
                    width={620}
                    height={850}
                    className='rounded-3xl pointer-events-none md:w-2/5 lg:w-1/3'
                />
                <div className='w-full sm:w-4/5 md:w-2/4'>
                    <h4 className='font-bold text-xl my-2'>Biography</h4>
                    <p className='font-medium'>
                        Hello, I&apos;m Abdul Waheed, a Full Stack Software
                        Engineer proficient in MERN stack. With over 3 years of
                        experience in the field, I specialize in building
                        scalable and high-performance systems using Node.js,
                        Ruby on Rails, Django, and front-end technologies like
                        JavaScript/TypeScript, React.js and Next.js. I am
                        dedicated to delivering top-notch software solutions
                        that seamlessly integrate and communicate between
                        systems.
                    </p>
                    <p className='font-medium my-4'>
                        {' '}
                        I believe in the power of design excellence and
                        user-centered thinking in every project I undertake.
                    </p>
                    <p className='font-medium'>
                        {' '}
                        My commitment to innovation and problem-solving drives
                        me to bring my client&apos;s visions to life effectively
                        and efficiently.
                    </p>
                </div>
            </section>
            <section className='flex flex-col md:flex-row justify-start items-start w-11/12 md:w-10/12 my-8 md:my-16 mx-auto'>
                <h4 className='font-bold text-xl md:w-3/12 md:mr-16'>
                    Education
                </h4>
                <div className='flex flex-col justify-start items-start gap-y-2 w-full md:w-9/12'>
                    <h6 className='font-semibold text-lg'>
                        Bachelors of Engineering in{' '}
                        <strong>Electronic Engineering</strong> (Jan 2018 - Oct
                        2021)
                    </h6>
                    <p className='font-medium'>
                        Dawood University of Engineering and Technology,
                        Karachi, Pakistan
                    </p>
                </div>
            </section>
            <Timeline data={timelineData} />
        </main>
    )
}
