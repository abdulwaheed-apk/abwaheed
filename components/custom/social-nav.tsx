import { socialNavigation } from '@/data'
import Link from 'next/link'

export default function Social() {
    return (
        <>
            <nav className='inline-flex overflow-hidden rounded-md border bg-stone-100 dark:bg-[#101214] shadow-sm'>
                {socialNavigation.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        target='_blank'
                        title={item.name}
                        rel='noopener noreferrer'
                        className='inline-block border-e p-3 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-black focus:relative'
                    >
                        <item.icon />
                    </Link>
                ))}
            </nav>
        </>
    )
}
