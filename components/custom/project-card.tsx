import { projects } from '@/lib/data'
import { FocusCards } from '../ui/focus-cards'

export default function ProjectCard() {
    return <FocusCards cards={projects} />
}