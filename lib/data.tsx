import { FaTerminal } from 'react-icons/fa6'
import { PiStrategy } from 'react-icons/pi'
import { AiOutlineTrophy } from 'react-icons/ai'
import {
    FaGithub,
    FaLinkedin,
    FaSquareInstagram,
    FaHackerrank,
    FaSquareXTwitter,
} from 'react-icons/fa6'

export const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Articles', href: '/blog' },
]

export const socialNavigation = [
    {
        name: 'GitHub',
        href: 'https://github.com/abdulwaheed-apk',
        icon: FaGithub,
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/abdulwaheed-apk/',
        icon: FaLinkedin,
    },
    {
        name: 'X',
        href: 'https://x.com/abdulwaheed_apk',
        icon: FaSquareXTwitter,
    },
    {
        name: 'HackerRank',
        href: 'https://www.hackerrank.com/profile/abdulwaheed_apk',
        icon: FaHackerrank,
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/abdulwaheed.apk',
        icon: FaSquareInstagram,
    },
]

export const skills = [
    {
        icon: FaTerminal,
        title: 'Full Stack',
        tagline:
            'Discover my recent projects and articles, highlighting my expertise in full-stack development.',
    },
    {
        icon: PiStrategy,
        title: 'Strategy-Minded',
        tagline:
            'Discover my recent projects and articles, highlighting my expertise in full-stack development.',
    },
    {
        icon: AiOutlineTrophy,
        title: 'Results Driven',
        tagline:
            'Discover my recent projects and articles, highlighting my expertise in full-stack development.',
    },
]
