import AboutHero from '@/components/about-hero'
import ExperienceSection from '@/components/experience-section'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About | Lino Escuyos',
    description:
        'Get to know Lino Escuyos Jr., a 26-year-old frontend developer with 2 years of experience. Learn about his journey, passions, and the tech tools he loves, including HTML, CSS, JavaScript, React, and more. Discover the person behind the code on his about page.',
}

export default function AboutPage() {
    return (
        <div className='w-full text-white min-h-screen bg-black overflow-x-hidden animate-opacity opacity-0'>
            <AboutHero />
            <ExperienceSection />
        </div>
    )
}
