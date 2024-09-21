import { Metadata } from 'next'
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
    title: 'Articles • Abdul Waheed',
}

export default function Articles() {
    return (
        <div className='bg-white dark:bg-[#101214] pt-24 pb-4 sm:pt-32'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='mx-auto max-w-2xl lg:text-center'>
                    <h2 className='text-base font-semibold leading-7 text-orange-600'>
                        Welcome to my articles
                    </h2>
                    <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-stone-100 sm:text-4xl'>
                        Everything you need to know about React, Next.js and
                        TypeScript
                    </p>
                </div>
                {/*  */}
                <p className='pt-6 mx-auto max-w-2xl lg:text-center md:leading-7'>
                    Currently, there are no articles available – check back soon
                    or subscribe to newsletter for updates!
                </p>

                <div className='relative isolate overflow-hidden bg-white dark:bg-[#101214] py-16 md:-mb-6'>
                    <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2'>
                            <div className='max-w-xl lg:max-w-lg'>
                                <h2 className='text-3xl font-bold tracking-tight text-[#101214] dark:text-slate-100 sm:text-4xl'>
                                    Subscribe to my newsletter.
                                </h2>
                                <p className='mt-4 text-lg leading-8 text-gray-600 dark:text-white'>
                                    Nostrud amet eu ullamco nisi aute in ad
                                    minim nostrud adipisicing velit quis. Duis
                                    tempor incididunt dolore.
                                </p>
                                <div className='mt-6 flex flex-col sm:flex-row gap-y-2 max-w-md gap-x-4'>
                                    <label
                                        htmlFor='email-address'
                                        className='sr-only'
                                    >
                                        Email address
                                    </label>
                                    <input
                                        id='email-address'
                                        name='email'
                                        type='email'
                                        required
                                        placeholder='Enter your email'
                                        autoComplete='email'
                                        className='min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-slate-100 focus:ring-2 focus:ring-inset focus:ring-slate-100 sm:text-sm sm:leading-6'
                                    />
                                    <button
                                        type='submit'
                                        className='flex-none rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500'
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                            <dl className='grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2'>
                                <div className='flex flex-col items-start'>
                                    <div className='rounded-md bg-white/5 p-2 ring-1 ring-white/10'>
                                        <CalendarDaysIcon
                                            aria-hidden='true'
                                            className='h-6 w-6 text-orange-600'
                                        />
                                    </div>
                                    <dt className='mt-4 font-semibold text-orange-600'>
                                        Weekly articles
                                    </dt>
                                    <dd className='mt-2 leading-7 text-gray-600 dark:text-white'>
                                        Non laboris consequat cupidatat laborum
                                        magna. Eiusmod non irure cupidatat duis
                                        commodo amet.
                                    </dd>
                                </div>
                                <div className='flex flex-col items-start'>
                                    <div className='rounded-md bg-white/5 p-2 ring-1 ring-white/10'>
                                        <HandRaisedIcon
                                            aria-hidden='true'
                                            className='h-6 w-6 text-orange-600'
                                        />
                                    </div>
                                    <dt className='mt-4 font-semibold text-orange-600'>
                                        No spam
                                    </dt>
                                    <dd className='mt-2 leading-7 text-gray-600 dark:text-white'>
                                        Officia excepteur ullamco ut sint duis
                                        proident non adipisicing. Voluptate
                                        incididunt anim.
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <div
                        aria-hidden='true'
                        className='absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6'
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className='aspect-[1155/678] w-[72.1875rem] bg-white dark:bg-[#101214]'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
