import Particles from '@/components/particles'
import ProjectHeader from '@/components/project-header'
import ProjectsSection from '@/components/projects-section'
import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
    title: 'Works | Lino Escuyos',
    description:
        "Explore Lino Escuyos Jr.'s project page to see cool stuff he's built using HTML, CSS, JavaScript, React, and more. Check out his backend work with Node.js, Express, GraphQL, and tRPC. Dive into a portfolio that shows off his frontend and backend skills!",
}

export default function WorksPage() {
    return (
        <>
            <div className='flex flex-col'>
                <ProjectHeader />
                <ProjectsSection />
            </div>
            <div id='particles-js' className=' h-screen absolute top-0 z-[10] w-full' />
            <Script src='http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'></Script>
            <Particles />
        </>
    )
}
