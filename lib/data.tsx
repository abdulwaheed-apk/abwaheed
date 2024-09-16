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
    { name: 'Work', href: '/work' },
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

export const projects = [
    {
        title: 'Methvin | Cost Estimation App',
        src: '/assets/Methvin - Estimate.png',
        url: 'https://methvin.org/products/estimating-tools/estimating-software',
        stack: [
            {
                id: 1,
                name: 'React',
                designation: 'Used for building Single Page Application (SPA)',
                image: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'Redux',
                designation: 'Used for state management',
                image: '/assets/redux.svg',
            },
            {
                id: 3,
                name: 'DevExtreme TreeList',
                designation:
                    "Used React TreeList's, which is build on top of the MUI",
                image: '/assets/devexpress.svg',
            },
            {
                id: 4,
                name: 'AWS',
                designation:
                    'Used AWS services suck as AWS Elastic Beanstalk, RDS, S3, and CloudFront',
                image: '/assets/aws.svg',
            },
        ],
    },
    {
        title: 'Acme | Invoice Tracking Dashboard',
        src: '/assets/invoice tracking dashboard.avif',
        url: 'https://github.com/abdulwaheed-apk/invoice-tracking-dashboard',
        stack: [
            {
                id: 1,
                name: 'React',
                designation:
                    'Used for building SPA, with redux for state management',
                image: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TypeScript',
                designation: 'Deployed web app on AWS Elastic Beanstalk',
                image: '/assets/ts.svg',
            },
            {
                id: 3,
                name: 'PostgreSQL',
                designation: 'Deployed web app on AWS Elastic Beanstalk',
                image: '/assets/pg.svg',
            },
            {
                id: 4,
                name: 'Vercel',
                designation:
                    'Used for building SPA, with redux for state management',
                image: '/assets/tailwind.svg',
            },
            {
                id: 5,
                name: 'Next.js',
                designation:
                    'Used for building SPA, with redux for state management',
                image: '/assets/nextjs.svg',
            },
        ],
    },
    {
        title: 'UBL Digital',
        src: '/assets/ubl-digital.webp',
        url: 'https://play.google.com/store/apps/details?id=app.com.brd&pcampaignid=web_share',
        stack: [
            {
                id: 1,
                name: 'JavaScript',
                designation:
                    'Used for building SPA, with redux for state management',
                image: '/assets/js.svg',
            },
            {
                id: 2,
                name: 'Redux',
                designation: 'Deployed web app on AWS Elastic Beanstalk',
                image: '/assets/redux.svg',
            },
            {
                id: 3,
                name: 'PostgreSQL',
                designation:
                    'Used for building SPA, with redux for state management',
                image: '/assets/pg.svg',
            },
            {
                id: 4,
                name: 'AWS',
                designation: 'Deployed web app on AWS Elastic Beanstalk',
                image: '/assets/graph-ql.svg',
            },
        ],
    },
    {
        title: 'Camping is for pros',
        src: '/assets/4.avif',
        url: 'https://github.com/abdulwaheed-apk',
        stack: [
            {
                id: 1,
                name: 'React',
                designation:
                    'Used for building SPA, with redux for state management',
                image: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'AWS',
                designation: 'Deployed web app on AWS Elastic Beanstalk',
                image: '/assets/graph-ql.svg',
            },
            {
                id: 3,
                name: 'React',
                designation:
                    'Used for building SPA, with redux for state management',
                image: '/assets/react.svg',
            },
            {
                id: 4,
                name: 'AWS',
                designation: 'Deployed web app on AWS Elastic Beanstalk',
                image: '/assets/graph-ql.svg',
            },
        ],
    },
    {
        title: 'The road not taken',
        src: '/assets/5.avif',
        url: 'https://github.com/abdulwaheed-apk',
        stack: [
            {
                id: 1,
                name: 'React',
                designation:
                    'Used for building SPA, with redux for state management',
                image: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'AWS',
                designation: 'Deployed web app on AWS Elastic Beanstalk',
                image: '/assets/graph-ql.svg',
            },
            {
                id: 3,
                name: 'React',
                designation:
                    'Used for building SPA, with redux for state management',
                image: '/assets/react.svg',
            },
            {
                id: 4,
                name: 'AWS',
                designation: 'Deployed web app on AWS Elastic Beanstalk',
                image: '/assets/graph-ql.svg',
            },
        ],
    },
    {
        title: 'The First Rule',
        src: '/assets/6.png',
        url: 'https://github.com/abdulwaheed-apk',
        stack: [
            {
                id: 1,
                name: 'React',
                designation:
                    'Used for building SPA, with redux for state management',
                image: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'AWS',
                designation: 'Deployed web app on AWS Elastic Beanstalk',
                image: '/assets/graph-ql.svg',
            },
            {
                id: 3,
                name: 'React',
                designation:
                    'Used for building SPA, with redux for state management',
                image: '/assets/react.svg',
            },
            {
                id: 4,
                name: 'AWS',
                designation: 'Deployed web app on AWS Elastic Beanstalk',
                image: '/assets/graph-ql.svg',
            },
        ],
    },
]
