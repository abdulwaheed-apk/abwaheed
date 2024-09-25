import Link from 'next/link'
import { FaTerminal } from 'react-icons/fa6'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { PiStrategy } from 'react-icons/pi'
import { experiences } from '.'
import { BookOpenIcon, LightBulbIcon } from '@heroicons/react/24/outline'

export const skills = [
    {
        icon: <FaTerminal className='w-10 h-10 text-orange-600' />,
        title: 'Full Stack',
        description:
            'Specialized in building robust full-stack web applications using modern technologies like React, TypeScript, Node.js, and PostgreSQL. From backend logic to frontend interfaces, I ensure seamless integration and optimal performance.',
    },
    {
        icon: <LightBulbIcon className='w-10 h-10 text-orange-600' />,
        title: 'Problem Solver',
        description:
            'Adept at breaking down complex challenges into manageable components and devising innovative solutions. I thrive on tackling difficult problems and finding efficient, scalable answers through creative thinking and analytical approaches.',
    },
    {
        icon: <BookOpenIcon className='w-10 h-10 text-orange-600' />,
        title: 'Lifelong Learner',
        description:
            'Passionate about staying at the forefront of technology trends and best practices. I continuously expand my skill set, embrace new tools and methodologies, and apply fresh knowledge to enhance project outcomes and personal growth',
    },
    {
        icon: <PiStrategy className='w-10 h-10 text-orange-600' />,
        title: 'Strategy-Minded',
        description:
            'I approach development with a focus on scalability, maintainability, and user-centered design. My process emphasizes planning and strategy to deliver solutions that meet both business and user needs.',
    },
]

export const timelineData = experiences.map((experience) => ({
    title: experience.duration,
    content: (
        <div key={experience.duration}>
            <h4 className='font-bold text-lg sm:text-xl md:text-2xl capitalize'>
                {experience.position}
                <Link
                    href={experience.companyWebsite}
                    className='text-orange-600 hover:text-orange-500'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    @{experience.company}
                </Link>{' '}
            </h4>
            <span className='capitalize font-medium text-black/20 dark:text-light/75 xs:text-sm'>
                {experience.location} - {experience.office}
            </span>
            <ul className='mb-8'>
                {experience.work.map((point) => (
                    <li className='flex items-start gap-x-1.5' key={point}>
                        <IoIosCheckmarkCircleOutline className='flex-shrink-0 w-5 h-5 mt-1' />
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    ),
}))
