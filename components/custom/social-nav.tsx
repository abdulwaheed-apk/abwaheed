import { socialNavigation } from '@/data'
import Link from 'next/link'

export default function Social() {
    return (
        <>
            <nav className='flex flex-wrap items-center justify-center gap-x-2 gap-y-2'>
                {socialNavigation.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        target='_blank'
                        title={item.name}
                        rel='noopener noreferrer'
                        className={`flex justify-center items-center p-2 rounded-full h-10 w-10 shadow-sm bg-white dark:bg-[#171717]`}
                    >
                        <item.icon />
                    </Link>
                ))}
            </nav>
        </>
    )
}
