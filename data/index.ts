import { FaTerminal } from 'react-icons/fa6'
import { PiStrategy } from 'react-icons/pi'
import { AiOutlineTrophy } from 'react-icons/ai'
import {
    FaGithub,
    FaLinkedin,
    FaHackerrank,
    FaSquareXTwitter,
} from 'react-icons/fa6'
import { SiCodewars, SiLeetcode } from 'react-icons/si'

export const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Work', href: '/work' },
    { name: 'Articles', href: '/articles' },
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
        name: 'SiLeetcode',
        href: 'https://leetcode.com/u/abdulwaheed-apk/',
        icon: SiLeetcode,
    },
    {
        name: 'SiCodewars',
        href: 'https://www.codewars.com/users/abdulwaheed-apk',
        icon: SiCodewars,
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
                name: 'JS',
                designation: 'JavaScript',
                image: '/assets/js.svg',
            },
            {
                id: 2,
                name: 'React',
                designation: 'Used for building Single Page Application (SPA)',
                image: '/assets/react.svg',
            },
            {
                id: 3,
                name: 'AWS',
                designation:
                    'Used AWS services such as AWS Elastic Beanstalk, RDS, S3, and CloudFront',
                image: '/assets/aws.svg',
            },
            {
                id: 4,
                name: 'Redux',
                designation: 'Used for state management',
                image: '/assets/redux.svg',
            },
            {
                id: 5,
                name: 'DevExtreme TreeList',
                designation:
                    "Used React TreeList's, which is build on top of the MUI",
                image: '/assets/devexpress.svg',
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

export const experiences = [
    {
        duration: 'Feb 2023 - Present',
        position: 'Software Engineer',
        company: 'Methvin',
        location: 'New Zealand',
        office: 'Remote',
        work: [
            'Developed and maintained web applications using React and Node.js.',
            'Collaborated with cross-functional teams to design and implement new features.',
            'Optimized application performance, reducing page load times by 30%.',
            'Wrote unit tests and performed integration testing to ensure code quality.',
        ],
    },
    {
        duration: 'Feb 2022 - Jan 2023',
        position: 'Software Engineer',
        company: 'O3 Interfaces',
        location: 'Karachi, Pakistan',
        office: 'Onsite',
        work: [
            'Developed and maintained web applications using React and Node.js.',
            'Collaborated with cross-functional teams to design and implement new features.',
            'Optimized application performance, reducing page load times by 30%.',
            'Wrote unit tests and performed integration testing to ensure code quality.',
        ],
    },
    {
        duration: 'Oct 2021 - Jan 2022',
        position: 'Software Engineer',
        company: 'Clixsta',
        location: 'Karachi, Pakistan',
        office: 'Onsite',
        work: [
            'Developed and maintained web applications using React and Node.js.',
            'Collaborated with cross-functional teams to design and implement new features.',
            'Optimized application performance, reducing page load times by 30%.',
            'Wrote unit tests and performed integration testing to ensure code quality.',
        ],
    },
]

export const stackIcons = [
    [
        {
            url: '/assets/ts.svg',
            name: 'TS',
        },
        {
            url: '/assets/tailwind.svg',
            name: 'Tailwind CSS',
        },
        {
            url: '/assets/vite.svg',
            name: 'Vite',
        },
        {
            url: '/assets/astro.svg',
            name: 'Astro',
        },
        {
            url: '/assets/react.svg',
            name: 'React',
        },
        {
            url: '/assets/git.svg',
            name: 'Git',
        },
        {
            url: '/assets/dock.svg',
            name: 'Docker',
        },
        {
            url: '/assets/express.svg',
            name: 'Express.js',
        },
        {
            url: '/assets/graph-ql.svg',
            name: 'GraphQL',
        },
        {
            url: '/assets/mui.svg',
            name: 'MIUI',
        },
        {
            url: '/assets/nextjs.svg',
            name: 'Next.js',
        },
        {
            url: '/assets/redux.svg',
            name: 'Redux.js',
        },
        {
            url: '/assets/pg.svg',
            name: 'PostgreSQL',
        },
        {
            url: '/assets/nodejs.svg',
            name: 'Node.js',
        },
        {
            url: '/assets/mongodb.svg',
            name: 'MongoDB',
        },
        {
            url: '/assets/Strapi-monogram-logo.svg',
            name: 'Strapi',
        },
    ],
    [
        {
            url: '/assets/Figma.svg',
            name: 'Figma',
        },
        {
            url: '/assets/netlify.svg',
            name: 'Netlify',
        },
        {
            url: '/assets/aws.svg',
            name: 'AWS',
        },
        {
            url: '/assets/bootstrap.png',
            name: 'Bootstrap',
        },
        {
            url: '/assets/WordPress.png',
            name: 'WordPress',
        },
        {
            url: '/assets/github.svg',
            name: 'GitHub',
        },
        {
            url: '/assets/js.svg',
            name: 'JS',
        },
        {
            url: '/assets/django.svg',
            name: 'django',
        },
        {
            url: '/assets/mysql-official.svg',
            name: 'MySQL',
        },
        {
            url: '/assets/vs-code.svg',
            name: 'VS Code',
        },
        {
            url: '/assets/Gatsby.svg',
            name: 'Gatsby',
        },
        {
            url: '/assets/rubyonrails.svg',
            name: 'Ruby on Rails',
        },
        {
            url: '/assets/Angular.svg',
            name: 'Angular',
        },
        {
            url: '/assets/tan-stack-query.svg',
            name: 'TanStack Query',
        },
        {
            url: '/assets/Sanity.svg',
            name: 'Sanity',
        },
        {
            url: '/assets/devexpress.svg',
            name: 'Dev Express',
        },
    ],
]
