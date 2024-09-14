import Link from 'next/link'

export default function Footer() {
    return (
        <footer className='sticky inset-x-0 bottom-0 z-50 flex justify-center items-center text-black p-6 lg:px-8 bg-white'>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:divide-black lg:divide-x font-medium text-sm md:text-base'>
                <div className='lg:ms-3'>
                    Copyright © {new Date().getFullYear()} - All right reserved
                </div>
                <div className='lg:ps-3'>
                    {' '}
                    Developed with{' '}
                    <span className='hover:animate-pulse'>❤️</span> by{' '}
                    <Link
                        href={'https://github.com/abdulwaheed-apk'}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='font-semibold hover:text-amber-500'
                    >
                        Abdul Waheed
                    </Link>{' '}
                </div>
            </div>
        </footer>
    )
}
