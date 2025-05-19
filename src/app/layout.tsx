import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'
import Header from '@/components/custom/header'
import Footer from '@/components/custom/footer'
import { ThemeProvider } from 'next-themes'
import { ReactNode } from "react";
import { lexend, cantarell, mont } from '@/utils/fonts';

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
        <html lang='en'
              suppressHydrationWarning
              className={`${lexend.variable} ${cantarell.variable} ${mont.variable}`}
        >
            <body
                className={`${lexend.className} antialiased flex flex-col bg-stone-100 min-h-screen text-[#101214] dark:bg-[#171717] dark:text-white mx-auto max-w-screen-xl`}
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
