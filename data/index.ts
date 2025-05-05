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
    { name: 'Articles', href: '#' },
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
        duration: 'May 2024 - Present',
        position: 'Software Engineer',
        company: 'Sky Innovation',
        companyWebsite: 'https://www.linkedin.com/company/sico-sa/',
        location: 'Riyadh, Saudi Arabia',
        office: 'Onsite',
        work: [
            'Developed the Qadderha dashboard for Najm to streamline insurance center management, deploying it on Alibaba Cloud.',
            'Implemented multi-language support in a React application.',
            'Integrated Google Maps and the ClickPay payment gateway into the platform.',
            'Led the development of Carz.sa seller portal using TypeScript, Next.js, TanStack Query, Shadcn UI, Laravel, and MySQL, deploying it on AWS.',
            'Wrote comprehensive API and frontend documentation, increasing developer productivity by 300% and improving client satisfaction.',
        ],
    },
    {
        duration: 'Apr 2023 - Apr 2024',
        position: 'Software Engineer',
        company: 'Methvin',
        companyWebsite: 'https://methvin.org/',
        location: 'New Zealand',
        office: 'Remote',
        work: [
            'Led the migration of a legacy codebase to a modern tech stack (TypeScript, React, Redux, AWS), supporting $5M in annual revenue.',
            'Optimized frontend performance using code splitting and caching, reducing initial load time by 60%.',
            'Collaborated with cross-functional teams to gather business requirements and prioritize development tasks.',
        ],
    },
    // {
    //     duration: 'Jan 2023 - Apr 2023',
    //     position: 'Software Engineer (Bootcamp)',
    //     company: 'Contour Software',
    //     companyWebsite: 'https://contour-software.com/',
    //     location: 'Karachi, Pakistan',
    //     office: 'Onsite',
    //     work: [
    //         'Completed an intensive 300-hour, onsite full-stack development program led by industry experts, covering advanced topics in Node.js, Express, MongoDB, MySQL, and TypeScript, with hands-on deployment on AWS services (EC2, S3).',
    //         'Gained extensive practical experience through Agile methodologies, collaborative Git workflows, and the development of real-world, production-ready projects.',
    //     ],
    // },
    {
        duration: 'Oct 2022 - Jan 2023',
        position: 'Software Engineer (Internship - Fintech)',
        company: 'O3 Interfaces',
        companyWebsite: 'https://www.o3interfaces.com/',
        location: 'Karachi, Pakistan',
        office: 'Onsite',
        work: [
            'Built user account management dashboards from Figma designs using Temenos Quantum and Temenos Fabric.',
            'Developed features for UBL Digital mobile app (8M+ installs) using Temenos framework, processing millions of daily transactions.',
            'Integrated RESTful APIs into the application, coordinating with backend teams and third-party partners.',
        ],
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
