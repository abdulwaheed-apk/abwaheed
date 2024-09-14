import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'

export default function LogoAvatar() {
    return (
        <Link href='' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Abdul Waheed</span>
            <Avatar>
                <AvatarImage src='/alexander-hipp-iEEBWgY_6lA-unsplash.jpg' />
                <AvatarFallback>apk</AvatarFallback>
            </Avatar>
        </Link>
    )
}
