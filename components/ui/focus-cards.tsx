'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { FaGithub, FaGlobe } from 'react-icons/fa6'
import Link from 'next/link'
import { AnimatedTooltip } from './animated-tooltip'

type Card = {
    title: string
    src: string
    url: string
    stack: StackItem[]
}

type StackItem = {
    id: number
    name: string
    designation: string
    image: string
}

export const Card = React.memo(
    ({
        card,
        index,
        hovered,
        setHovered,
    }: {
        card: Card
        index: number
        hovered: number | null
        setHovered: React.Dispatch<React.SetStateAction<number | null>>
    }) => (
        <div
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
                'rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out',
                hovered !== null && hovered !== index && 'blur-sm scale-[0.98]'
            )}
        >
            <Image
                src={card.src}
                alt={card.title}
                fill
                className='object-cover absolute inset-0'
            />
            <div
                className={cn(
                    'absolute inset-0 bg-black/50 flex flex-col justify-end items-baseline py-8 px-4 transition-opacity duration-300',
                    hovered === index ? 'opacity-100' : 'opacity-0'
                )}
            >
                <div className='text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200'>
                    {card.title}
                </div>
                <p className='font-medium text-neutral-200 pt-4 pb-2'>
                    Tech Stack
                </p>
                <div className='flex justify-evenly items-center gap-10 '>
                    <div className='flex flex-row items-center justify-center mb-10 w-auto'>
                        <AnimatedTooltip items={card.stack} />
                    </div>
                    <div className='ml-auto'>
                        <Link
                            href={card.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='bg-clip-text text-amber-600 flex items-center justify-between gap-x-1.5'
                        >
                            <h4 className='font-semibold text-xl'>
                                {card.url.includes('github')
                                    ? 'Check GitHub Repo'
                                    : 'Check Live Site'}
                            </h4>
                            {card.url.includes('github') ? (
                                <FaGithub className='text-amber-600 size-6' />
                            ) : (
                                <FaGlobe className='text-amber-600 size-6' />
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
)

Card.displayName = 'Card'

export function FocusCards({ cards }: { cards: Card[] }) {
    const [hovered, setHovered] = useState<number | null>(null)

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto md:px-8 w-11/12 md:w-full'>
            {cards.map((card, index) => (
                <Card
                    key={card.title}
                    card={card}
                    index={index}
                    hovered={hovered}
                    setHovered={setHovered}
                />
            ))}
        </div>
    )
}
