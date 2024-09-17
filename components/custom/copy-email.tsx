'use client'
import { useState } from 'react'
import { Button } from '../ui/button'
import { FaCheck, FaRegCopy } from 'react-icons/fa6'

export default function CopyEmail() {
    const [copied, setCopied] = useState(false)

    function handleOnClick() {
        window.navigator.clipboard.writeText('ab.waheed1722@gmail.com')
        setCopied(true)

        setTimeout(() => {
            setCopied(false)
        }, 3000)
    }

    return (
        <Button
            asChild
            variant={'outline'}
            className='hover:cursor-copy font-medium'
        >
            <button onClick={handleOnClick}>
                {copied ? 'Email Copied' : 'Copy Email'}
                {copied ? (
                    <FaCheck className='ml-1.5 size-5' />
                ) : (
                    <FaRegCopy className='ml-1.5 size-5' />
                )}
            </button>
        </Button>
    )
}
