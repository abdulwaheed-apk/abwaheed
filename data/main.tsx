import Link from 'next/link'
import { AiOutlineTrophy } from 'react-icons/ai'
import { FaTerminal } from 'react-icons/fa6'
import { PiStrategy } from 'react-icons/pi'
import { experiences } from '.'

export const skills = [
    {
        icon: <FaTerminal className='size-10 text-orange-600' />,
        title: 'Full Stack',
        description:
            'Specialized in building robust full-stack web applications using modern technologies like React, TypeScript, Node.js, and PostgreSQL. From backend logic to frontend interfaces, I ensure seamless integration and optimal performance.',
    },
    {
        icon: <PiStrategy className='size-10 text-orange-600' />,
        title: 'Strategy-Minded',
        description:
            'I approach development with a focus on scalability, maintainability, and user-centered design. My process emphasizes planning and strategy to deliver solutions that meet both business and user needs.',
    },
    {
        icon: <AiOutlineTrophy className='size-10 text-orange-600' />,
        title: 'Results Driven',
        description:
            'Committed to delivering impactful results through continuous improvement and problem-solving. My work focuses on providing high-quality code and solutions that help businesses achieve their goals efficiently.',
    },
]

export const timelineData = experiences.map((experience) => ({
    title: experience.duration,
    content: (
        <div key={experience.duration}>
            <h4 className='font-bold text-lg sm:text-xl md:text-2xl capitalize'>
                {experience.position}
                <Link
                    href={'https://www.o3interfaces.com/'}
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
                    <li
                        className='flex items-start md:items-center gap-x-1.5'
                        key={point}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='size-5 inline-block'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                            />
                        </svg>
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    ),
}))
