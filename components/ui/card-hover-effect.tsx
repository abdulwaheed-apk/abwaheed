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
                'grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10',
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
                                className='absolute inset-0 h-full w-full bg-neutral-100 dark:bg-slate-800/[0.8] block  rounded-3xl'
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
                'rounded-2xl h-full w-full p-4 overflow-hidden bg-white border border-solid border-[#e3e6ee] shadow-sm dark:border-white/[0.2] group-hover:border-slate-50 relative z-20',
                className
            )}
        >
            <div className='relative z-50'>
                <div className='p-4'>{children}</div>
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
            className={cn('text-black font-bold tracking-wide mt-4', className)}
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
                'mt-6 text-gray-600 tracking-wide leading-relaxed text-sm',
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