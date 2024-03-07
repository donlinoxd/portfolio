'use client'
import { LampContainer } from '@/components/lamp'
import cn from '@/utils/cn'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useRef, useState } from 'react'

export default function ExperienceSection() {
    const [progress, setProgress] = useState(0)
    const ref = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['200px end', 'end end'],
    })

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        setProgress(latest)
    })

    console.log(progress)

    return (
        <div className=''>
            <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: 'easeInOut',
                    }}
                    className='mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl'
                >
                    EXPERIENCE
                </motion.h1>
            </LampContainer>
            <div className='min-h-screen top-[-20vh] mx-auto w-[90%] max-w-[600px] relative flex flex-col gap-8' ref={ref}>
                <div className='absolute top-0 left-0 w-[1px] h-full bg-gray-900'>
                    <div
                        style={{ height: `calc(${progress * 100}%)` }}
                        className={cn('absolute top-0 left-0 w-[1px] bg-red-950 h-0 transition-all ease-out duration-1000')}
                    >
                        <div className='rounded-full border-red-950 border w-[20px] h-[20px] grid place-items-center absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <div className='rounded-full w-3 h-3 bg-red-950'></div>
                        </div>
                    </div>
                </div>
                {experiences.map(({ company, description, duration, languages, title }, index) => (
                    <div key={index} className='flex gap-x-8 gap-y-16 pl-8'>
                        <p className='text-wrap min-w-[50px] sm:min-w-[100px] text-gray-200/80 mt-[2px]'>{duration}</p>
                        <div className='flex gap-2 flex-col'>
                            <h5 className='space-x-3 text-lg'>
                                <span>{title}</span> <span>•</span> <span>{company}</span>
                            </h5>
                            <p className='font-light text-gray-200'>{description}</p>
                            <ul className='flex gap-3 flex-wrap mt-4'>
                                {languages.map((language, index) => (
                                    <li key={language} className='bg-red-500/15 text-sm px-3 text-gray-200/90 font-medium rounded-full p-[6px]'>
                                        {language}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const experiences = [
    {
        title: 'React Frontend Developer',
        company: 'Uptile, LLC',
        duration: '2022 — Present',
        description:
            "I'm responsible for creating and keeping up with the vital parts that form Uptile's website, covering everything from top to bottom. I collaborate closely with different teams, like developers, designers, and product managers, to ensure that our website not only looks good but also meets the highest standards of accessibility on the web. It's all about working together to bring out the best in our product and make it user-friendly for everyone.",
        languages: ['Javascript', 'Typescript', 'React', 'Tailwind CSS'],
    },
    {
        title: 'Web Developer',
        company: 'DashRD LLC',
        duration: '2022 — 2023',
        description:
            "I specialized in enhancing user experiences through the implementation of reusable components and responsive design techniques, ensuring that clients' websites were both visually appealing and easy to navigate. I seamlessly integrated APIs to facilitate smooth data exchange and created engaging data visualizations to captivate their audience. Moreover, I optimized website performance to guarantee faster load times and improve SEO rankings, ultimately driving more traffic to their platforms. With a collaborative approach, I worked closely with cross-functional teams to deliver top-notch web solutions that exceeded expectations and elevated their online presence.",
        languages: ['Javascript', 'Typescript', 'NextJS', 'Chakra UI', 'Storybook'],
    },
    {
        title: 'Web Developer',
        company: 'My Phillie Wireless',
        duration: '2021 — 2022',
        description:
            'Worked on a team of 3 developers to build a web application for a client. This project involved creating a frontend using React, Redux, and Tailwind CSS. I also utilized Node.js for backend development.',
        languages: ['Javascript', 'Typescript', 'NodeJS', 'ExpressJS'],
    },
]
