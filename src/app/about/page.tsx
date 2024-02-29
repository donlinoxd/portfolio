import AboutHero from '@/components/about-hero'
import Particles from '@/components/particles'
import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
    title: 'About | Lino Escuyos',
    description:
        'Get to know Lino Escuyos Jr., a 26-year-old frontend developer with 2 years of experience. Learn about his journey, passions, and the tech tools he loves, including HTML, CSS, JavaScript, React, and more. Discover the person behind the code on his about page.',
}

export default function AboutPage() {
    return (
        <>
            <div className='w-full text-white min-h-screen bg-black overflow-x-hidden'>
                <AboutHero />
                <div className='my-20'>Experience</div>
            </div>
            <div id='particles-js' className='w-full h-screen absolute top-0 z-[10] pointer-events-none' />
            <Script src='http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'></Script>
            <Particles />
        </>
    )
}
