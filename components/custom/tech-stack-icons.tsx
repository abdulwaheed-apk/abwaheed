'use client'
import { FaAws } from 'react-icons/fa6'
import {
    SiTypescript,
    SiJavascript,
    SiPython,
    SiExpress,
    SiReact,
    SiSvelte,
    SiAngular,
    SiRedux,
    SiReactquery,
    SiNextdotjs,
    SiWebrtc,
    SiDrizzle,
    SiPostgresql,
    SiMongodb,
    SiAwsamplify,
    SiDjango,
    SiAmazonec2,
    SiTailwindcss,
    SiNodedotjs,
    SiHtml5,
    SiCss3,
    SiBootstrap,
    SiAmazondynamodb,
    SiRuby,
    SiRubyonrails,
    SiApachekafka,
} from 'react-icons/si'

const icons = [
    { Icon: SiHtml5, name: 'HTML' },
    { Icon: SiCss3, name: 'CSS' },
    { Icon: SiJavascript, name: 'JavaScript' },
    { Icon: SiTypescript, name: 'TypeScript' },
    { Icon: SiReact, name: 'React' },
    { Icon: SiRedux, name: 'Redux' },
    { Icon: SiReactquery, name: 'TanStack Query' },
    { Icon: FaAws, name: 'AWS' },
    { Icon: SiNextdotjs, name: 'Next.js' },
    { Icon: SiTailwindcss, name: 'Tailwind CSS' },
    { Icon: SiExpress, name: 'Express.js' },
    { Icon: SiNodedotjs, name: 'Node.js' },
    { Icon: SiMongodb, name: 'MongoDB' },
    { Icon: SiPostgresql, name: 'PostgreSQL' },
    { Icon: SiDrizzle, name: 'Drizzle' },
    { Icon: SiWebrtc, name: 'WebRTC' },
    { Icon: SiAngular, name: 'Angular' },
    { Icon: SiPython, name: 'Python' },
    { Icon: SiRuby, name: 'Ruby' },
    { Icon: SiBootstrap, name: 'Bootstrap' },
    { Icon: SiAmazonec2, name: 'AWS EC2' },
    { Icon: SiSvelte, name: 'Svelte' },
    { Icon: SiApachekafka, name: 'Apache Kafka' },
    { Icon: SiAmazondynamodb, name: 'DynamoDB' },
    { Icon: SiDjango, name: 'Django' },
    { Icon: SiAwsamplify, name: 'AWS Amplify' },
    { Icon: SiRubyonrails, name: 'Ruby on Rails' },
]

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
    )
}
