import Link from 'next/link'
import { FaRegHeart } from 'react-icons/fa6'

export default function Footer() {
    return (
        <footer className='static inset-x-0 bottom-0 z-50 flex justify-center items-center text-[#101214] dark:text-white p-6 lg:px-8 bg-stone-100 dark:bg-[#101214]'>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:divide-black lg:divide-x font-medium text-sm md:text-base'>
                <div className='pr-3'>
                    Copyright © {new Date().getFullYear()} - All right reserved
                </div>
                <div className='pl-3'>
                    {' '}
                    Developed with
                    {/* <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='size-6 font-black inline-block hover:animate-pulse hover:text-orange-600 mx-1'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
                        />
                    </svg> */}
                    <FaRegHeart className='size-5 font-black inline-block hover:animate-pulse hover:text-orange-600 mx-1' />
                    by{' '}
                    <Link
                        href={'https://github.com/abdulwaheed-apk'}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='font-semibold hover:text-orange-500'
                    >
                        Ab. Waheed
                    </Link>{' '}
                </div>
            </div>
        </footer>
    )
}
