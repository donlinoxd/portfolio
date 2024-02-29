'use client'

import WorkAsideImages from '@/components/work-aside-images'
import { useState } from 'react'

export default function ProjectsSection() {
    const [activeIndex, setActiveIdx] = useState<number | null>(null)

    const works = [
        {
            project: 'MeTime Healing',
            role: 'Web Application • UI/UX Developer',
            description: 'an online wellness-counseling platform that provides services related to mental health and personal well-being.',
            type: 'COUNSELING SYSTEM',
            images: [
                { src: '/images/metime_mobile.svg', alt: 'metime svg' },
                { src: '/images/metime_ipad.svg', alt: 'metime svg' },
                { src: '/images/metime_macbook.svg', alt: 'metime svg' },
            ],
        },
        {
            project: 'Dulles Glass',
            role: 'Web Ecommerce Platform • Frontend Developer',
            description:
                'an online shop that sells custom and in-stock glass products online, including table tops, mirrors, shower doors, and shelves.',
            type: 'E-COMMERCE',
            images: [
                { src: '/images/dullesglass_mobile.svg', alt: 'dullesglass' },
                { src: '/images/dullesglass_pcmac.svg', alt: 'dullesglass' },
                { src: '/images/dullesglass_ipad.svg', alt: 'dullesglass' },
            ],
        },
        {
            project: 'Zeno Films',
            role: 'UI/UX Designer • Web Developer',
            description: 'web app like netflix where you can watch lots of movies and TV shows whenever you want for free.',
            type: 'MOVIE APP',
            images: [
                { src: '/images/zeno_films_mobile.svg', alt: 'zeno films' },
                { src: '/images/zeno_films_laptop.svg', alt: 'zeno films' },
                { src: '/images/zeno_films_ipad.svg', alt: 'zeno films' },
            ],
        },
        {
            project: 'Ranken Noodle House',
            role: 'Frontend Developer',
            description:
                'online restaurant that serves authentic Japanese ramen dishes, meticulously crafted with traditional techniques and premium ingredients.',
            type: 'ONLINE RESTAURANT',
            images: [
                { src: '/images/ranken_noodles_mobile.svg', alt: 'ranken noodle house' },
                { src: '/images/ranken_noodles_ipad.svg', alt: 'ranken noodle house' },
                { src: '/images/ranken_noodles.gif', alt: 'ranken noodle house' },
            ],
        },
        {
            project: 'Sunny Agency',
            role: 'UI/UX Designer • Web Developer',
            description: 'agency website helping brands grow rapidly by crafting compelling visuals and extending brand presence in digital spaces.',
            type: 'LANDING PAGE',
            images: [
                { src: '/images/sunny_agency_tablet.png', alt: 'sunny agency' },
                { src: '/images/sunny_agency_mobile.png', alt: 'sunny agency' },
                { src: '/images/sunny_agency.gif', alt: 'sunny agency' },
            ],
        },
    ]

    return (
        <div className='flex relative bg-gray-50 text-black py-28 lg:px-[8%] min-h-[calc((320px+140vh)*5)] w-full'>
            <div className='px-[5%] text-center lg:text-start lg:px-0 items-center w-full lg:w-1/2 flex flex-col sticky top-0 lg:top-[120px] h-[calc(100vh+70px)] lg:h-[calc(100vh-240px)] justify-center gap-11 lg:gap-0 lg:justify-between lg:items-start z-10 bg-white/50 lg:bg-none backdrop-blur-sm lg:backdrop-blur-none '>
                {works.map(
                    ({ description, project, role, type }, idx) =>
                        activeIndex === idx && (
                            <>
                                <div className='after:bg-black after:absolute relative after:[content:" "] after:h-full after:animate-fill-text after:[animation-delay:0s]'>
                                    <span className='text-3xl sm:text-4xl lg:text-5xl font-semibold animate-opacity-text [animation-delay:0.5s] opacity-0'>
                                        0{idx + 1}
                                    </span>
                                </div>
                                <div className='flex flex-col gap-4 px-[5%] lg:items-start items-center'>
                                    <div className='after:bg-black after:absolute relative mb-10 after:[content:" "] after:h-full after:animate-fill-text after:[animation-delay:0s] after:top-0'>
                                        <h2 className='text-3xl sm:text-5xl lg:text-7xl font-medium tracking-wide animate-opacity-text [animation-delay:0.5s] opacity-0'>
                                            {project}
                                        </h2>
                                    </div>
                                    <div className='after:bg-black after:absolute relative after:[content:" "] after:h-full after:animate-fill-text after:[animation-delay:0s] after:top-0'>
                                        <p className='text-lg sm:text-xl lg:text-2xl text-black/80 animate-opacity-text [animation-delay:0.5s] opacity-0'>
                                            {role}
                                        </p>
                                    </div>
                                    <div className='after:bg-black after:absolute relative after:[content:" "] after:h-full after:animate-fill-text after:[animation-delay:0s] after:top-0'>
                                        <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black/90 animate-opacity-text [animation-delay:0.5s] opacity-0'>
                                            {description}
                                        </p>
                                    </div>
                                </div>
                                <div className='after:bg-black after:absolute relative after:[content:" "] after:h-full after:animate-fill-text after:[animation-delay:0s]'>
                                    <span className='text-xl sm:text-2xl lg:text-3xl font-medium tracking-wide animate-opacity-text [animation-delay:0.5s] opacity-0'>
                                        {type}
                                    </span>
                                </div>
                            </>
                        )
                )}
            </div>
            <div className='w-full lg:w-1/2 absolute lg:relative px-[5%] '>
                {works.map(({ images }, idx) => (
                    <WorkAsideImages key={idx} images={images} events={{ setInViewId: () => setActiveIdx(idx) }} />
                ))}
            </div>
        </div>
    )
}
