'use client'
import { useState } from 'react'
import Link from 'next/link'

import Social from './social-nav'
import LogoAvatar from './logo-avatar'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { navigation } from '@/data'
import { ThemeSwitch } from './theme-switch'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            <header className='sticky inset-x-0 top-0 z-50 backdrop-blur-md'>
                <nav
                    aria-label='Global'
                    className='flex items-center justify-between p-6 lg:px-8'
                >
                    <div className='flex lg:flex-1'>
                        <LogoAvatar />
                    </div>
                    <div className='flex lg:hidden'>
                        <button
                            type='button'
                            onClick={() => setMobileMenuOpen(true)}
                            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white'
                        >
                            <span className='sr-only'>Open main menu</span>
                            <Bars3Icon aria-hidden='true' className='h-6 w-6' />
                        </button>
                    </div>
                    <div className='hidden lg:flex lg:gap-x-12'>
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className='text-sm font-semibold leading-6 text-gray-900 dark:text-white'
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className='hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-3'>
                        <ThemeSwitch />
                        <Social />
                    </div>
                </nav>
                <Dialog
                    open={mobileMenuOpen}
                    onClose={setMobileMenuOpen}
                    className='lg:hidden'
                >
                    <div className='fixed inset-0 z-50' />
                    <DialogPanel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-stone-100 dark:bg-[#101214] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
                        <div className='flex items-center justify-between'>
                            <LogoAvatar />
                            <button
                                type='button'
                                onClick={() => setMobileMenuOpen(false)}
                                className='-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white'
                            >
                                <span className='sr-only'>Close menu</span>
                                <XMarkIcon
                                    aria-hidden='true'
                                    className='h-6 w-6'
                                />
                            </button>
                        </div>
                        <div className='mt-6 flex'>
                            {' '}
                            {/* flow-root*/}
                            <div className='-my-6 divide-y divide-gray-500/10'>
                                <div className='space-y-2 py-6'>
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-black/80'
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className='flex py-6 gap-x-2'>
                                    <Social />
                                    <ThemeSwitch />
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
        </>
    )
}
