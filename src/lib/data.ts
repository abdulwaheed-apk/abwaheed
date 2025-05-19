
// import { IconBook, IconBulb, IconFileTypePdf, IconGoGame, IconTerminal } from '@tabler/icons-react';
// import { BookOpen } from 'lucide-react';


// export const DATA = {
//   name: 'Abdul Waheed',
//   initials: 'ab.',
//   url: 'https://abwaheed.com',
//   location: 'Riyadh, KSA',
//   navbar: [
//     { label: 'Home', href: '/' },
//     { label: 'About', href: '/about' },
//     { label: 'Work', href: '/work' },
//     { label: 'Articles', href: '/articles' },
//   ],
//   hero: {
//     description: 'Passionate Software Engineer building high-performance, scalable, and reliable solutions across web, cloud, and beyond. Focused on clean code, efficiency, and innovation.',
//     actions: {
//       one: {
//         label: 'Download my Resume',
//         link: '/Abdul_Waheed_Full_Stack_Software_Engineer.pdf',
//         icon: IconFileTypePdf
//       },
//       two: {
//         label: 'Projects',
//         link: '/work',
//         icon: null
//       }
//     },
//   },
//   highlights: [
//     {
//       name: 'Problem Solver',
//       desc: 'Adept at breaking down complex challenges into manageable components and devising innovative solutions. I thrive on tackling difficult problems and finding efficient, scalable answers through creative thinking and analytical approaches.',
//       icon: IconBulb
//     },
//     {
//       name: 'Full Stack',
//       desc: 'Specializing in building robust full- stack web applications using modern technologies like TypeScript, Python, React, Angular, Node.js, Django, and Ruby on Rails, I ensure seamless integration and optimal performance.',
//       icon: IconTerminal
//     },
//     {
//       name: 'Lifelong Learner',
//       desc: 'Passionate about staying at the forefront of technology trends and best practices. I continuously expand my skill set, embrace new tools and methodologies, and apply fresh knowledge to enhance project outcomes and personal growth',
//       icon: IconBook
//     },
//     {
//       name: 'Strategy-Minded',
//       desc: 'I approach development with a focus on scalability, maintainability, and user-centered design. My process emphasizes planning and strategy to deliver solutions that meet both business and user needs.',
//       icon: IconGoGame
//     }
//   ],
//   projects: [
//     {
//       company: "Sky Solutions",
//       href: "https://atomic.finance",
//       badges: [],
//       location: "Riyadh, KSA",
//       title: "Carz",
//       logoUrl: "/atomic.png",
//       start: "May 2021",
//       end: "Oct 2022",
//       video:'',
//       img:'',
//       description:
//         "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
//     }
//   ]
//   featuredProjects: {
//       heading: 'Some of my most recent projects',
//       desc: 'Transforming ideas into seamless, user - centric web solutions with precision and care.'
// },
//   avatarUrl: "/me.png",
//   skills: [
//     "React",
//     "Next.js",
//     "Typescript",
//     "Node.js",
//     "Python",
//     "Go",
//     "Postgres",
//     "Docker",
//     "Kubernetes",
//     "Java",
//     "C++",
//   ],

//   contact: {
//     email: "hello@example.com",
//     tel: "+123456789",
//     social: {
//       GitHub: {
//         name: "GitHub",
//         url: "https://dub.sh/dillion-github",
//         icon: Icons.github,

//         navbar: true,
//       },
//       LinkedIn: {
//         name: "LinkedIn",
//         url: "https://dub.sh/dillion-linkedin",
//         icon: Icons.linkedin,

//         navbar: true,
//       },
//       X: {
//         name: "X",
//         url: "https://dub.sh/dillion-twitter",
//         icon: Icons.x,

//         navbar: true,
//       },
//       Youtube: {
//         name: "Youtube",
//         url: "https://dub.sh/dillion-youtube",
//         icon: Icons.youtube,
//         navbar: true,
//       },
//       email: {
//         name: "Send Email",
//         url: "#",
//         icon: Icons.email,

//         navbar: false,
//       },
//     },
//   },

//   work: [
//     {
//       company: "Atomic Finance",
//       href: "https://atomic.finance",
//       badges: [],
//       location: "Remote",
//       title: "Bitcoin Protocol Engineer",
//       logoUrl: "/atomic.png",
//       start: "May 2021",
//       end: "Oct 2022",
//       description:
//         "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
//     },
//     {
//       company: "Shopify",
//       badges: [],
//       href: "https://shopify.com",
//       location: "Remote",
//       title: "Software Engineer",
//       logoUrl: "/shopify.svg",
//       start: "January 2021",
//       end: "April 2021",
//       description:
//         "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
//     },
//     {
//       company: "Nvidia",
//       href: "https://nvidia.com/",
//       badges: [],
//       location: "Santa Clara, CA",
//       title: "Software Engineer",
//       logoUrl: "/nvidia.png",
//       start: "January 2020",
//       end: "April 2020",
//       description:
//         "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
//     },
//     {
//       company: "Splunk",
//       href: "https://splunk.com",
//       badges: [],
//       location: "San Jose, CA",
//       title: "Software Engineer",
//       logoUrl: "/splunk.svg",
//       start: "January 2019",
//       end: "April 2019",
//       description:
//         "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
//     },
//     {
//       company: "Lime",
//       href: "https://li.me/",
//       badges: [],
//       location: "San Francisco, CA",
//       title: "Software Engineer",
//       logoUrl: "/lime.svg",
//       start: "January 2018",
//       end: "April 2018",
//       description:
//         "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
//     },
//     {
//       company: "Mitre Media",
//       href: "https://mitremedia.com/",
//       badges: [],
//       location: "Toronto, ON",
//       title: "Software Engineer",
//       logoUrl: "/mitremedia.png",
//       start: "May 2017",
//       end: "August 2017",
//       description:
//         "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
//     },
//   ],
//   education: [
//     {
//       school: "Buildspace",
//       href: "https://buildspace.so",
//       degree: "s3, s4, sf1, s5",
//       logoUrl: "/buildspace.jpg",
//       start: "2023",
//       end: "2024",
//     },
//     {
//       school: "University of Waterloo",
//       href: "https://uwaterloo.ca",
//       degree: "Bachelor's Degree of Computer Science (BCS)",
//       logoUrl: "/waterloo.png",
//       start: "2016",
//       end: "2021",
//     },
//     {
//       school: "Wilfrid Laurier University",
//       href: "https://wlu.ca",
//       degree: "Bachelor's Degree of Business Administration (BBA)",
//       logoUrl: "/laurier.png",
//       start: "2016",
//       end: "2021",
//     },
//     {
//       school: "International Baccalaureate",
//       href: "https://ibo.org",
//       degree: "IB Diploma",
//       logoUrl: "/ib.png",
//       start: "2012",
//       end: "2016",
//     },
//   ],
//   projects: [
//     {
//       title: "Chat Collect",
//       href: "https://chatcollect.com",
//       dates: "Jan 2024 - Feb 2024",
//       active: true,
//       description:
//         "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
//       technologies: [
//         "Next.js",
//         "Typescript",
//         "PostgreSQL",
//         "Prisma",
//         "TailwindCSS",
//         "Stripe",
//         "Shadcn UI",
//         "Magic UI",
//       ],
//       links: [
//         {
//           type: "Website",
//           href: "https://chatcollect.com",
//           icon: <FaGithub className="size-3" />,
//         },
//       ],
//       image: "",
//       video:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
//     },
//     {
//       title: "Magic UI",
//       href: "https://magicui.design",
//       dates: "June 2023 - Present",
//       active: true,
//       description:
//         "Designed, developed and sold animated UI components for developers.",
//       technologies: [
//         "Next.js",
//         "Typescript",
//         "PostgreSQL",
//         "Prisma",
//         "TailwindCSS",
//         "Stripe",
//         "Shadcn UI",
//         "Magic UI",
//       ],
//       links: [
//         {
//           type: "Website",
//           href: "https://magicui.design",
//           icon: <Icons.globe className="size-3" />,
//         },
//         {
//           type: "Source",
//           href: "https://github.com/magicuidesign/magicui",
//           icon: <Icons.github className="size-3" />,
//         },
//       ],
//       image: "",
//       video: "https://cdn.magicui.design/bento-grid.mp4",
//     },
//     {
//       title: "llm.report",
//       href: "https://llm.report",
//       dates: "April 2023 - September 2023",
//       active: true,
//       description:
//         "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
//       technologies: [
//         "Next.js",
//         "Typescript",
//         "PostgreSQL",
//         "Prisma",
//         "TailwindCSS",
//         "Shadcn UI",
//         "Magic UI",
//         "Stripe",
//         "Cloudflare Workers",
//       ],
//       links: [
//         {
//           type: "Website",
//           href: "https://llm.report",
//           icon: <Icons.globe className="size-3" />,
//         },
//         {
//           type: "Source",
//           href: "https://github.com/dillionverma/llm.report",
//           icon: <Icons.github className="size-3" />,
//         },
//       ],
//       image: "",
//       video: "https://cdn.llm.report/openai-demo.mp4",
//     },
//     {
//       title: "Automatic Chat",
//       href: "https://automatic.chat",
//       dates: "April 2023 - March 2024",
//       active: true,
//       description:
//         "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
//       technologies: [
//         "Next.js",
//         "Typescript",
//         "PostgreSQL",
//         "Prisma",
//         "TailwindCSS",
//         "Shadcn UI",
//         "Magic UI",
//         "Stripe",
//         "Cloudflare Workers",
//       ],
//       links: [
//         {
//           type: "Website",
//           href: "https://automatic.chat",
//           icon: <Icons.globe className="size-3" />,
//         },
//       ],
//       image: "",
//       video:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
//     },
//   ],
// } as const;
