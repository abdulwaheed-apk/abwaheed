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
        duration: 'Apr 2023 - Aug 2024',
        position: 'Software Engineer',
        company: 'Methvin',
        companyWebsite: 'https://methvin.org/',
        location: 'New Zealand',
        office: 'Remote',
        work: [
            'Led the migration of Legacy codebase to latest technologies of TypeScript, React, Redux, AWS EC2, AWS RDS, CloudFront driving $5 millions revenue every year.',
            'Improved frontend performance through code splitting, lazy loading, and caching resulted in 150% reduce in initial load time.',
            'Developed a microservices architecture using NodeJS, Express, TypeScript, PostgreSQL, and Kafka which helped increase the paid customers by 30%.',
            'Collaborated with cross functional teams and product owner to prioritize critical tasks with timeline and gather business needs.',
            'Conducted training and code reviews for junior developers.',
        ],
    },
    {
        duration: 'Feb 2022 - Mar 2023',
        position: 'Software Engineer',
        company: 'Gaditek',
        companyWebsite: 'https://www.gaditek.com/',
        location: 'Karachi, Pakistan',
        office: 'Onsite',
        work: [
            'Designed and implemented NodeJS REST API using Express, MongoDB, and TypeScript and deployed to AWS services like EC2, S3, and DynamoDB.',
            'Collaborated with cross-functional teams to Developed and maintained the frontend of 5 Ecommerce applications for different clients using NextJS, TypeScript, Redux, React Query, Tailwind CSS, and MUI.',
            'Wrote API documentation which helped increase in 200% in developer’s code quality productivity.',
            'Wrote unit tests and performed integration testing to ensure code quality.',
            'Implemented features of the user review system and Stripe payment integration to LMS application built using Angular, RxJS, Tailwind CSS resulted in generating $500K in the quarter.',
        ],
    },
    {
        duration: 'Oct 2021 - Jan 2022',
        position: 'Software Engineer (Fintech)',
        company: 'O3 Interfaces',
        companyWebsite: 'https://www.o3interfaces.com/',
        location: 'Karachi, Pakistan',
        office: 'Onsite',
        work: [
            'Collaborated with backend developers to document and integrate RESTful APIs into the frontend. Also collaborated with a partner company for the same client.',
            'Collaborated with cross-functional teams to design and implement new features.',
            'Converted Figma designs for user account management dashboard to scaleable code using JavaScript, React, Bootstrap, and Styled Components.',
            'Contributed to the development of mobile application of UBL digital using Temenos framework having 8 million+ installs and millions of daily transactions.',
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
            url: '/assets/astro-icon-dark.svg',
            darkIcon: '/assets/astro-icon-light.svg',
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
            url: '/assets/EC2.svg',
            name: 'EC2',
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
            url: '/assets/python.png',
            name: 'Python',
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
            url: '/assets/aws.svg',
            darkIcon: '/assets/aws.png',
            name: 'AWS',
        },
        {
            url: '/assets/bootstrap.png',
            name: 'Bootstrap',
        },
        {
            url: '/assets/webrtc.svg',
            name: 'WebRTC',
        },

        {
            url: '/assets/github.svg',
            darkIcon: '/assets/github-mark-white.svg',
            name: 'GitHub',
        },
        {
            url: '/assets/js.svg',
            name: 'JS',
        },
        {
            url: '/assets/appwrite-logo1.svg',
            name: 'Appwrite',
        },
        {
            url: '/assets/djangoproject1.svg',
            darkIcon: '/assets/djangoproject.svg',
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
            url: '/assets/Ruby_logo.png',
            name: 'Ruby',
        },
        {
            url: '/assets/devexpress.svg',
            name: 'Dev Express',
        },
    ],
]

export const newProjects = [
    {
        title: 'Methvin | Estimation App',
        description: 'Cost Estimation App for construction projects',
        src: '/assets/Methvin - Estimate.png',
        projectUrl:
            'https://methvin.org/products/estimating-tools/estimating-software',
        stack: ['JS', 'React', 'Redux', 'AWS'],
    },
    {
        title: 'Video Calling App',
        description: 'Video Conferencing using React, WebRTC',
        src: '/assets/webrtc-meeting.webp',
        projectUrl: 'https://github.com/abdulwaheed-apk',
        stack: ['TypeScript', 'WebRTC', 'Tailwind', 'Next.js'],
    },

    {
        title: 'Acme | Invoice Tracking Dashboard',
        description:
            'Invoice Tracking Dashboard using Next.js, TypeScript, PostgreSQL',
        src: '/assets/invoice tracking dashboard.avif',
        projectUrl:
            'https://github.com/abdulwaheed-apk/invoice-tracking-dashboard',
        stack: ['TypeScript', 'Tailwind', 'Next.js', 'PostgreSQL'],
    },

    {
        title: 'UBL | Fin-tech Mobile App',
        description: 'UBL Digital iOS and Android App using Temenos Framework',
        src: '/assets/ubl-digital.webp',
        projectUrl:
            'https://play.google.com/store/apps/details?id=app.com.brd&pcampaignid=web_share',
        stack: ['JavaScript', 'HTML/CSS', 'Temenos', 'REST'],
    },
    {
        title: 'Methvin | Takeoff Software App',
        description:
            'Takeoff app to provides an accurate count of the materials needed',
        src: '/assets/Methvin-takeoff.png',
        projectUrl: 'https://methvin.org/products/estimating-tools/takeoff',
        stack: ['JS', 'React', 'Redux', 'AWS'],
    },
    {
        title: 'Microservices | Video Calling',
        description:
            'Video Calling built with Microservices Architecture using Kafka',
        src: '/assets/webrtc-meeting.webp',
        projectUrl: 'https://github.com/abdulwaheed-apk',
        stack: ['TypeScript', 'Next.js', 'Tailwind', 'AWS'],
    },
]
