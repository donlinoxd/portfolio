import ProjectHeader from '@/components/project-header'
import ProjectsSection from '@/components/projects-section'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Works | Lino Escuyos',
    description:
        "Explore Lino Escuyos Jr.'s project page to see cool stuff he's built using HTML, CSS, JavaScript, React, and more. Check out his backend work with Node.js, Express, GraphQL, and tRPC. Dive into a portfolio that shows off his frontend and backend skills!",
}

export default function WorksPage() {
    return (
        <div className='flex flex-col'>
            <div className='relative'>
                <ProjectHeader />
            </div>
            <ProjectsSection />
        </div>
    )
}
