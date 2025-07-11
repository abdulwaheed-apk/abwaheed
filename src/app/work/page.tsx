import { Metadata } from 'next';
import { IconBrandGithub, IconGlobe } from '@tabler/icons-react';
import { BlurFade } from '@/components/magicui/blur-fade';
import { ProjectCard } from '@/components/project-card';

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
    title: 'Methvin | Estimation Software',
    href: 'https://methvin.org/products/estimating-tools/estimating-software',
    dates: 'Apr 2023 - Apr 2024',
    active: true,
    description:
      'Cost Estimation and Bidding Decisions Through First-Principles Methodology',
    technologies: ['JS', 'React', 'Redux', 'Docker', 'AWS'],
    links: [
      {
        type: 'Website',
        href: 'https://methvin.org/products/estimating-tools/estimating-software',
        icon: <IconGlobe className='size-3' />,
      },
    ],
    image: '/assets/Methvin - Estimate.png',
    video: '/assets/projects/methvin-estimating.mp4',
    gif: '/assets/projects/estimate-title-page1-done.gif',
  },
  {
    title: 'Methvin | Takeoff',
    href: 'https://methvin.org/products/estimating-tools/takeoff',
    dates: 'May 2023 - Feb 2024',
    active: true,
    description:
      'Takeoff for managing large-scale construction projects and intricate design plans',
    technologies: ['JS', 'React', 'Redux', 'Docker', 'AWS'],
    links: [
      {
        type: 'Website',
        href: 'https://methvin.org/products/estimating-tools/takeoff',
        icon: <IconGlobe className='size-3' />,
      },
    ],
    image: '/assets/Methvin-takeoff.png',
    video: '/assets/projects/methvin-takeoff.mp4',
    gif: '/assets/projects/takeoff-product-page.gif',
  },
  {
    title: 'Qadderha | A Najm platform',
    href: 'https://www.qaddrha.com.sa/en',
    dates: 'May 2024 - June 2025',
    active: true,
    description: 'A platform for managing insurance centers for Najm in Saudi Arabia',
    technologies: ['TypeScript', 'Next.js', 'AWS', 'Laravel'],
    links: [
      // {
      //   type: 'GitHub',
      //   href: 'https://www.github.com/abdulwaheed-apk',
      //   icon: <IconBrandGithub className='size-3' />,
      // },
      {
        type: 'Website',
        href: 'https://www.qaddrha.com.sa/en',
        icon: <IconGlobe className='size-3' />,
      },
    ],
    image: '/assets/Qadderha-orders.png',
    video: '/assets/projects/Qadderha-Dashboard-3-May-2025.mp4'
  },
  {
    title: 'Carz.sa | Digital Marketplace for Buying & Selling Cars',
    href: 'https://carz.sa/seller/en',
    dates: 'Sep 2024 - Present',
    active: true,
    description: 'Marketplace for new and used cars',
    technologies: ['TypeScript', 'Next.js', 'Alibaba Cloud', 'React Query', 'Laravel'],
    links: [
      {
        type: 'Website',
        href: 'http://carz.sa/seller/en',
        icon: <IconGlobe className='size-3' />,
      },
    ],
    image: '/assets/Carz-Dashboard.png',
    video:
      '/assets/projects/CARZ - Saudi Arabia’s Trusted Digital Marketplace for Buying & Selling Cars.mp4',
  },
  {
    title: 'Ecommerce Microservices',
    href: 'https://www.github.com/abdulwaheed-apk',
    dates: 'Jan 2024 - Feb 2024',
    active: true,
    description:
      'Scaleable Microservices using Kafka fro distributed event streaming',
    technologies: [
      'TS',
      'NestJS',
      'Apache Kafka',
      'Microservices',
      'Kubernetes',
      'Docker',
      'Angular',
      'React',
      'PostgreSQL',
      'MongoDB',
      'DRF',
    ],
    links: [
      {
        type: 'GitHub',
        href: 'https://www.github.com/abdulwaheed-apk',
        icon: <IconBrandGithub className='size-3' />,
      },
    ],
    image: '/assets/chat-server-microservices.png',
    video: '#',
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
        type: 'GitHub',
        href: 'https://github.com/abdulwaheed-apk/video-call-app',
        icon: <IconBrandGithub className='size-3' />,
      },
    ],
    image: '/assets/webrtc-meeting.webp',
    // video: '/assets/projects/video-call.mp4',
    video: '#',
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
