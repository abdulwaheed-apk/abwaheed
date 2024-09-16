import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { FaGlobe } from 'react-icons/fa6'

export default function ProjectCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <div className='flex items-end justify-between w-full'>
                    <div className='flex -space-x-1 overflow-hidden'>
                        <img
                            className='inline-block h-10 w-10 rounded-full ring-2 ring-white'
                            src='/assets/ts.svg'
                            alt=''
                        />
                        <img
                            className='inline-block h-10 w-10 rounded-full ring-2 ring-white'
                            src='/assets/mongodb.svg'
                            alt=''
                        />
                        <img
                            className='inline-block h-10 w-10 rounded-full ring-2 ring-white'
                            src='/assets/aws.svg'
                            alt=''
                        />
                        <img
                            className='inline-block h-10 w-10 rounded-full ring-2 ring-white'
                            src='/assets/nodejs.svg'
                            alt=''
                        />
                    </div>
                    <div className='flex items-center gap-x-2 cursor-pointer'>
                        <p className='font-semibold'>Check Live Site</p>
                        <FaGlobe />
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
