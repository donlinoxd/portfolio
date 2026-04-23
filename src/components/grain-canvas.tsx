'use client'
import { useEffect, useRef } from 'react'

export default function GrainCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const render = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            const imageData = ctx.createImageData(canvas.width, canvas.height)
            for (let i = 0; i < imageData.data.length; i += 4) {
                const value = Math.random() * 255
                imageData.data[i] = value
                imageData.data[i + 1] = value
                imageData.data[i + 2] = value
                imageData.data[i + 3] = 255
            }
            ctx.putImageData(imageData, 0, 0)
        }

        render()
        const interval = setInterval(render, 120)
        window.addEventListener('resize', render)

        return () => {
            clearInterval(interval)
            window.removeEventListener('resize', render)
        }
    }, [])

    return <canvas ref={canvasRef} className='fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-[0.03]' />
}
