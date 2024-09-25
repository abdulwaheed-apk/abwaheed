'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string
        description: string
        icon: React.ReactNode
    }[]
    className?: string
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <div
            className={cn(
                'grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4  py-5',
                className
            )}
        >
            {items.map((item, idx) => (
                <div
                    key={item?.title}
                    className='relative group  block p-2 h-full w-full'
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className='absolute inset-0 h-full w-full bg-stone-200 dark:bg-[#232325] block rounded-3xl'
                                layoutId='hoverBackground'
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card className='cursor-pointer'>
                        <CardIcon>{item.icon}</CardIcon>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                    </Card>
                </div>
            ))}
        </div>
    )
}

export const Card = ({
    className,
    children,
}: {
    className?: string
    children: React.ReactNode
}) => {
    return (
        <div
            className={cn(
                'rounded-2xl h-full w-full p-3 overflow-hidden bg-stone-100 dark:bg-[#101214] border border-solid border-[#e3e6ee] shadow-sm dark:border-white/[0.2] group-hover:border-slate-50 dark:group-hover:border-white/[0.3] relative z-20',
                className
            )}
        >
            <div className='relative z-50'>
                <div className='p-3'>{children}</div>
            </div>
        </div>
    )
}
export const CardTitle = ({
    className,
    children,
}: {
    className?: string
    children: React.ReactNode
}) => {
    return (
        <h4
            className={cn(
                'text-[#101214] dark:text-stone-100 font-bold tracking-wide mt-2',
                className
            )}
        >
            {children}
        </h4>
    )
}
export const CardDescription = ({
    className,
    children,
}: {
    className?: string
    children: React.ReactNode
}) => {
    return (
        <p
            className={cn(
                'mt-2 text-gray-600 dark:text-white tracking-wide leading-relaxed text-sm',
                className
            )}
        >
            {children}
        </p>
    )
}

export const CardIcon = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {
    return <>{children}</>
}
