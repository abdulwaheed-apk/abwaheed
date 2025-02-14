import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/custom/header'
import Footer from '@/components/custom/footer'
import { ThemeProvider } from 'next-themes'
import {ReactNode} from "react";

const mont = Montserrat({
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Full Stack Software Engineer • Abdul Waheed',
    description: 'Self-Taught Full Stack Engineer',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body
                className={`${mont.className} antialiased flex flex-col bg-stone-100 min-h-screen text-[#101214] dark:bg-[#101214] dark:text-white mx-auto max-w-screen-xl`}
            >
                <ThemeProvider attribute='class'>
                    <Header />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
            <GoogleAnalytics
                gaId={process.env.NEXT_PUBLIC_ANALYTICS_ID ?? ''}
            />
        </html>
    )
}
