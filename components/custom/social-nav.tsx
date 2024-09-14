import Link from 'next/link'
import {
    FaGithub,
    FaLinkedin,
    FaSquareInstagram,
    FaHackerrank,
    FaSquareXTwitter,
    FaMoon,
    FaSun,
} from 'react-icons/fa6'

const light = true

const navigation = [
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

export default function Social() {
    return (
        <>
            <nav className='inline-flex overflow-hidden rounded-md border bg-white shadow-sm'>
                <button
                    className='inline-block border-e p-3 text-gray-700 hover:bg-gray-50 focus:relative'
                    title={
                        light ? 'Switch to dark mode' : 'Switch to light mode'
                    }
                >
                    {' '}
                    {light ? <FaMoon /> : <FaSun />}
                </button>
                {navigation.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        target='_blank'
                        title={item.name}
                        rel='noopener noreferrer'
                        className='inline-block border-e p-3 text-gray-700 hover:bg-gray-50 focus:relative'
                    >
                        <item.icon />
                    </Link>
                ))}
            </nav>
        </>
    )
}
