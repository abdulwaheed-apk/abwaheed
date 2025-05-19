'use client'

import Image from 'next/image'
import React from 'react'
import { CardBody, CardContainer, CardItem } from '../ui/3d-card'
import Link from 'next/link'
import { newProjects } from '@/data'
import { Badge } from '../ui/badge'

export default function ProjectThreeDCard() {
    const highlightBadges = ['Tailwind', 'React', 'TypeScript']

    return (
        <div className='flex flex-col md:flex-row justify-center items-center flex-wrap gap-y-6 lg:gap-y-0 gap-x-6 w-11/12 md:w-full mx-auto'>
            {newProjects.map((project) => (
                <CardContainer className='inter-var' key={project.title}>
                    <CardBody className='bg-stone-100 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
                        <CardItem
                            translateZ='50'
                            className='text-xl font-bold text-neutral-600 dark:text-white'
                        >
                            {project.title}
                        </CardItem>
                        <CardItem
                            as='p'
                            translateZ='60'
                            className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
                        >
                            {project.description}
                        </CardItem>
                        <CardItem translateZ='100' className='w-full mt-4'>
                            <Image
                                src={project.src}
                                height='1000'
                                width='1000'
                                className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                                alt={project.title}
                            />
                        </CardItem>
                        <div className='flex flex-col-reverse sm:flex-row justify-between items-center gap-y-4 sm:gap-y-0 mt-20'>
                            <Link
                                href={project.projectUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    href={project.projectUrl}
                                    target='__blank'
                                    className='px-4 py-2 rounded-xl text-xs font-normal cursor-pointer pointer-events-none dark:text-white'
                                >
                                    Try now →
                                </CardItem>
                            </Link>
                            <div className='flex justify-center items-center gap-x-0.5 gap-y-1 flex-wrap'>
                                {project.stack.map((stk, idx) => {
                                    const variant = highlightBadges.includes(
                                        stk
                                    )
                                        ? 'blue'
                                        : 'outline'
                                    return (
                                        <Badge key={idx} variant={variant}>
                                            {stk}
                                        </Badge>
                                    )
                                })}
                            </div>
                        </div>
                    </CardBody>
                </CardContainer>
            ))}
        </div>
    )
}
