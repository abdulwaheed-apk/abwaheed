import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/custom/header'
import Footer from '@/components/custom/footer'

const mont = Montserrat({
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Abdul Waheed Portfolio • Full Stack Software Engineer',
    description: 'Self-Taught Full Stack Engineer',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body
                className={`${mont.className} antialiased flex flex-col bg-white`}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
