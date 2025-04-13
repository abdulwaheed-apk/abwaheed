import Link from 'next/link';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import { Button } from '@/components/ui/button';
import CopyEmail from '@/components/custom/copy-email';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { skills } from '@/data/main';
import {
  IconBrandGithub,
  IconFileTypePdf,
  IconGlobe,
} from '@tabler/icons-react';
import { BlurFade } from '@/components/magicui/blur-fade';
import { ProjectCard } from '@/components/custom/project-card';

const BLUR_FADE_DELAY = 0.04;

const featuredProjects = [
  {
    title: 'Microservices-Based Chat Application',
    href: 'https://github.com/abdulwaheed-apk/chat-server',
    dates: '',
    active: false,
    description: 'A chat application built using microservices architecture',
    technologies: [
      'Node.js',
      'Microservices',
      'TypeScript',
      'Docker',
      'RabbitMQ',
      'Nginx',
    ],
    links: [
      {
        type: 'GitHub',
        href: 'https://github.com/abdulwaheed-apk/chat-server',
        icon: <IconBrandGithub className='size-3' />,
      },
    ],
    image: '/assets/chat-server-microservices.png',
    video: '',
  },
  {
    title: 'Carz.sa',
    href: 'https://carz.sa/seller',
    dates: '',
    active: true,
    description: 'Digital Marketplace for Buying & Selling Cars',
    technologies: [
      'TypeScript',
      'React',
      'NextJS',
      'Tailwind',
      'MySQL',
      'Laravel',
      'Alibaba Cloud',
    ],
    links: [
      {
        type: 'Website',
        href: 'https://carz.sa/seller',
        icon: <IconGlobe className='size-3' />,
      },
    ],
    image: '/assets/Carz-Dashboard.png',
    video: '',
  },
  {
    title: 'Methvin Estimating Software',
    href: 'https://portal.methvin.org/',
    dates: '',
    active: true,
    description: 'Construction estimating software platform',
    technologies: ['React', 'WebSocket', 'AWS', 'MySQL', 'Spring Boot'],
    links: [
      {
        type: 'Website',
        href: 'https://portal.methvin.org/',
        icon: <IconGlobe className='size-3' />,
      },
    ],
    image: '/assets/methvin-estimating.svg',
    video: '',
  },
  {
    title: 'Qadderha',
    href: '#',
    dates: '',
    active: false,
    description:
      'A platform for [describe purpose - e.g., "managing orders and services"]',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    links: [
      {
        type: 'Website',
        href: '#',
        icon: <IconGlobe className='size-3' />,
      },
    ],
    image: '/assets/Qadderha-orders.png',
    video: '',
  },
];

export default function Home() {
  return (
    <>
      <main className='relative isolate px-6 pt-14 lg:px-8'>
        <div
          aria-hidden='true'
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
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
            <BlurFade direction={'right'}>
              <h1 className='font-lexend inline text-4xl sm:text-6xl lg:text-8xl tracking-tight dark:text-white font-semibold text-center'>
                Crafting
                <span className='inline bg-gradient-to-r font-bold from-red-500 dark:from-yellow-300 dark:via-orange-500 dark:to-red-400 via-yellow-500 to-orange-400 bg-clip-text font-display text-4xl sm:text-6xl lg:text-8xl tracking-tight text-transparent px-5'>
                  Scalable
                </span>
                <br />& Robust Solutions
              </h1>
              <p className='mt-4 text-md font-lexend md:text-xl tracking-tight text-neutral-500 dark:text-neutral-400 max-w-md md:max-w-3xl mb-0 text-center mx-auto'>
                Passionate Software Engineer building high-performance,
                scalable, and reliable solutions across web, cloud, and beyond.
                Focused on clean code, efficiency, and innovation.
              </p>
            </BlurFade>
            <div className='hidden justify-center items-center gap-x-8 my-8 font-cantarell'>
              <Link
                href='/Abdul_Waheed_Full_Stack_Software_Engineer.pdf'
                download
                className='bg-neutral-800 py-2 px-4 md:py-3 md:px-8 text-sm md:text-md font-medium text-white hover:bg-neutral-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-neutral-400 rounded-sm text-md flex gap-x-2'>
                Download my Resume
                <IconFileTypePdf />
              </Link>
              <a
                href='/work'
                className='!font-cantarell bg-yellow-300 transition-colors duration-300 py-2 px-4 md:py-3 md:px-8 text-sm md:text-md font-medium text-neutral-900 hover:bg-orange-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300/50 active:bg-yellow-500 rounded-sm'>
                Projects
              </a>
            </div>
          </div>
        </div>

        <div
          aria-hidden='true'
          className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'>
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className='relative left-[calc(50%+3rem)] aspect-[1155/678] h-4 w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#aa4b6b] via-[#6b6b83] to-[#3b8d99] opacity-30sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
          />
        </div>
      </main>
      <HoverEffect items={skills} />
      <section
        aria-label={'Featured projects'}
        className={'flex flex-col gap-y-6 sm:gap-y-4 h-auto px-2 sm:px-0'}>
        <div
          className={
            'flex flex-col sm:flex-row gap-4 justify-between sm:items-end'
          }>
          <div className={'flex flex-col gap-y-4'}>
            <h2
              className={
                'text-3xl sm:text-5xl max-w-2xl font-medium tracking-tight'
              }>
              My Recent Work
            </h2>
            <p>
              Delivering measurable impact through clean code and intuitive
              interfaces
            </p>
          </div>
          <Link href={'/work'}>
            <Button
              variant={'outline'}
              size={'lg'}
              className={'rounded-full font-lexend font-normal'}>
              Browse all projects
            </Button>
          </Link>
        </div>
        <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto'>
          {featuredProjects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section>
        <div className='py-8 mx-auto max-w-screen-xl px-2 sm:py-16'>
          <div className='max-w-screen-md'>
            <h2 className='mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-stone-100'>
              Let&apos;s find more that brings us together.
            </h2>
            <p className='mb-8 font-light text-gray-500 sm:text-xl dark:text-white'>
              As a passionate full-stack engineer, I focus on transforming
              concepts into efficient, scalable web applications. Discover my
              recent projects and articles, highlighting my expertise in
              building full-stack solutions using React, TypeScript, and other
              modern technologies.
            </p>
            <div className='flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-2'>
              <Button
                asChild
                variant={'primary'}
                className='font-medium text-neutral-100'>
                <Link
                  href='/Abdul_Waheed_Full_Stack_Software_Engineer.pdf'
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
  );
}
