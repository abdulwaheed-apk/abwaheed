import Footer from '@/components/custom/footer'
import Header from '@/components/custom/header'
import Hero from '@/components/custom/hero-section'
import Image from 'next/image'

export default function Home() {
    return (
        <div className='flex flex-col bg-white'>
            <Header />
            <Hero />
            <Footer />
        </div>
    )
}
