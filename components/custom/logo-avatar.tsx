import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function LogoAvatar() {
    return (
        <Link href='/' prefetch className='-m-1.5 p-1.5'>
            <span className='sr-only'>Abdul Waheed</span>
            <Avatar>
                <AvatarImage
                    src='/assets/avatar.jpeg'
                    alt='Ab. Waheed'
                    className='object-cover pointer-events-none'
                />
                <AvatarFallback>apk</AvatarFallback>
            </Avatar>
        </Link>
    )
}
