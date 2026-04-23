'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface FadeInProps {
    children: React.ReactNode
    className?: string
    delay?: number
    direction?: 'up' | 'none'
}

export default function FadeIn({ children, className, delay = 0, direction = 'up' }: FadeInProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: direction === 'up' ? 20 : 0 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: direction === 'up' ? 20 : 0 }}
            transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
