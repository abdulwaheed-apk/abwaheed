'use client';
import { FaAws } from 'react-icons/fa6';
import {
  SiTypescript,
  SiPython,
  SiExpress,
  SiReact,
  SiAngular,
  SiReactquery,
  SiNextdotjs,
  SiWebrtc,
  SiDrizzle,
  SiPostgresql,
  SiMongodb,
  SiDjango,
  SiAmazonec2,
  SiTailwindcss,
  SiNodedotjs,
  SiApachekafka,
  SiNestjs,
  SiSass,
  SiPrisma,
  SiGit,
  SiAstro,
} from 'react-icons/si';

const icons = [
  // Frontend
  { Icon: SiReact, name: 'React' },
  { Icon: SiNextdotjs, name: 'Next.js' },
  { Icon: SiAngular, name: 'Angular' },
  { Icon: SiAstro, name: 'Astro' },
  { Icon: SiTypescript, name: 'TypeScript' },
  { Icon: SiTailwindcss, name: 'Tailwind CSS' },
  { Icon: SiSass, name: 'Sass' },

  // State Management & API
  { Icon: SiReactquery, name: 'TanStack Query' },

  // Backend & Runtime
  { Icon: SiNodedotjs, name: 'Node.js' },
  { Icon: SiExpress, name: 'Express.js' },
  { Icon: SiNestjs, name: 'Nest.js' },
  { Icon: SiPython, name: 'Python' },
  { Icon: SiDjango, name: 'Django' },

  // Databases & ORMs
  { Icon: SiMongodb, name: 'MongoDB' },
  { Icon: SiPostgresql, name: 'PostgreSQL' },
  { Icon: SiPrisma, name: 'Prisma ORM' },
  { Icon: SiDrizzle, name: 'Drizzle ORM' },

  // Cloud & DevOps
  { Icon: FaAws, name: 'AWS' },
  { Icon: SiAmazonec2, name: 'AWS EC2' },
  { Icon: SiApachekafka, name: 'Apache Kafka' },

  // Tools & Misc
  { Icon: SiGit, name: 'Git' },
  { Icon: SiWebrtc, name: 'WebRTC' },
];

export default function TechStackIcons() {
  return (
    <div className={`flex flex-wrap justify-center gap-4 p-4 rounded-lg`}>
      {icons.map(({ Icon, name }) => (
        <div key={name} className='flex flex-col items-center'>
          <div className='w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-lg transition-colors duration-300 bg-stone-100 dark:bg-[#232325] shadow-md dark:shadow-lg'>
            <Icon className='w-6 h-6 md:w-8 md:h-8 text-[#101214] dark:text-stone-100 hover:text-orange-600 dark:hover:text-orange-600' />
          </div>
          <span className='mt-2 text-xs md:text-sm text-neutral-500 dark:text-stone-100'>
            {name}
          </span>
        </div>
      ))}
    </div>
  );
}
