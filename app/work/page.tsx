import { Metadata } from 'next';
import { IconBrandGithub, IconGlobe } from '@tabler/icons-react';
import { BlurFade } from '@/components/magicui/blur-fade';
import { ProjectCard } from '@/components/custom/project-card';

export const metadata: Metadata = {
  title: 'Work • Abdul Waheed',
};

const BLUR_FADE_DELAY = 0.04;

export default function Work() {
  return (
    <main className='bg-stone-100 dark:bg-[#171717] pb-8 md:pb-16'>
      <section className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
        <h1 className='text-4xl font-bold tracking-tight text-gray-900 dark:text-stone-100 sm:text-6xl'>
          My Work
        </h1>
        <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-white font-medium'>
          A curated selection of projects I have worked on, offering insight
          into my past experience.
        </p>
      </section>
      {/* <ProjectThreeDCard /> */}
      <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto'>
        {projects.map((project, id) => (
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
    </main>
  );
}

const projects = [
  {
    title: 'Ecommerce Microservices',
    href: 'http://carz.autos/seller/en',
    dates: 'Jan 2024 - Feb 2024',
    active: true,
    description: 'Scaleable Microservices using Kafka fro distributed event streaming',
    technologies: ['TS', 'NestJS', 'Apache Kafka', 'Microservices', 'Kubernetes', 'Docker', 'Angular', 'React', 'PostgreSQL', 'MongoDB', 'DRF'],
    links: [
      {
        type: 'Website',
        href: 'http://carz.autos/seller/en',
        icon: <IconGlobe className='size-3' />,
      },
      {
        type: 'GitHub',
        href: 'https://www.github.com/abdulwaheed-apk',
        icon: <IconBrandGithub className='size-3' />,
      },
    ],
    image: '/assets/Carz-Dashboard.png',
    video:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4',
  },
  {
    title: 'Carz.sa | Cars auction market place',
    href: 'http://carz.autos/seller/en',
    dates: 'Jan 2024 - Feb 2024',
    active: true,
    description: 'Marketplace for new and used cars',
    technologies: ['TS', 'Next.js', 'AWS', 'React Query', 'Laravel'],
    links: [
      {
        type: 'Website',
        href: 'http://carz.autos/seller/en',
        icon: <IconGlobe className='size-3' />,
      },
    ],
    image: '/assets/Carz-Dashboard.png',
    video:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4',
  },
  {
    title: 'Methvin | Estimation Software',
    href: 'https://methvin.org/products/estimating-tools/estimating-software',
    dates: 'Jan 2024 - Feb 2024',
    active: true,
    description: 'Cost Estimation and Bidding Decisions Through First-Principles Methodology',
    technologies: ['JS', 'React', 'Redux','Docker','AWS'],
    links: [
      {
        type: 'Website',
        href: 'https://methvin.org/products/estimating-tools/estimating-software',
        icon: <IconGlobe className='size-3' />,
      },
    ],
    image: '/assets/Methvin - Estimate.png',
    video:
        '/assets/projects/methvin-estimating.mp4',
    gif:'/assets/projects/estimate-title-page1-done.gif'
  },
  {
    title: 'Methvin | Takeoff',
    href: 'https://methvin.org/products/estimating-tools/takeoff',
    dates: 'Jan 2024 - Feb 2024',
    active: true,
    description: 'Takeoff for managing large-scale construction projects and intricate design plans',
    technologies: ['JS', 'React', 'Redux','Docker' ,'AWS'],
    links: [
      {
        type: 'Website',
        href: 'https://methvin.org/products/estimating-tools/estimating-software',
        icon: <IconGlobe className='size-3' />,
      },
    ],
    image: '/assets/Methvin-takeoff.png',
    video:'/assets/projects/methvin-takeoff.mp4',
    gif:'/assets/projects/takeoff-product-page.gif'
  },
  {
    title: 'Qadderha | Insurance Company App',
    href: 'https://www.github.com/abdulwaheed-apk',
    dates: 'Jan 2024 - Feb 2024',
    active: true,
    description: 'Cross platform app for insurance companies',
    technologies: ['TS', 'Next.js', 'Alibaba Cloud', 'Laravel'],
    links: [
      {
        type: 'GitHub',
        href: 'https://www.github.com/abdulwaheed-apk',
        icon: <IconBrandGithub className='size-3' />,
      },
    ],
    image: '/assets/Qadderha-orders.png',
    video:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4',
    gif:''
  },
  {
    title: 'Video Calling App',
    href: 'https://github.com/abdulwaheed-apk/video-call-app',
    dates: 'Jan 2024 - Feb 2024',
    active: true,
    description: 'Video Conferencing using React, WebRTC, Node.js, Socket.io',
    technologies: ['TypeScript', 'WebRTC', 'WebSocket', 'React'],
    links: [
      {
        type: 'Website',
        href: 'http://carz.autos/seller/en',
        icon: <IconGlobe className='size-3' />,
      },
      {
        type: 'GitHub',
        href: 'https://github.com/abdulwaheed-apk/video-call-app',
        icon: <IconBrandGithub className='size-3' />,
      },
    ],
    image: '/assets/webrtc-meeting.webp',
    video:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4',
    gif:''
  },
  // {
  //   title: 'UBL | Fintech Mobile App',
  //   href: 'https://play.google.com/store/apps/details?id=app.com.brd&pcampaignid=web_share',
  //   dates: 'Jan 2024 - Feb 2024',
  //   active: true,
  //   description: 'UBL Digital iOS and Android App using Temenos Framework.',
  //   technologies: ['JavaScript', 'HTML/CSS', 'Temenos', 'REST'],
  //   links: [
  //     {
  //       type: 'Play Store',
  //       href: 'https://play.google.com/store/apps/details?id=app.com.brd&pcampaignid=web_share',
  //       icon: <IconGlobe className='size-3' />,
  //     },
  //   ],
  //   image: '/assets/ubl-digital.webp',
  //   video:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4',
  //   gif:''
  // }
];
