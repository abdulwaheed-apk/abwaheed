import Link from 'next/link'
import { socialNavigation } from '@/lib/data'
import { FaMoon, FaSun } from 'react-icons/fa6'

const light = true

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
                {socialNavigation.map((item) => (
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
