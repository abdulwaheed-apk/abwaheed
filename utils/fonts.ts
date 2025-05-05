import { Montserrat, Lexend, Cantarell } from 'next/font/google'

export const lexend = Lexend({
    subsets: ['latin'],
    display: 'swap',
    weight:'variable',
    variable: '--font-lexend',
})

export const cantarell = Cantarell({
    subsets: ['latin'],
    weight: ['400','700'],
    variable: '--font-cantarell',
})

export const mont = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-mont',
})
