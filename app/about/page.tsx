import Image from 'next/image'
import { Metadata } from 'next'
import { Spotlight } from '@/components/ui/spotlight'
import { Timeline } from '@/components/ui/timeline'
import { timelineData } from '@/data/main'
import TechStackIcons from '@/components/custom/tech-stack-icons'
import { BlurFade } from '@/components/magicui/blur-fade'

export const metadata: Metadata = {
  title: 'About • Abdul Waheed',
}

export default function About() {
  return (
    <main className='w-full sm:w-11/12 max-w-screen-xl mx-auto'>
      <div className='h-auto sm:h-[20rem] w-full mx-auto rounded-md flex md:items-start md:justify-center bg-stone-100/[0.96] dark:bg-[#171717] pt-4 md:pt-8 antialiased bg-grid-white/[0.02] relative overflow-hidden'>
        <Spotlight
          className='-top-40 left-0 md:left-60 md:-top-20'
          fill='white'
        />
        <div className='p-4 max-w-7xl mx-auto relative z-10 w-full pt-12 sm:pt-20 md:pt-0'>
          <BlurFade delay={0.04}>
            <h1 className='text-4xl sm:text-5xl lg:text-7xl text-black/[0.96] dark:text-stone-100 font-bold text-center bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
              Driven by <br />
              <span className='inline bg-gradient-to-r from-red-500 dark:from-yellow-300 dark:via-orange-500 dark:to-red-400 via-yellow-500 to-orange-400 bg-clip-text font-display tracking-normal text-transparent pe-4'>
                Impact
              </span>
              and Curiosity.{' '}
            </h1>

            <p className='mt-4 font-normal text-base text-neutral-800 dark:text-white max-w-lg text-center mx-auto'>
              Thanks for visiting. I&apos;m a Full Stack Engineer currently
              based in Riyadh, Saudi Arabia. Explore below to discover more
              about my journey and expertise.
            </p>
          </BlurFade>
        </div>
      </div>
      <BlurFade delay={0.04}>
        <section className='flex flex-col-reverse md:flex-row justify-evenly items-start gap-y-4 lg:gap-y-0 md:gap-x-4 w-11/12 sm:w-full mx-auto'>
          <Image
            alt='Abdul Waheed'
            src={'/assets/abdul-waheed.jpg'}
            width={620}
            height={850}
            className='rounded-3xl pointer-events-none md:w-2/5 lg:w-1/3'
          />
          <div className='w-full sm:w-4/5 md:w-2/4'>
            <h4 className='font-bold text-xl my-2'>About Myself</h4>
            <p className='font-medium'>
              Hello, I&apos;m Abdul Waheed, a self-taught Full Stack Software
              Engineer. With over 2 years of industry experience, I&apos;ve honed
              my skills in building robust and scalable applications using
              TypeScript, React, Angular, Node.js, NestJS, MySQL, PostgreSQL and MongoDB.
            </p>
            <p className='font-medium my-4'>
              My journey in software development has been driven by curiosity
              and a passion for problem-solving. Currently I&apos;m learning Java to extend my skill-set to build highly scalable Event-Driven distributed systems using microservices and Apache Kafka. I&apos;m currently pursuing Apache Kafka Certification with Confluent. I also hold a MERN Stack certification.
            </p>
            <p className='font-medium'>
              I&apos;m committed to creating scalable, high-performance
              solutions. My approach combines technical expertise with a keen eye
              for user-centered design, ensuring that every project I undertake
              not only functions flawlessly but also delivers an exceptional
              user experience.
            </p>
            <p className='font-medium mt-4'>
              As a continuous learner, I&apos;m always exploring new
              technologies and methodologies to enhance my capabilities and
              deliver cutting-edge solutions. I&apos;m also familiar with Ruby on Rails, DRF and Laravel.
            </p>
          </div>
        </section>
      </BlurFade>
      <Timeline data={timelineData} />
      <section className='flex flex-col md:flex-row justify-start items-start w-11/12 md:w-10/12 my-8 md:my-16 mx-auto'>
        <h4 className='font-bold text-xl md:w-3/12 md:mr-16'>Education</h4>
        <div className='flex flex-col justify-start items-start gap-y-2 w-full md:w-9/12'>
          <h6 className='font-semibold text-lg'>
            Bachelors of Engineering in <strong>Electronic Engineering</strong>{' '}
            (Jan 2018 - Oct 2021)
          </h6>
          <p className='font-medium'>
            Dawood University of Engineering and Technology, Karachi, Pakistan
          </p>
        </div>
      </section>
      <section className='flex flex-col justify-start items-start w-11/12 md:w-10/12 my-8 md:my-16 mx-auto'>
        <h4 className='font-bold text-xl md:w-3/12 md:mr-16'>My Tech Stack</h4>
        <TechStackIcons />
      </section>
    </main>
  )
}
