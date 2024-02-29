'use client'

import { useIntersectionObserver } from '@/hooks/use-intersection-observer'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'

interface Props {
    prevPage?: string
    nextPage?: string
}

export default function ScrollEndChangeRoute({ nextPage, prevPage }: Props) {
    const ref = useRef<HTMLDivElement>(null)
    const router = useRouter()
    const pathname = usePathname()

    const entry = useIntersectionObserver(ref, {})

    useEffect(() => {
        if (window !== undefined) {
            window.addEventListener('scroll', () => {
                console.log(window.scrollY)

                if (nextPage && entry?.isIntersecting) {
                    router.push(nextPage, { scroll: true })
                }
            })
        }

        return () => {
            if (window !== undefined) {
                window.removeEventListener('scroll', () => {
                    if (prevPage && window.scrollY <= 0) {
                        router.push(prevPage)
                    }

                    if (nextPage && entry?.isIntersecting) {
                        router.push(nextPage)
                    }
                })
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [entry?.isIntersecting, nextPage, prevPage, pathname])

    return <div ref={ref} className='h-[1px]' />
}
