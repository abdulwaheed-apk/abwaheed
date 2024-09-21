import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/custom/header'
import Footer from '@/components/custom/footer'
import { ThemeProvider } from 'next-themes'

const mont = Montserrat({
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Abdul Waheed • Full Stack Software Engineer',
    description: 'Self-Taught Full Stack Engineer',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body
                className={`${mont.className} antialiased flex flex-col bg-white text-[#101214] dark:bg-[#101214] dark:text-white mx-auto max-w-screen-xl`}
            >
                <ThemeProvider attribute='class'>
                    <Header />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
