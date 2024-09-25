'use client'
import Image from 'next/image'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards'
import { stackIcons } from '@/data'
import { useTheme } from 'next-themes'

export default function MovingLogos() {
    const { theme } = useTheme()

    const stackOne = stackIcons.map((item) => ({
        icon: (
            <Image
                src={
                    theme === 'dark' && item.darkIcon ? item.darkIcon : item.url
                }
                alt={item.name}
                className='size-8'
                width={32}
                height={32}
                title={item.name}
            />
        ),
    }))

    return (
        <div className='rounded-md flex flex-col antialiased bg-transparent dark:bg-[#101214] dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden'>
            <InfiniteMovingCards
                items={stackOne}
                direction='left'
                speed='normal'
            />
        </div>
    )
}
