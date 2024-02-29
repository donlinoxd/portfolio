'use client'

import { useInView } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

interface Props {
    events: {
        setInViewId: () => void
    }
    images: {
        src: string
        alt: string
    }[]
}

export default function WorkAsideImages({ events, images }: Props) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { margin: '-200px' })

    useEffect(() => {
        if (isInView) {
            events.setInViewId()
        }
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [isInView])

    return (
        <div ref={ref} className='w-[75%] lg:w-full min-h-[140vh] grid grid-cols-[40%_60%] grid-rows-2 gap-20 my-40'>
            <div className='relative col-span-1'>
                <Image src={images[0].src} alt={images[0].alt} fill className='object-contain drop-shadow-[0_25px_25px_rgb(0_0_0_/_0.25)]' />
            </div>
            <div className='relative col-span-1'>
                <Image src={images[1].src} alt={images[1].alt} fill className='object-contain drop-shadow-[0_25px_25px_rgb(0_0_0_/_0.25)]' />
            </div>
            <div className='relative col-span-2 aspect-[16/7]'>
                <Image src={images[2].src} alt={images[2].alt} fill className='object-contain drop-shadow-[0_25px_25px_rgb(0_0_0_/_0.25)]' />
            </div>
        </div>
    )
}
