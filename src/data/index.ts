import {
    FaGithub,
    FaLinkedin,
    FaHackerrank,
    FaSquareXTwitter,
} from 'react-icons/fa6';
import { SiCodewars, SiLeetcode } from 'react-icons/si';

export const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Work', href: '/work' },
    { name: 'Articles', href: '#' },
];

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
];

export const experiences = [
    {
        duration: 'May 2024 - Present',
        position: 'Software Engineer',
        company: 'Sky Innovation',
        companyWebsite: 'https://www.linkedin.com/company/sico-sa/',
        location: 'Riyadh, Saudi Arabia',
        office: 'Onsite',
        work: [
            `Architected enterprise-grade insurance management platform (Qadderha) for Najm Saudi Arabia, implementing dynamic
role-based permissions with fine-grained access controls using Next.js 15, TypeScript, Tailwind CSS, replacing legacy admin
structure`,
            `Engineered high-performance React applications with optimized caching, accessibility compliance, and multilingual support
(EN/AR), achieving seamless UX through Tanstack Query, React Hook Form, Zod validation`,
            'Integrated Google Maps and the ClickPay payment gateway into the platform.',
            `Spearheaded dual frontend projects - Qadderha insurance dashboard and Carz.sa seller marketplace, contributing API design
input while delivering pixel-perfect Figma-to-code implementations`,
            `Orchestrated deployment strategies utilizing AWS and Alibaba Cloud ECS, ensuring robust production environments with
CI/CD pipelines and Flutter mobile app integration`,
            `Collaborated with cross-functional stakeholders, wrote comprehensive documentation resulting in 300% productivity increase,
and optimized applications for SEO and accessibility standards`
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
            `Migrated legacy codebase of Cost Estimation application to modern tech stack (TypeScript, React, Redux, Styled Components,
AWS), supporting $5 million annual revenue`,
            'Optimized frontend performance using code splitting and caching, reducing initial load time by 60%.',
            'Spearheaded cross-functional team collaboration to define and prioritize product roadmap and technical requirements',
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
            `Contributed to mission-critical UBL digital banking platform serving 8M+ users with millions of daily transactions, utilizing
Temenos framework for scalable financial services`,
            `Engineered responsive account management dashboards using React, Bootstrap, Styled Components, converting complex
Figma designs into production-ready, accessible financial interfaces`,
        ],
    },
];
