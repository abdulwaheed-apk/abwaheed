import { LinkPreview } from '../ui/link-preview'

export default function Preview({
    children,
    url,
    img,
}: {
    children: React.ReactNode
    url: string
    img: string
}) {
    return (
        <LinkPreview
            url={url}
            isStatic
            imageSrc={img}
            className='font-bold dark:text-orange-600'
        >
            {children}
        </LinkPreview>
    )
}
