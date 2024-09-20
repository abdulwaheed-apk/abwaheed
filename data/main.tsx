import Link from 'next/link'
import { AiOutlineTrophy } from 'react-icons/ai'
import { FaTerminal } from 'react-icons/fa6'
import { PiStrategy } from 'react-icons/pi'
import { experiences, stackIcons } from '.'
import Image from 'next/image'

export const skills = [
    {
        icon: <FaTerminal className='size-10 text-orange-600' />,
        title: 'Full Stack',
        description:
            'A technology company that builds economic infrastructure for the internet. A streaming service that offers a wide variety of award-winning TV shows, movies, anime',
    },
    {
        icon: <PiStrategy className='size-10 text-orange-600' />,
        title: 'Strategy-Minded',
        description:
            'A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
    },
    {
        icon: <AiOutlineTrophy className='size-10 text-orange-600' />,
        title: 'Results Driven',
        description:
            'A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
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

export const stackOne = stackIcons[0].map((item) => ({
    icon: (
        <Image
            src={item.url}
            alt={item.name}
            className='size-8'
            width={32}
            height={32}
            title={item.name}
        />
    ),
}))
export const stackTwo = stackIcons[1].map((item) => ({
    icon: (
        <Image
            src={item.url}
            alt={item.name}
            className='size-8'
            width={32}
            height={32}
            title={item.name}
        />
    ),
}))
