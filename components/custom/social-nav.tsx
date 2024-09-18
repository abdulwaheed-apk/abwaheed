import { socialNavigation } from '@/data'
import Link from 'next/link'

export default function Social() {
    return (
        <>
            <nav className='inline-flex overflow-hidden rounded-md border bg-white shadow-sm'>
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
