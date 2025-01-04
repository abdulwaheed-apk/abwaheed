'use client'
import { useState } from 'react'
import { Button } from '../ui/button'
import {Check, Copy} from "lucide-react";

export default function CopyEmail() {
    const [copied, setCopied] = useState(false)

    function handleOnClick() {
        window.navigator.clipboard.writeText('abwaheed701@gmail.com')
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
            <button onClick={handleOnClick} className={'py-1.5'}>
                {copied ? 'Email Copied' : 'Copy Email'}
                {copied ? (
                    <Check className='ml-1.5 size-5' />
                ) : (
                    <Copy className='ml-1.5 size-5' />
                )}
            </button>
        </Button>
    )
}
