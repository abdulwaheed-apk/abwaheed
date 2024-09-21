import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
    return (
        <>
            <main className='max-h-screen h-max flex justify-center items-center lg:items-start w-full max-w-screen-xl mx-auto bg-white dark:bg-[#101214] px-6 py-24 sm:py-32 lg:px-8'>
                <div className='text-center'>
                    <p className='text-base font-semibold text-orange-600'>
                        Oops! 404 Error
                    </p>
                    <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-stone-100 sm:text-5xl'>
                        Page not found
                    </h1>
                    <p className='mt-6 text-base leading-7 text-gray-600 dark:text-white'>
                        Sorry, we couldn’t find the page you’re looking for.
                    </p>
                    <div className='mt-10 flex flex-col md:flex-row md:items-center justify-center gap-y-2 w-full md:gap-y-0 gap-x-2'>
                        <Button
                            asChild
                            variant={'primary'}
                            className='hover:bg-orange-500'
                        >
                            <Link
                                href='/'
                                className='rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600'
                            >
                                Go to home{' '}
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth={1.5}
                                    stroke='currentColor'
                                    className='size-5 inline-block ml-1'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
                                    />
                                </svg>
                            </Link>
                        </Button>
                        <Button asChild variant={'outline'}>
                            <Link
                                href='https://www.github.com/abdulwaheed-apk/'
                                className='flex justify-center items-center space-x-2 text-sm font-semibold shadow-sm text-gray-900 dark:text-white'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Report a Bug{' '}
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth={1.5}
                                    stroke='currentColor'
                                    className='size-5'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0 1 15.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752M4.921 6a24.048 24.048 0 0 0-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082'
                                    />
                                </svg>{' '}
                            </Link>
                        </Button>
                    </div>
                </div>
            </main>
        </>
    )
}
