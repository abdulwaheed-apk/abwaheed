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

export const experiences = [
    {
        duration: 'Aug 2024 - Present',
        position: 'Software Engineer',
        company: 'Sky Solutions',
        companyWebsite: 'https://sico.sa/',
        location: 'Riyadh, Saudi Arabia',
        office: 'Onsite',
        work: [
            'Led the development of Carz.sa seller portal using TypeScript, Next.js, TanStack Query, Shadcn UI, Laravel and MySQL, and deployed on AWS.',
            'Implemented multi-language support in a React',
            'Developed Qadderha dashboard for employee and center management for vehicle insurance companies and deployed to Alibaba Cloud.',
            'Created user centric applications keeping.',
            'Wrote comprehensive documentation for API and frontend, resulting in a 300% increase in developer productivity and improved\n' +
            'client satisfaction'
        ],
    },
    {
        duration: 'Apr 2023 - Aug 2024',
        position: 'Software Engineer',
        company: 'Methvin',
        companyWebsite: 'https://methvin.org/',
        location: 'New Zealand',
        office: 'Remote',
        work: [
            'Led the migration of legacy codebase to modern tech stack (TypeScript, React, Redux, AWS), supporting $5 million annual revenue.',
            'Optimized frontend performance through code splitting and caching, reducing initial load time by 60%.',
            'Collaborated with cross-functional teams to prioritize tasks and gather business requirements.',
            'Architected microservices using Node.js, Express, TypeScript, PostgreSQL, and Kafka, increasing paid customers by 30%.',
            'Mentored junior developers through training sessions and code reviews.',
        ],
    },
    {
        duration: 'Jan 2023 - Apr 2023',
        position: 'Software Engineer (Bootcamp)',
        company: 'Contour Software',
        companyWebsite: 'https://contour-software.com/',
        location: 'Karachi, Pakistan',
        office: 'Onsite',
        work: [
            'Completed an intensive 300-hour, onsite full-stack development program led by industry experts, covering advanced topics in Node.js, Express, MongoDB, MySQL, and TypeScript, with hands-on deployment on AWS services (EC2, S3).',
            'Gained extensive practical experience through Agile methodologies, collaborative Git workflows, and the development of real-world, production-ready projects.',

        ],
    },
    {
        duration: 'Oct 2021 - Jan 2023',
        position: 'Software Engineer (Fintech)',
        company: 'O3 Interfaces',
        companyWebsite: 'https://www.o3interfaces.com/',
        location: 'Karachi, Pakistan',
        office: 'Onsite',
        work: [
            'Collaborated on RESTful API integration for frontend applications, liaising with backend teams and partner companies.',
            'Transformed Figma designs into scalable code for user account management dashboards using React, Bootstrap, and Styled Components.',
            'Contributed to the UBL digital mobile application (8M+ installs) using the Temenos framework, supporting millions of daily transactions.',
        ],
    },
]

export const stackIcons = [
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
        url: '/assets/Strapi-monogram-logo.svg',
        name: 'Strapi',
    },
]

export const newProjects = [
    {
        title: 'Carz.sa | Cars auction market place',
        description: 'Marketplace for new and used cars',
        src: '/assets/Carz-Dashboard.png',
        projectUrl: 'http://carz.sa:4000/',
        stack: ['TS', 'Next.js', 'AWS', 'React Query', 'Laravel'],
    },
    {
        title: 'Methvin | Estimation Software',
        description: 'Cost Estimation App for construction projects',
        src: '/assets/Methvin - Estimate.png',
        projectUrl:
            'https://methvin.org/products/estimating-tools/estimating-software',
        stack: ['JS', 'React', 'Redux', 'AWS'],
    },
    {
        title: 'Qadderha | Insurance Company App',
        description: 'Cross platform app for insurance companies',
        src: '/assets/Qadderha-orders.png',
        projectUrl: 'https://www.github.com/abdulwaheed-apk',
        stack: ['TS', 'Next.js', 'Alibaba Cloud', 'Laravel'],
    },
    {
        title: 'Video Calling App',
        description:
            'Video Conferencing using React, WebRTC, Node.js, Socket.io',
        src: '/assets/webrtc-meeting.webp',
        projectUrl: 'https://github.com/abdulwaheed-apk/video-call-app',
        stack: ['TypeScript', 'WebRTC', 'Socket.io', 'Next.js'],
    },

    // {
    //     title: 'Ecommerce Backend',
    //     description: 'Ecommerce API built with Node.js, TypeScript and Stripe.',
    //     src: '/assets/ecommerce-api.png',
    //     projectUrl: 'https://github.com/abdulwaheed-apk/ecommerce-api',
    //     stack: ['TypeScript', 'Node.js', 'Express', 'MongoDB'],
    // },
    {
        title: 'UBL | Fintech Mobile App',
        description: 'UBL Digital iOS and Android App using Temenos Framework.',
        src: '/assets/ubl-digital.webp',
        projectUrl:
            'https://play.google.com/store/apps/details?id=app.com.brd&pcampaignid=web_share',
        stack: ['JavaScript', 'HTML/CSS', 'Temenos', 'REST'],
    },
    {
        title: 'Methvin | Takeoff Software App',
        description:
            'Takeoff app to provides an accurate count of the materials needed.',
        src: '/assets/Methvin-takeoff.png',
        projectUrl: 'https://methvin.org/products/estimating-tools/takeoff',
        stack: ['JS', 'React', 'Redux', 'AWS'],
    },
]
