'use client'

import { useDebounce } from '@/hooks/use-debounce'
import cn from '@/utils/cn'
import Image from 'next/image'
import { MouseEventHandler, useEffect, useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function AboutHero() {
    const [mouseSide, setMouseSide] = useState<'LEFT' | 'RIGHT' | 'CENTER'>('CENTER')
    const debouncedMouseSide = useDebounce(mouseSide, 500)

    const timeoutRef = useRef<any>(null)

    const updateMousePosition: MouseEventHandler<HTMLDivElement> = (e) => {
        const middle = window.innerWidth / 2

        const mousePositionXFromMiddle = e.clientX - middle

        if (mousePositionXFromMiddle <= -250) {
            setMouseSide('LEFT')
        } else if (mousePositionXFromMiddle >= 250) {
            setMouseSide('RIGHT')
        } else {
            setMouseSide('CENTER')
        }
    }

    useEffect(() => {
        clearTimeout(timeoutRef.current)
    }, [mouseSide])

    const technologies = [
        { image: '/images/javascript.svg', label: 'Javascript' },
        { image: '/images/typescript.svg', label: 'Typescript' },
        { image: '/images/react.svg', label: 'React' },
        { image: '/images/tailwindcss.svg', label: 'Tailwind CSS' },
        { image: '/images/material_ui.svg', label: 'Material UI' },
        { image: '/images/styled_components.svg', label: 'Styled Components' },
        { image: '/images/redux.svg', label: 'Redux Toolkit' },
        { image: '/images/react_query.svg', label: 'React Query' },
        { image: '/images/react-hook-form.jfif', label: 'React Hook Form' },
        { image: '/images/node.svg', label: 'Node JS' },
        { image: '/images/mongo_db.svg', label: 'MongoDB' },
    ]

    const designResources = [
        { image: '/images/figma.svg', label: 'Figma' },
        { image: '/images/adobe_xd.svg', label: 'Adobe XD' },
        { image: '/images/adobe_illustrator.svg', label: 'Adobe Illustrator' },
        { image: '/images/canva.svg', label: 'Canva' },
    ]

    return (
        <div
            className='w-full min-h-screen'
            onMouseMove={updateMousePosition}
            onMouseLeave={() => {
                setMouseSide('CENTER')
            }}
        >
            <div className='container relative lg:h-screen'>
                <div
                    className={cn(
                        'h-screen lg:h-1/2 lg:absolute lg:top-[50px] left-0 w-full opacity-0 relative',
                        debouncedMouseSide === 'CENTER' && 'opacity-100 [transition-duration:1000ms] transition'
                    )}
                >
                    <div className='max-w-[500px] w-full h-full flex flex-col items-center justify-center mx-auto gap-2 text-center'>
                        <h1 className='font-medium text-2xl'>I am Lino,</h1>
                        <p className='font-light text-gray-200'>
                            an experienced front-end web developer with a passion for creating awesome things on the internet. I love bringing ideas
                            to life through code and design. When I&apos;m not typing away at my keyboard, you can find me exploring new technologies,
                            sipping on coffee, or enjoying the great outdoors. I believe in continuous learning and strive to improve my skills every
                            day. Let&apos;s connect and build something amazing together!
                        </p>
                    </div>
                </div>
                <div className='absolute top-0 left-0 w-full h-full hidden lg:block'>
                    <div
                        className={cn(
                            'absolute bottom-0 translate-y-[4%] opacity-0 right-1/2 h-1/2 max-w-[50vw] aspect-square text-black',
                            debouncedMouseSide === 'LEFT' && 'h-[80%] right-0 opacity-100 transition-all [transition-duration:1000ms]',
                            debouncedMouseSide === 'CENTER' && 'opacity-100 transition-all [transition-duration:1000ms]',
                            debouncedMouseSide === 'RIGHT' && 'opacity-0 pointer-events-none'
                        )}
                    >
                        <Image src='/images/animated_programmer.svg' alt='animated programmer' fill className='object-contain' />
                    </div>
                    <div
                        className={cn(
                            'absolute bottom-0 opacity-0 left-1/2 h-1/2 max-w-[50vw] aspect-square text-black',
                            debouncedMouseSide === 'RIGHT' && 'h-[80%] left-0 opacity-100 transition-all [transition-duration:1000ms]',
                            debouncedMouseSide === 'CENTER' && 'opacity-100 transition-all [transition-duration:1000ms]',
                            debouncedMouseSide === 'LEFT' && 'opacity-0 pointer-events-none'
                        )}
                    >
                        <Image src='/images/animated_designer.svg' alt='animated programmer' fill className='object-contain' />
                    </div>
                </div>
                <div className='w-full h-full flex justify-between lg:items-end relative lg:flex-row flex-col gap-24 lg:gap-0'>
                    <div
                        className={cn(
                            'flex flex-col lg:w-[45%] items-center justify-center gap-4 lg:opacity-0 h-3/4',
                            debouncedMouseSide === 'LEFT' && 'lg:opacity-100 transition-all duration-1000'
                        )}
                    >
                        <h2 className='flex items-center text-3xl font-semibold'>
                            <FiChevronLeft />
                            <span className='mr-2'>DEVELOPER</span>
                            <span className='text-[.75em]'>/</span>
                            <FiChevronRight />
                        </h2>
                        <p className='w-3/4 max-w-[300px] text-center text-gray-200 font-light mb-4'>
                            front-end developer with a focus on producing clear, effective, and reusable code.
                        </p>
                        <div className='flex flex-col text-center items-center gap-4'>
                            <h4 className='text-red-500'>Technologies I am using:</h4>
                            <ul className='flex flex-wrap items-center justify-center max-w-[400px] gap-x-10 gap-y-8'>
                                {technologies.map(({ image, label }) => (
                                    <li key={label} className='relative flex flex-col gap-1 items-center'>
                                        <div className='relative aspect-square w-[60px]'>
                                            <Image src={image} alt={label + ' icon'} fill className='object-contain' />
                                        </div>
                                        <span>{label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div
                        className={cn(
                            'flex flex-col lg:w-[45%] items-center justify-center gap-4 lg:opacity-0 h-3/4',
                            debouncedMouseSide === 'RIGHT' && 'lg:opacity-100 transition-all duration-1000'
                        )}
                    >
                        <h2 className='flex items-center text-3xl font-semibold'>DESIGNER</h2>
                        <p className='w-3/4 max-w-[300px] text-center text-gray-200 font-light mb-4'>
                            User Interface designer who is passionate about creating elegant and useful user experiences. Who is a minimalist and
                            thinks that less is more.
                        </p>
                        <div className='flex flex-col text-center items-center gap-4'>
                            <h4 className='text-red-500'>Design Resources:</h4>
                            <ul className='flex flex-wrap items-center justify-center max-w-[400px] gap-x-10 gap-y-8'>
                                {designResources.map(({ image, label }) => (
                                    <li key={label} className='relative flex flex-col gap-1 items-center'>
                                        <div className='relative aspect-square w-[60px]'>
                                            <Image src={image} alt={label + ' icon'} fill className='object-contain' />
                                        </div>
                                        <span>{label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
