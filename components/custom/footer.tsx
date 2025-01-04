import Link from 'next/link'
import { FaGithub } from 'react-icons/fa6'
import {Copyright, Heart} from "lucide-react";

export default function Footer() {
    return (
        <footer className='mt-auto static inset-x-0 bottom-0 z-50 flex justify-center items-center text-[#101214] dark:text-white p-6 lg:px-8 bg-stone-100 dark:bg-[#101214]'>
            <div className='grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 divide-[#101214] dark:divide-stone-100 lg:divide-x lg:divide-black dark:lg:divide-slate-100 font-medium text-sm md:text-base'>
                <div className='py-2 lg:py-0 lg:pr-3 flex items-center gap-x-0.5'>
                    Copyright <Copyright className={'size-3 md:size-4'} /> {new Date().getFullYear()} - All rights reserved
                </div>
                <div className='py-2 lg:py-0 lg:px-3'>
                    Designed with
                    <Heart className='size-5 font-black inline-block hover:animate-pulse hover:text-orange-600 mx-1' />
                    by{' '}
                    <Link
                        href={'https://www.instagram.com/abdulwaheed.apk'}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-orange-500'
                    >
                        Ab. Waheed
                    </Link>
                </div>
                <div className='py-2 lg:py-0 lg:pl-3 flex items-center justify-center lg:justify-start'>
                    <Link
                        href={'https://github.com/abdulwaheed-apk/abwaheed'}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-orange-500 flex items-center'
                    >
                        <FaGithub className='size-5 mr-2'/>
                        Portfolio repo
                    </Link>
                </div>
            </div>
        </footer>
    )
}
