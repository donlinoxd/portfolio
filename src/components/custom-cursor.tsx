'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null)
    const ringRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const dot = dotRef.current
        const ring = ringRef.current
        if (!dot || !ring) return

        let mouseX = 0
        let mouseY = 0
        let ringX = 0
        let ringY = 0
        let rafId: number

        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX
            mouseY = e.clientY
        }

        const loop = () => {
            // Dot snaps instantly
            dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`

            // Ring lerps toward dot with delay
            ringX += (mouseX - ringX) * 0.12
            ringY += (mouseY - ringY) * 0.12
            ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`

            rafId = requestAnimationFrame(loop)
        }

        window.addEventListener('mousemove', onMouseMove)
        rafId = requestAnimationFrame(loop)

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
            cancelAnimationFrame(rafId)
        }
    }, [])

    return (
        <>
            {/* Outer ring — lags behind */}
            <div
                ref={ringRef}
                className='fixed top-0 left-0 pointer-events-none z-[9999] w-9 h-9 rounded-full border border-white/70'
                style={{ willChange: 'transform' }}
            />
            {/* Dot — exact position */}
            <div
                ref={dotRef}
                className='fixed top-0 left-0 pointer-events-none z-[9999] w-1.5 h-1.5 rounded-full bg-white'
                style={{ willChange: 'transform' }}
            />
        </>
    )
}
